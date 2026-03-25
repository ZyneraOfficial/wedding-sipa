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
              className="absolute md:top-[5%] top-[15%] left-[23%] z-20 w-[60%] aspect-12/5"
            >
              <Image
                src="/images/detail-event-right-date.webp"
                alt="Date background"
                fill
                className="object-contain"
              />
              <span className="absolute inset-0 flex items-center justify-center text-[15px] font-serif text-[#4A3728] tracking-wide md:text-[12px] text-[#4A3728]">
                Sabtu, 4 April 2026
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
              08.00 - Selesai
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
            10.30 - 14.00
          </motion.div>
        </motion.div>
      </div>
      {/* Location Section */}
      <div className="relative w-full max-w-sm mx-auto px-3 mb-24 -mt-50">
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
          <div className="absolute inset-0 flex flex-col items-center pt-[30%] px-[8%]">
            {/* Map Container - Polaroid style */}
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              viewport={{ once: true }}
              className="w-full flex justify-center"
            >
              <div className="w-[90%] aspect-[1.5/1] shadow-md overflow-hidden">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d63364.91090942596!2d107.50176142167967!3d-6.973068800000002!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e68eed52bf9e5ed%3A0xd4782636612e7e9e!2sGedung%20Dakwah%20Muhammadiyah!5e0!3m2!1sid!2sid!4v1774429979745!5m2!1sid!2sid"
                  className="w-full h-full border-0"
                  loading="lazy"
                  allowFullScreen
                ></iframe>
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
                Gd. Dakwah Muhammadiyah
              </h4>
              <p className="font-courier text-[#4a3a2a] text-sm leading-relaxed mx-auto text-[11px]">
                Jl. Kopo Sayati No.337, Sayati, Kec. Margahayu, Kabupaten Bandung, Jawa Barat 40228
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

