"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function QuoteSection() {
  return (
    <div className="relative z-10 flex flex-col items-center px-6 text-center">
      <p className="font-courier text-[13px] leading-relaxed text-[#2A2A2A]">
        &ldquo;Dan di antara tanda-tanda (kebesaran)-Nya ialah Dia menciptakan pasangan-pasangan untukmu dari jenismu sendiri, agar kamu cenderung dan merasa tenteram kepadanya.&rdquo;
      </p>
      <span className="font-courier text-[12px] text-[#A87045] tracking-widest mt-4">
        - Ar-Rum: 21 -
      </span>

      {/* Stamp */}
      <motion.div
        initial={{ scale: 1.5, opacity: 0, rotate: -15 }}
        whileInView={{ scale: 1, opacity: 1, rotate: 0 }}
        viewport={{ once: true }}
        transition={{
          type: "spring",
          stiffness: 260,
          damping: 20,
          delay: 0.5
        }}
        className="mt-6 w-[100px] h-[100px]"
      >
        <Image
          src="/images/wax-stamp.webp"
          alt="Wax seal stamp"
          width={200}
          height={200}
          className="w-full h-auto drop-shadow-lg"
        />
      </motion.div>
    </div>
  );
}
