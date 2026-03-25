"use client";

import { useState, useRef, useEffect } from "react";
import Image from "next/image";
import { motion } from "framer-motion";

export default function HeroCollage() {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    const audio = new Audio("/audio/lagu.mp3");
    audio.loop = true;
    audio.volume = 1;
    audioRef.current = audio;

    let wasPlaying = false; // 🔥 simpan state sebelum pindah tab

    const playAudio = async () => {
      try {
        await audio.play();
        setIsPlaying(true);
      } catch {
        console.log("Autoplay blocked");
      }
    };

    playAudio();

    const handleVisibilityChange = () => {
      if (document.hidden) {
        // 🔴 TAB KELUAR → pause & simpan state
        wasPlaying = !audio.paused;
        audio.pause();
        setIsPlaying(false);
      } else {
        // 🟢 BALIK TAB → resume kalau sebelumnya lagi play
        if (wasPlaying) {
          audio.play().then(() => {
            setIsPlaying(true);
          }).catch(() => {
            console.log("Resume blocked");
          });
        }
      }
    };

    document.addEventListener("visibilitychange", handleVisibilityChange);

    return () => {
      audio.pause();
      document.removeEventListener("visibilitychange", handleVisibilityChange);
      audioRef.current = null;
    };
  }, []);

  const fadeOutPause = () => {
    if (!audioRef.current) return;

    let vol = audioRef.current.volume;

    const interval = setInterval(() => {
      if (vol > 0) {
        vol -= 0.05;
        audioRef.current!.volume = vol;
      } else {
        clearInterval(interval);
        audioRef.current!.pause();
      }
    }, 100);
  };

  const togglePlay = () => {
    if (!audioRef.current) return;

    if (isPlaying) {
      fadeOutPause();
      setIsPlaying(false);
    } else {
      audioRef.current.play();
      setIsPlaying(true);

      // fade in lagi
      let vol = 0;
      audioRef.current.volume = 0;

      const interval = setInterval(() => {
        if (vol < 1) {
          vol += 0.05;
          audioRef.current!.volume = vol;
        } else {
          clearInterval(interval);
        }
      }, 100);
    }
  };

  return (
    <>
      {/* ================= MAIN CONTENT ================= */}
      <div className="w-full max-w-lg mx-auto mt-30 px-15">
        <div className="relative w-full aspect-square">

          {/* VINYL BESAR */}
          <motion.div
            initial={{ x: -150, opacity: 0, rotate: -90, scale: 0.8 }}
            animate={{ x: 0, opacity: 1, rotate: 0, scale: 1 }}
            transition={{ duration: 1.5, ease: "easeOut", delay: 1.8 }}
            className="absolute -top-5 -right-10 z-0 w-3/4 h-3/4"
          >
            <motion.div
              animate={{ rotate: isPlaying ? 360 : 0 }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              className="w-full h-full relative"
            >
              <Image
                src="/images/vinyl.webp"
                alt="Vinyl"
                fill
                className="object-contain"
              />
            </motion.div>
          </motion.div>

          {/* COVER */}
          <div className="absolute w-3/4 h-3/4">
            {/* Main Cover Image */}
            <motion.div
              layoutId="main-photo"
              transition={{ duration: 1.2, ease: [0.76, 0, 0.24, 1] }}
              className="absolute inset-0 -top-5 -left-3 z-10 shadow-xl rounded-sm w-full h-full"
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
              className="absolute -top-15 -left-20 z-20 w-[180px] h-[80px]"
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
              className="absolute -bottom-6 -right-12 z-20 w-[170px] h-[70px]"
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
      </div>

      {/* ================= FLOATING MINI VINYL ================= */}
      <div
        onClick={togglePlay}
        className="fixed bottom-5 right-5 z-50 cursor-pointer group"
      >
        <motion.div
          animate={{ rotate: isPlaying ? 360 : 0 }}
          transition={{ duration: 6, repeat: Infinity, ease: "linear" }}
          className="relative w-16 h-16"
        >
          <Image
            src="/images/vinyl.webp"
            alt="Mini Vinyl"
            fill
            className="object-contain drop-shadow-xl"
          />

          {/* overlay play/pause */}
          <div className="absolute inset-0 flex items-center justify-center bg-black/20 rounded-full opacity-0 group-hover:opacity-100 transition">
            {isPlaying ? (
              <div className="w-3 h-3 bg-white rounded-sm" />
            ) : (
              <div className="w-0 h-0 border-l-[8px] border-l-white border-y-[6px] border-y-transparent ml-1" />
            )}
          </div>
        </motion.div>
      </div>
    </>
  );
}