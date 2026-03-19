"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function ThanksSection() {
  return (
    <section className="relative w-full flex flex-col items-center overflow-hidden">
      <div className="max-w-md w-full relative flex">

        {/* Left Side: Polaroids */}
        <div className="flex flex-col gap-6 pt-10 relative z-10 w-1/3">
          {[1, 2, 3].map((i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -20, }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.2 }}
              className="relative w-30 h-34 bottom-[8%]"
            >
              <Image
                src="/images/thanks-polaroid.webp"
                alt="Polaroid frame"
                fill
                className="object-contain"
              />
            </motion.div>
          ))}
        </div>

        {/* Right Side: Papers */}
        <div className="flex flex-col relative w-2/3">
          {/* Main Notebook Paper */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="relative w-full h-[400px] mt-4"
          >
            <Image
              src="/images/thanks-paper.webp"
              alt="Notebook paper"
              fill
              className="object-contain drop-shadow-md"
            />

            {/* Paper Clip */}
            <div className="absolute top-[3%] right-[30%] w-35 h-37 z-20">
              <Image
                src="/images/thanks-paper1.webp"
                alt="Paper clip"
                fill
                className="object-contain"
              />
            </div>

            {/* Ucapan Torn Paper */}
            <div className="absolute inset-0 flex items-center justify-center mt-10">
              <div className="relative w-full h-[80%] left-[5%] bottom-[5%]">
                <Image
                  src="/images/thanks-paper4.webp"
                  alt="Torn grid paper"
                  fill
                  className="object-contain drop-shadow-sm"
                />
                <div className="absolute inset-0 flex flex-col items-center justify-center px-8 py-6 text-center left-[10%]">
                  <h3 className="font-script text-2xl text-[#A87045] mb-4">Ucapan</h3>
                  <p className="font-courier text-[10px] text-[#A87045] leading-relaxed italic">
                    Lorem ipsum dolor sit amet consectetur. Diam congue volutpat vestibulum enim mattis ac fermentum.
                  </p>
                </div>
              </div>
            </div>

            {/* Date */}
            <div className="absolute bottom-[10%] right-[10%] font-courier text-[12px] text-[#A87045] font-bold">
              01/01/2026
            </div>
          </motion.div>
        </div>

      </div>
      {/* Bottom Left Tape: D&S */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.8 }}
        className="absolute bottom-[12%] left-[-5%] w-42 h-18 z-20"
      >
        <Image
          src="/images/thanks-paper2.webp"
          alt="D&S Tape"
          fill
          className="object-contain"
        />
        <span className="absolute inset-0 flex items-center justify-center font-script text-2xl text-brown-dark left-[-10%] rotate-[-5deg]">
          D & S
        </span>
      </motion.div>

      {/* Bottom Torn Paper: Terima Kasih */}
      <motion.div
        initial={{ opacity: 0, x: 30 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.5 }}
        className="relative w-full h-[250px] -mt-20 self-end top-[20px] md:scale-110 md:top-0"
      >
        <Image
          src="/images/thanks-paper3.webp"
          alt="Torn grid paper"
          fill
          className="object-contain drop-shadow-sm"
        />
        <div className="absolute bottom-[15%] right-[10%] text-right space-y-2">
          <p className="font-script text-2xl text-brown-dark">Terima</p>
          <p className="font-script text-3xl text-brown-dark -mt-2">Kasih</p>
        </div>
      </motion.div>
    </section>
  );
}
