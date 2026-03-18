"use client";

import { useState, useRef, useEffect } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Music, Pause, Play } from "lucide-react";

export default function HeroCollage() {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    // Placeholder music URL (Royalty Free)
    const audio = new Audio("https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3");
    audio.loop = true;
    audioRef.current = audio;

    let isMounted = true;
    let playPromise: Promise<void> | null = null;

    // Attempt to play automatically
    const playAudio = async () => {
      try {
        playPromise = audio.play();
        await playPromise;
        if (isMounted) {
          setIsPlaying(true);
        }
      } catch (err) {
        // Only log if it's not an AbortError (which we expect on unmount)
        if (err instanceof Error && err.name !== "AbortError") {
          console.error("Autoplay failed:", err);
        }
      }
    };

    playAudio();

    return () => {
      isMounted = false;
      if (playPromise) {
        playPromise.then(() => {
          audio.pause();
        }).catch(() => {
          // Ignore errors from failed initial play
        });
      } else {
        audio.pause();
      }
      audioRef.current = null;
    };
  }, []);

  const togglePlay = () => {
    if (!audioRef.current) return;

    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play().catch(err => {
        console.error("Playback failed:", err);
      });
    }
    setIsPlaying(!isPlaying);
  };

  return (
    <div className="w-full max-w-lg mx-auto mt-30 px-15">
      <div className="relative w-full aspect-square">
        {/* Vinyl */}
        <motion.div
          initial={{ x: -150, opacity: 0, rotate: -90, scale: 0.8 }}
          animate={{ x: 0, opacity: 1, rotate: 0, scale: 1 }}
          transition={{ 
            duration: 1.5, 
            ease: "easeOut", 
            delay: 1.2 // Sync better with cover exit
          }}
          className="absolute -top-5 -right-10 z-0 w-3/4 h-3/4 cursor-pointer group"
          onClick={togglePlay}
        >
          <motion.div
            animate={{ rotate: isPlaying ? 360 : 0 }}
            transition={{
              duration: 20,
              repeat: Infinity,
              ease: "linear",
            }}
            className="w-full h-full relative"
          >
            <Image
              src="/images/vinyl.webp"
              alt="Vinyl Decoration"
              fill
              className="object-contain"
            />

            {/* Play/Pause Overlay on Hover */}
            <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity bg-black/10 rounded-full">
              {isPlaying ? (
                <Pause className="w-12 h-12 text-white drop-shadow-lg opacity-10" />
              ) : (
                <Play className="w-12 h-12 text-white drop-shadow-lg translate-x-1 opacity-10" />
              )}
            </div>
          </motion.div>

          {/* Music Icon Indicator */}
          <div className={`absolute -bottom-2 -left-2 p-2 rounded-full bg-white/80 backdrop-blur-sm shadow-sm transition-all ${isPlaying ? 'animate-bounce' : ''}`}>
            <Music className={`w-4 h-4 ${isPlaying ? 'text-brown-medium' : 'text-gray-400'}`} />
          </div>
        </motion.div>

        <div className="absolute w-3/4 h-3/4">
          {/* Main Cover Image */}
          <motion.div
            layoutId="main-photo"
            transition={{ duration: 1.2, ease: [0.76, 0, 0.24, 1] }}
            className="absolute inset-0 -top-5 -left-3 z-10 shadow-xl rounded-sm w-full h-full"
          >
            <Image
              src="/images/photo-with-effect.svg"
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
  );
}
