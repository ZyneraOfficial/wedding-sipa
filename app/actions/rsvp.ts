"use server";

import { GoogleSpreadsheet } from "google-spreadsheet";
import { JWT } from "google-auth-library";
import { z } from "zod";
import { revalidatePath } from "next/cache";

const rsvpSchema = z.object({
  nama: z.string().min(1, "Nama harus diisi"),
  konfirmasi: z.string().min(1, "Konfirmasi harus dipilih"),
  jumlah: z.number().min(1, "Jumlah tamu minimal 1"),
  ucapan: z.string().nullable(),
});

export type RSVPInput = z.infer<typeof rsvpSchema>;

async function getDoc() {
  // Parsing key with resilience for quotes and escaped newlines
  const privateKey = process.env.GOOGLE_PRIVATE_KEY
    ?.replace(/^"|"$/g, '') // Remove wrapping quotes if any
    ?.replace(/\\n/g, "\n");

  const auth = new JWT({
    email: process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL,
    key: privateKey,
    scopes: ["https://www.googleapis.com/auth/spreadsheets"],
  });

  const doc = new GoogleSpreadsheet(process.env.GOOGLE_SHEET_ID!, auth);
  await doc.loadInfo();
  return doc;
}

export async function submitRSVP(formData: RSVPInput) {
  try {
    if (!process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL || !process.env.GOOGLE_PRIVATE_KEY || !process.env.GOOGLE_SHEET_ID) {
      console.error("DEBUG: Missing environment variables");
      return { error: "Konfigurasi server (Environment Variables) belum lengkap." };
    }

    const validatedFields = rsvpSchema.safeParse(formData);

    if (!validatedFields.success) {
      console.error("DEBUG: Validation failed", validatedFields.error.format());
      return { error: "Data yang Anda masukkan tidak valid." };
    }

    const { nama, konfirmasi, jumlah, ucapan } = validatedFields.data;
    const doc = await getDoc();
    const sheet = doc.sheetsByIndex[0];

    await sheet.addRow({
      Timestamp: new Date().toISOString(),
      "Nama Tamu": nama,
      "Konfirmasi Kehadiran": konfirmasi,
      "Jumlah Tamu": jumlah.toString(),
      "Ucapan dan doa": ucapan || "-",
    });

    revalidatePath("/");
    return { success: true };
  } catch (error: unknown) {
    console.log("--- RSVP SERVER LOG START ---");
    console.error("RSVP SERVER ERROR:", error);
    console.log("--- RSVP SERVER LOG END ---");

    // Memberikan pesan error yang lebih detail jika dalam mode development
    let message = "Gagal mengirim RSVP. Silakan coba lagi nanti.";
    if (process.env.NODE_ENV === 'development' && error instanceof Error) {
      message = `Error: ${error.message}`;
    }

    return { error: message };
  }
}

export async function getRSVPs(page: number = 1, limit: number = 5) {
  try {
    const doc = await getDoc();
    const sheet = doc.sheetsByIndex[0];
    const rows = await sheet.getRows();

    const start = (page - 1) * limit;
    const end = start + limit;
    
    // Sort and filter first as before
    const allData = rows
      .map((row) => ({
        timestamp: row.get("Timestamp") as string,
        nama: row.get("Nama Tamu") as string,
        ucapan: row.get("Ucapan dan doa") as string,
      }))
      .filter((r) => r.nama && r.ucapan)
      .reverse();

    return {
      data: allData.slice(start, end),
      hasMore: end < allData.length,
      total: allData.length
    };
  } catch (error) {
    console.error("Fetch RSVPs Error:", error);
    return { data: [], hasMore: false, total: 0 };
  }
}

export async function getGuestName(slug: string) {
  if (!slug) return null;
  
  try {
    const doc = await getDoc();
    const sheet = doc.sheetsByTitle["Daftar Tamu"];
    
    if (!sheet) {
      console.warn("Sheet 'Daftar Tamu' not found. Please create it.");
      return null;
    }

    const rows = await sheet.getRows();
    const guestRow = rows.find(row => row.get("Slug") === slug);
    
    if (guestRow) {
      return guestRow.get("Nama") as string;
    }

    return null;
  } catch (error) {
    console.error("Error fetching guest name:", error);
    return null;
  }
}
