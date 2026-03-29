"use client";

import Image from "next/image";
import { useState } from "react";
import { motion } from "framer-motion";

export default function GiftSection() {
  const [copied, setCopied] = useState<string | null>(null);

  const accounts = [
    {
      bank: "Bank Mandiri",
      number: "1320030000856 ",
      owner: "Dulfi Abdullah Fajar",
      logos: ["/images/bmandiri.png"]
    },
    {
      bank: "Bank BCA",
      number: "8100907438",
      owner: "Syifa Shintawati Nurazizah",
      logos: ["/images/bbca.svg"]
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
        Kehadiran Bapak/Ibu/Saudara/i merupakan hadiah terindah bagi kami.
        Namun, apabila ingin memberikan tanda kasih kepada kami, dapat disampaikan melalui pilihan di bawah ini.
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
            <div className="flex gap-2 mb-2">
              {acc.logos.map((logo, i) => (
                <div key={i} className="w-32 h-12 relative">
                  <Image
                    src={logo}
                    alt="Bank Logo"
                    fill
                    className="object-contain"
                  />
                </div>
              ))}
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
          Syifa Shintawati Nurazizah
        </h3>
        <p className="font-courier text-[13px] text-[#8B8B8B] max-w-xs leading-relaxed">
          Gg. Saluyu Selatan RT. 03 RW. 09 No. 61, Ds. Sayati, Kec. Margahayu, Kab. Bandung 40228
        </p>
      </motion.div>
    </section>
  );
}

