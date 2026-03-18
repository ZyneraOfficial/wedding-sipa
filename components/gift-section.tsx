"use client";

import Image from "next/image";
import { useState } from "react";
import { motion } from "framer-motion";

export default function GiftSection() {
  const [copied, setCopied] = useState<string | null>(null);

  const accounts = [
    {
      bank: "Bank BCA",
      number: "1234567890",
      owner: "Dulfi",
    },
    {
      bank: "Bank BCA",
      number: "0987654321",
      owner: "Syifa",
    },
  ];

  const copyToClipboard = (num: string) => {
    navigator.clipboard.writeText(num);
    setCopied(num);
    setTimeout(() => setCopied(null), 2000);
  };

  return (
    <section className="relative w-full py-24 flex flex-col items-center mt-30 text-brown-dark">
      {/* Heading */}
      <motion.h2 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="font-serif text-[32px] md:text-[42px] mb-3 tracking-wide"
      >
        Wedding Gift
      </motion.h2>

      {/* Description */}
      <motion.p 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.2 }}
        viewport={{ once: true }}
        className="px-10 text-center font-courier text-[11px] md:text-[13px] mb-16 max-w-xl leading-relaxed"
      >
        Kehadiran Bapa/Ibu/Saudara/i merupakan hadiah terindah. Namun, Apabila hendak memberikan ungkapan kasih kepada kami, dapat memalui .... di Bawah ini:
      </motion.p>

      {/* Bank Section */}
      <div className="flex items-center justify-center gap-5 mb-4">
        {accounts.map((acc, index) => (
          <motion.div 
            key={index}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 + index * 0.2 }}
            viewport={{ once: true }}
            className="flex flex-col items-center"
          >
            <div className="w-32 h-10 relative mb-2">
              <Image
                src="/images/bca.webp"
                alt="BCA Logo"
                fill
                className="object-contain"
              />
            </div>
            <p className="font-courier text-[11px] mb-1">
              a/n {acc.owner}
            </p>
            <button
              onClick={() => copyToClipboard(acc.number)}
              className="font-courier text-[11px] text-[#8B8B8B] hover:text-[#3D2B1F] transition-colors relative"
            >
              {acc.number}
              {copied === acc.number && (
                <span className="absolute -bottom-6 left-1/2 -translate-x-1/2 text-[10px] bg-[#3D2B1F] text-white px-2 py-0.5 rounded">
                  Copied!
                </span>
              )}
            </button>
          </motion.div>
        ))}
      </div>

      {/* Physical Gift Section */}
      <motion.div 
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, delay: 0.8 }}
        viewport={{ once: true }}
        className="flex flex-col items-center px-6 text-center"
      >
        <div className="w-[100px] h-[100px] relative">
          <Image
            src="/images/gift.webp"
            alt="Gift"
            fill
            className="object-contain"
          />
        </div>
        <h3 className="font-courier text-[15px] mb-1">
          Nama Lengkap
        </h3>
        <p className="font-courier text-[13px] text-[#8B8B8B] max-w-xs leading-relaxed">
          Alamat Lengkap
        </p>
      </motion.div>
    </section>
  );
}

