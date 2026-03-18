"use client";

import Image from "next/image";
import EventTimer from "@/components/event-timer";
import { motion } from "framer-motion";

export default function EventDetails() {
  return (
    <>
      {/* Detail Event */}
      <div className="relative w-full flex flex-col items-center mt-30">
        <div className="relative">
          <motion.h2 
            initial={{ opacity: 0, x: -20, rotate: -5 }}
            whileInView={{ opacity: 1, x: 0, rotate: -2 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="font-script text-[11vw] md:text-[42px] text-white absolute -top-[70%] -left-[25%] z-20 drop-shadow-sm"
          >
            Detail
          </motion.h2>
          <motion.h2 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="font-serif text-[12vw] md:text-[48px] text-white/95 leading-none -right-[30%] tracking-wider relative z-10 drop-shadow-md"
          >
            Acara
          </motion.h2>
        </div>
      </div>
      <div className="relative w-full aspect-5/6 sm:aspect-4/3 mb-[15%] flex">
        <motion.div 
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
          className="w-[55%] h-full relative flex flex-col justify-center items-center"
        >
          {/* Flower Illustration */}
          <div className="absolute right-0 w-[140%] h-full z-0">
            <Image
              src="/images/detail-event-right-paper.webp"
              alt="Akad decoration"
              fill
              className="-scale-x-100"
            />
            {/* Top Left Date Tape */}
            <motion.div 
              initial={{ scale: 0, rotate: -10 }}
              whileInView={{ scale: 1, rotate: -2 }}
              transition={{ type: "spring", stiffness: 100, damping: 15, delay: 0.8 }}
              viewport={{ once: true }}
              className="absolute top-[15%] left-[23%] z-20 w-[45%] aspect-12/5"
            >
              <Image
                src="/images/detail-event-right-date.webp"
                alt="Date background"
                fill
                className="object-contain"
              />
              <span className="absolute inset-0 flex items-center justify-center font-courier text-[2.5vw] md:text-[10px] text-[#4A3728]">
                4 April 2026
              </span>
            </motion.div>
          </div>

          <div className="relative -left-[10%] z-20 flex flex-col items-center">
            <motion.div 
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              viewport={{ once: true }}
              className="w-[75%] aspect-square relative mb-[20%]"
            >
              <Image
                src="/images/detail-event-flower.webp"
                alt="Flower with tape"
                fill
                className="object-cover"
              />
            </motion.div>
            <motion.div 
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 1 }}
              viewport={{ once: true }}
              className="text-[8vw] md:text-[32px] font-serif text-[#4A3728] leading-none"
            >
              AKAD
            </motion.div>
            <motion.div 
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 1.1 }}
              viewport={{ once: true }}
              className="text-[3.5vw] md:text-[14px] font-serif text-[#4A3728] mt-[17%]"
            >
              09.00 - Selesai
            </motion.div>
          </div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          viewport={{ once: true }}
          className="w-[45%] h-full relative flex flex-col justify-center items-center"
        >
          <motion.div 
            initial={{ opacity: 0, scale: 0, rotate: 30 }}
            whileInView={{ opacity: 1, scale: 1, rotate: 45 }}
            transition={{ type: "spring", stiffness: 100, damping: 15, delay: 1.2 }}
            viewport={{ once: true }}
            className="w-[45%] aspect-square relative mb-[10%]"
          >
            <Image
              src="/images/flower-with-tape.webp"
              alt="Flower with tape"
              fill
              className="object-cover"
            />
          </motion.div>
          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 1.4 }}
            viewport={{ once: true }}
            className="text-[8vw] md:text-[32px] font-serif leading-none"
          >
            RESEPSI
          </motion.div>
          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 1.5 }}
            viewport={{ once: true }}
            className="text-[3.5vw] md:text-[14px] font-serif mt-[10%]"
          >
            09.00 - Selesai
          </motion.div>
        </motion.div>
      </div>
      {/* Location Section */}
      <div className="relative w-full max-w-sm mx-auto px-5 mb-24 -mt-50">
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="relative w-full aspect-4/5 drop-shadow-xl transform rotate-1"
        >
          {/* Background Torn Paper */}
          <div className="absolute inset-0">
            <Image
              src="/images/detail-event-paper.webp"
              alt="Background paper"
              fill
              className="object-contain"
            />
          </div>

          {/* Content overlay */}
          <div className="absolute inset-0 flex flex-col items-center pt-[30%] px-[10%]">
            {/* Map Container - Polaroid style */}
            <motion.div 
              initial={{ scale: 0.95, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              viewport={{ once: true }}
              className="w-full relative aspect-1.5/1 shadow-md flex flex-col rounded-[2px]"
            >
              <div className="w-full h-full relative overflow-hidden rounded-[1px]">
                <Image
                  src="/images/detail-event-map.webp"
                  alt="Event location map"
                  fill
                  className="object-cover"
                />
              </div>
            </motion.div>

            {/* Text Information */}
            <motion.div 
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.8 }}
              viewport={{ once: true }}
              className="mt-2 text-center"
            >
              <h4 className="font-courier text-[#4a3a2a] font-bold text-lg tracking-widest uppercase text-[12px]">
                Nama Gedung Pernikahan
              </h4>
              <p className="font-courier text-[#4a3a2a] text-sm leading-relaxed mx-auto text-[11px]">
                Jl. Raya Kehadiran No. 123, Bandung, Jawa Barat
              </p>
            </motion.div>
          </div>
        </motion.div>
      </div>
      {/* Event Timer */}
      <motion.div 
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        viewport={{ once: true }}
        className="relative w-full flex justify-center -mt-20"
      >
        <EventTimer />
      </motion.div>
    </>
  );
}

