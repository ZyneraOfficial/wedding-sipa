"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function ProfileCards() {
  return (
    <div className="relative w-full max-w-md mx-auto mt-50 aspect-14/25">
      {/* Curve Line - connecting the two cards */}
      <motion.div
        initial={{ opacity: 0, pathLength: 0 }}
        whileInView={{ opacity: 1, pathLength: 1 }}
        transition={{ duration: 1.5, ease: "easeInOut" }}
        viewport={{ once: true }}
        className="absolute top-0 z-0 flex justify-center h-full w-[250%] left-[-75%] mt-[15%]"
      >
        <Image
          src="/images/curve-line.svg"
          alt="Curve line"
          fill
          className="w-full object-fill object-top"
        />
      </motion.div>

      {/* ===== GROOM CARD (Top-Left) ===== */}
      <motion.div
        initial={{ opacity: 0, x: -50, rotate: -5 }}
        whileInView={{ opacity: 1, x: 0, rotate: 0 }}
        transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
        viewport={{ once: true }}
        className="absolute top-0 left-0 z-10 w-[44.6%] h-full"
      >
        {/* Grid paper decoration - behind card, top-right */}
        <div className="absolute top-[10%] z-0 w-[150%] aspect-square">
          <motion.div
            initial={{ opacity: 0, scale: 0.8, rotate: -10 }}
            whileInView={{ opacity: 1, scale: 1, rotate: 20 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            viewport={{ once: true }}
            className="absolute bottom[120%] right-[-15%] z-0 flex justify-center w-[50.7%] aspect-square"
          >
            <Image
              src="/images/paper-decoration.webp"
              alt="Paper decoration"
              fill
              className="w-full object-contain object-top"
            />
          </motion.div>

          <Image
            src="/images/grid-paper.webp"
            alt="Grid paper decoration"
            fill
            className="object-contain"
          />

          {/* Polaroid Frame & Text Wrap */}
          <div className="absolute inset-0 z-10 flex flex-col items-center justify-center pt-[5%] rotate-3">
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.7 }}
              viewport={{ once: true }}
              className="relative w-[74%] h-[52%] overflow-hidden shadow-md"
            >
              <div className="relative w-full h-full">
                <Image
                  src="/images/polaroid-foto1.webp"
                  alt="Groom photo"
                  fill
                  className="object-cover"
                />
              </div>
            </motion.div>

            {/* Name & Subtitle */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.9 }}
              viewport={{ once: true }}
              className="mt-[5%] text-center"
            >
              <h3 className="font-script text-[4.5vw] md:text-[20px] text-[#2A2A2A] leading-tight drop-shadow-sm">
                Dulfi Dwi Juarso
              </h3>
              <p className="font-courier text-[2.2vw] md:text-[10px] text-[#2A2A2A]/80 mt-[2%] px-8 tracking-wide">
                Putra dari Bapak Nama Bapak & Ibu Nama Ibu
              </p>
            </motion.div>
          </div>
        </div>
      </motion.div>


      {/* ===== BRIDE CARD (Bottom-Right) ===== */}
      <motion.div
        initial={{ opacity: 0, x: 50, rotate: 5 }}
        whileInView={{ opacity: 1, x: 0, rotate: 0 }}
        transition={{ duration: 0.8, ease: "easeOut", delay: 0.4 }}
        viewport={{ once: true }}
        className="absolute top-0 right-0 z-10 w-[46.9%] h-full"
      >
        {/* Notebook paper decoration - behind card, bottom-right */}
        <div className="absolute top-[50%] right-[5%] z-0 w-[140%] aspect-square">
          <Image
            src="/images/notebook-paper.webp"
            alt="Notebook paper decoration"
            fill
            className="object-contain"
          />

          {/* ===== FLOWER DECORATION (Middle-Right) ===== */}
          <motion.div
            initial={{ opacity: 0, scale: 0, rotate: -45 }}
            whileInView={{ opacity: 1, scale: 1, rotate: -15 }}
            transition={{
              type: "spring",
              stiffness: 100,
              damping: 15,
              delay: 1.1
            }}
            viewport={{ once: true }}
            className="absolute -top-[15%] -left-[15%] z-20 w-[43.5%] h-[56.5%]"
          >
            <Image
              src="/images/flower-with-tape.webp"
              alt="Flower with tape"
              fill
              className="object-contain"
            />
          </motion.div>

          <div className="absolute inset-0 z-10 flex flex-col items-center justify-center -left-[5%]">
            {/* Polaroid Frame */}
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.9 }}
              viewport={{ once: true }}
              className="relative w-[74%] h-[52%] z-10 rounded-sm shadow-lg"
            >
              <div className="relative w-full h-full overflow-hidden">
                <Image
                  src="/images/polaroid-foto2.webp"
                  alt="Bride photo"
                  fill
                  className="object-cover"
                />
              </div>
            </motion.div>

            {/* Name & Subtitle */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 1.1 }}
              viewport={{ once: true }}
              className="mt-[5%] text-center"
            >
              <h3 className="font-script text-[4.5vw] md:text-[20px] text-[#2A2A2A] leading-tight drop-shadow-sm">
                Syifa Nabilah
              </h3>
              <p className="font-courier text-[2.2vw] md:text-[10px] text-[#2A2A2A]/80 mt-[2%] px-8 tracking-wide">
                Putri dari Bapak Nama Bapak & Ibu Nama Ibu
              </p>
            </motion.div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}