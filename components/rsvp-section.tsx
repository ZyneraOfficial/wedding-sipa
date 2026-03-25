"use client";

import { useState, useEffect } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { motion, AnimatePresence } from "framer-motion";
import { submitRSVP, getRSVPs } from "@/app/actions/rsvp";
import { formatDistanceToNow } from "date-fns";
import { id } from "date-fns/locale";
import { ChevronDown, Loader2, Send } from "lucide-react";

const rsvpSchema = z.object({
  nama: z.string().min(1, "Nama harus diisi"),
  konfirmasi: z.string().min(1, "Silakan pilih konfirmasi kehadiran"),
  jumlah: z.number().min(1, "Jumlah tamu minimal 1"),
  ucapan: z.string().min(1, "Ucapan & doa harus diisi"),
});

type RSVPFormData = z.infer<typeof rsvpSchema>;

interface RSVPMessage {
  timestamp: string;
  nama: string;
  ucapan: string;
  konfirmasi: string;
}

export default function RSVPSection() {
  const [messages, setMessages] = useState<RSVPMessage[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [success, setSuccess] = useState(false);
  const [page, setPage] = useState(1);
  const [hasMore, setHasMore] = useState(false);
  const [isLoadingMore, setIsLoadingMore] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<RSVPFormData>({
    resolver: zodResolver(rsvpSchema),
    defaultValues: {
      jumlah: 1,
    },
  });

  const fetchMessages = async (isInitial = false) => {
    if (isInitial) {
      setIsLoading(true);
      setPage(1);
    } else {
      setIsLoadingMore(true);
    }

    const { data, hasMore: more } = await getRSVPs(isInitial ? 1 : page + 1);

    if (isInitial) {
      setMessages(data);
    } else {
      setMessages((prev) => [...prev, ...data]);
      setPage((prev) => prev + 1);
    }

    setHasMore(more);
    setIsLoading(false);
    setIsLoadingMore(false);
  };

  useEffect(() => {
    let ignore = false;
    async function startFetching() {
      setIsLoading(true);
      try {
        const { data, hasMore: more } = await getRSVPs(1);
        if (!ignore) {
          setMessages(data);
          setHasMore(more);
        }
      } finally {
        if (!ignore) {
          setIsLoading(false);
        }
      }
    }
    startFetching();
    return () => {
      ignore = true;
    };
  }, []);

  const onSubmit: SubmitHandler<RSVPFormData> = async (data) => {
    setIsSubmitting(true);
    const result = await submitRSVP(data);
    setIsSubmitting(false);

    if (result.success) {
      setSuccess(true);
      reset();
      fetchMessages(true);
      setTimeout(() => setSuccess(false), 5000);
    } else {
      alert(result.error || "Gagal mengirim RSVP");
    }
  };

  return (
    <div className="relative z-10 w-full px-6 py-12 flex flex-col items-center">
      {/* Header */}
      <div className="text-center mb-10">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="font-script text-4xl text-brown-dark mb-4"
        >
          Doa & Ucapan
        </motion.h2>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
          viewport={{ once: true }}
          className="font-body text-sm text-brown-dark/70 leading-relaxed max-w-xs mx-auto"
        >
          Berikan doa dan ucapan terbaik Anda untuk kedua mempelai.
        </motion.p>
      </div>

      {/* Form Container */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="w-full max-w-sm rounded-2xl px-4"
      >
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          {/* Nama */}
          <div className="space-y-1">
            <label htmlFor="nama" className="block text-xs font-bold text-brown-dark uppercase tracking-wider">
              Nama Tamu
            </label>
            <input
              {...register("nama")}
              type="text"
              id="nama"
              placeholder="Masukkan nama Anda"
              className="w-full px-3 py-2 bg-transparent border-2 border-[#3B1A06]/50 rounded-xl focus:outline-none focus:border-[#3B1A06] text-brown-dark transition-colors"
            />
            {errors.nama && <span className="text-[10px] text-red-500">{errors.nama.message}</span>}
          </div>

          {/* Konfirmasi */}
          <div className="space-y-1">
            <label htmlFor="konfirmasi" className="block text-xs font-bold text-brown-dark uppercase tracking-wider">
              Konfirmasi Kehadiran
            </label>
            <div className="relative">
              <select
                {...register("konfirmasi")}
                id="konfirmasi"
                className="peer w-full px-4 py-3 bg-transparent border-2 border-[#3B1A06]/50 rounded-xl focus:outline-none focus:border-[#3B1A06] text-brown-dark transition-colors appearance-none"
              >
                <option value="">Konfirmasi Kehadiran</option>
                <option value="Hadir">Hadir</option>
                <option value="Tidak Hadir">Tidak Hadir</option>
                <option value="Masih Ragu">Masih Ragu</option>
              </select>
              <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 w-5 h-5 text-brown-dark/50 pointer-events-none transition-transform duration-300 peer-focus:rotate-180" />
            </div>
            {errors.konfirmasi && <span className="text-[10px] text-red-500">{errors.konfirmasi.message}</span>}
          </div>

          {/* Jumlah Tamu */}
          <div className="space-y-1">
            <label htmlFor="jumlah" className="block text-xs font-bold text-brown-dark uppercase tracking-wider">
              Jumlah Tamu
            </label>
            <input
              {...register("jumlah", { valueAsNumber: true })}
              type="number"
              id="jumlah"
              min="1"
              className="w-full px-4 py-3 bg-transparent border-2 border-[#3B1A06]/50 rounded-xl focus:outline-none focus:border-[#3B1A06] text-brown-dark transition-colors"
            />
            {errors.jumlah && <span className="text-[10px] text-red-500">{errors.jumlah.message}</span>}
          </div>

          {/* Ucapan */}
          <div className="space-y-1">
            <label htmlFor="ucapan" className="block text-xs font-bold text-brown-dark uppercase tracking-wider">
              Ucapan dan doa
            </label>
            <textarea
              {...register("ucapan")}
              id="ucapan"
              rows={4}
              placeholder="Tuliskan ucapan & doa Anda..."
              className="w-full px-4 py-3 bg-transparent border-2 border-[#3B1A06]/50 rounded-xl focus:outline-none focus:border-[#3B1A06] text-brown-dark transition-colors resize-none"
            />
            {errors.ucapan && <span className="text-[10px] text-red-500">{errors.ucapan.message}</span>}
          </div>

          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full py-4 bg-brown-medium text-white font-bold rounded-xl shadow-lg hover:bg-brown-dark transition-all flex items-center justify-center gap-2 group disabled:opacity-70"
          >
            {isSubmitting ? (
              <Loader2 className="w-5 h-5 animate-spin" />
            ) : (
              <>
                Kirim Ucapan
                <Send className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </>
            )}
          </button>

          <AnimatePresence>
            {success && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                className="text-center text-sm text-green-600 font-medium"
              >
                Terima kasih! Ucapan Anda telah terkirim.
              </motion.div>
            )}
          </AnimatePresence>
        </form>
      </motion.div>

      {/* Messages List */}
      <div className="w-full max-w-sm mt-12 space-y-4 px-4 flex flex-col items-center mb-30">
        {isLoading ? (
          <div className="flex justify-center py-10">
            <Loader2 className="w-8 h-8 animate-spin text-brown-medium" />
          </div>
        ) : (
          <>
            {messages.map((msg, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: (index % 5) * 0.1 }}
                className="w-full p-5 bg-white/60 backdrop-blur-sm rounded-2xl border border-brown-medium/20 shadow-sm relative overflow-hidden"
              >
                <div className="flex items-center gap-2 font-bold text-brown-dark mb-1">
                  <span>{msg.nama}</span>
                  <span className="text-sm text-brown-dark/80 italic">
                    {msg.konfirmasi}
                  </span>
                </div>
                <p className="text-sm text-brown-dark/80 italic leading-relaxed mb-3">
                  &ldquo;{msg.ucapan}&rdquo;
                </p>
                <div className="text-[10px] text-brown-medium font-bold uppercase tracking-wider">
                  {msg.timestamp ? (
                    formatDistanceToNow(new Date(msg.timestamp), { addSuffix: true, locale: id })
                  ) : 'Baru saja'}
                </div>
              </motion.div>
            ))}

            {hasMore && (
              <motion.button
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                onClick={() => fetchMessages()}
                disabled={isLoadingMore}
                className="mt-6 px-6 py-2 bg-white/40 hover:bg-white/60 backdrop-blur-sm border border-brown-medium/30 rounded-full text-xs font-bold text-brown-dark uppercase tracking-widest transition-all flex items-center gap-2 disabled:opacity-50"
              >
                {isLoadingMore ? (
                  <>
                    <Loader2 className="w-3 h-3 animate-spin" />
                    Memuat...
                  </>
                ) : (
                  'Lihat Lebih Banyak'
                )}
              </motion.button>
            )}
          </>
        )}
      </div>
    </div>
  );
}
