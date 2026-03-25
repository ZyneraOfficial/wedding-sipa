"use client";

import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

interface PhotoCollageProps {
  isRevealed?: boolean;
}

export default function PhotoCollage({ isRevealed }: PhotoCollageProps) {
  return (
    <div className="w-full max-w-lg mx-auto mt-10 px-12">
      <div className="relative w-full aspect-square">

        {/* Top Right Flower (Behind Cover) */}
        <AnimatePresence>
          {!isRevealed && (
            <motion.div 
              initial={{ opacity: 1 }}
              exit={{ opacity: 0, scale: 0.8, transition: { duration: 0.5, delay: 0.8 } }}
              className="absolute -top-12 -right-12 z-0 w-[120px] h-[120px]"
            >
              <Image
                src="/images/flower.webp"
                alt="Flower Decoration"
                fill
                className="object-contain"
              />
            </motion.div>
          )}
        </AnimatePresence>

        {/* Main Cover Image */}
        <motion.div 
          layoutId="main-photo"
          transition={{ duration: 1.2, ease: [0.76, 0, 0.24, 1] }}
          className="absolute inset-0 z-10 shadow-xl rounded-sm"
        >
          <Image
            src="/images/cover-foto.png"
            alt="Dulfi & Syifa Cover"
            fill
            className="object-contain"
            priority
          />
        </motion.div>

        {/* Top Left Tape: 'you are my' */}
        <motion.div 
          layoutId="tape-you-are-my"
          transition={{ duration: 1.2, ease: [0.76, 0, 0.24, 1] }}
          className="absolute -top-13 -left-16 z-20 w-[180px] h-[80px]"
        >
          <Image
            src="/images/paper-you-are-my.svg"
            alt="You are my tape"
            fill
            className="object-contain drop-shadow-sm"
          />
        </motion.div>

        {/* Bottom Right Tape: 'everything' */}
        <motion.div 
          layoutId="tape-everything"
          transition={{ duration: 1.2, ease: [0.76, 0, 0.24, 1] }}
          className="absolute -bottom-8 -right-12 z-20 w-[170px] h-[70px]"
        >
          <Image
            src="/images/paper-everithing.svg"
            alt="Everything tape"
            fill
            className="object-contain drop-shadow-sm"
          />
        </motion.div>

      </div>
    </div>
  )
}