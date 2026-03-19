"use client";

import { Variants } from "framer-motion";
import { motion } from "framer-motion";
import Image from "next/image";
import NoiseOverlay from "@/components/noise-overlay";
import PhotoCollage from "@/components/photo-collage";
import DearSection from "@/components/dear-section";
import { MailOpen } from "lucide-react";


interface CoverPageProps {
  isRevealed: boolean;
  onOpen: () => void;
}

export default function CoverPage({ isRevealed, onOpen }: CoverPageProps) {
  const containerVariants: Variants = {
    initial: { y: 0 },
    animate: {
      y: 0,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
    exit: {
      y: "-100dvh",
      transition: {
        delay: 1.5, // Move curtain away after everything is done
        duration: 0.8,
        ease: [0.76, 0, 0.24, 1],
      },
    },
  };

  const itemVariants: Variants = {
    initial: { opacity: 0, y: 20 },
    animate: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.22, 1, 0.36, 1],
      },
    },
    exit: {
      opacity: 0,
      transition: { delay: 1.2, duration: 0.5 }
    }
  };

  const titleVariants: Variants = {
    initial: { opacity: 0, y: -30 },
    animate: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 1,
        ease: [0.22, 1, 0.36, 1],
      },
    },
    exit: {
      opacity: 0,
      transition: { delay: 1.2, duration: 0.5 }
    }
  };

  return (
    <motion.section
      className={`fixed inset-y-0 left-1/2 -translate-x-1/2 z-50 bg-[#778873] w-full max-w-md h-dvh flex flex-col items-center pt-16 pb-0 px-6 overflow-hidden shadow-2xl ${isRevealed ? "pointer-events-none" : ""
        }`}
      initial="initial"
      animate={isRevealed ? "exit" : "animate"}
      variants={containerVariants}
    >
      <NoiseOverlay />

      {/* Title */}
      <motion.h1
        variants={titleVariants}
        className="relative font-script text-[48px] font-bold leading-[100%] tracking-[0%] text-center text-white mb-14 drop-shadow-md"
      >
        The Wedding
      </motion.h1>

      {/* Photo Collage */}
      <motion.div variants={itemVariants} className="w-full md:w-8/9">
        <PhotoCollage isRevealed={isRevealed} />
      </motion.div>

      {/* Dear Section */}
      <motion.div variants={itemVariants} className="w-full md:w-8/9">
        <DearSection />
      </motion.div>

      {/* Button Container */}
      <div className="absolute bottom-[5%] left-1/2 -translate-x-1/2 flex flex-col items-center gap-6 w-full z-20">
        <motion.button
          whileHover={{ scale: 1.05, backgroundColor: "#63412C" }}
          whileTap={{ scale: 0.95 }}
          onClick={onOpen}
          className="px-8 py-3.5 bg-[#A87045] text-white font-serif tracking-[0.15em] text-xs shadow-2xl transition-all z-30 flex items-center gap-3 rounded-xl border border-white/20 uppercase font-bold"
        >
          <MailOpen className="w-4 h-4" />
          Buka Undangan
        </motion.button>
      </div>

      <motion.div
        className="absolute w-[700px] h-[1000px] -bottom-160 select-none touch-none z-10"
        initial={{ y: 100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{
          y: [0, -300, -700, -1100, -1600], // Stop motion paper "curtain"
          transition: {
            duration: 1.5,
            ease: "easeInOut",
            times: [0, 0.25, 0.5, 0.75, 1]
          }
        }}
        transition={{ delay: 1, duration: 1 }}
      >
        <Image
          src="/images/big-paper.webp"
          alt="Paper ornament"
          fill
          className="w-full object-cover rotate-[87.4deg] pointer-events-none"
        />
      </motion.div>
    </motion.section>
  );
}
