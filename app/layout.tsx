import type { Metadata } from "next";
import { Courier_Prime, Dancing_Script, Poppins } from "next/font/google";
import "./globals.css";

const dancingScript = Dancing_Script({
  variable: "--font-dancing-script",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
});

const courierPrime = Courier_Prime({
  variable: "--font-courier-prime",
  subsets: ["latin"],
  weight: ["400", "700"],
});

export const metadata: Metadata = {
  title: "The Wedding of Dulfi & Syifa",
  description:
    "You are cordially invited to celebrate the wedding of Dulfi & Syifa",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${dancingScript.variable} ${poppins.variable} ${courierPrime.variable} antialiased`}
      >
        <div className="min-h-screen w-full max-w-md mx-auto overflow-hidden shadow-2xl">
          {children}
        </div>
      </body>
    </html>
  );
}
