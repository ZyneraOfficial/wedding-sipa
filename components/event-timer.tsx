"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

export default function EventTimer() {
  const [timeLeft, setTimeLeft] = useState<TimeLeft | null>(null);

  const targetDate = new Date("2026-04-04T09:00:00").getTime();

  useEffect(() => {
    const calculateTimeLeft = () => {
      const now = new Date().getTime();
      const difference = targetDate - now;

      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60),
        });
      } else {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
      }
    };

    calculateTimeLeft();
    const timer = setInterval(calculateTimeLeft, 1000);

    return () => clearInterval(timer);
  }, [targetDate]);

  // Prevent hydration mismatch
  if (!timeLeft) return (
    <div className="relative w-full max-w-[450px] aspect-10/4 flex items-center justify-center">
      <Image
        src="/images/event-timer.webp"
        alt="Timer background"
        fill
        className="object-contain"
      />
    </div>
  );

  return (
    <div className="relative w-full aspect-9/4 flex items-center justify-center">
      {/* Background Paper Asset */}
      <div className="absolute inset-0">
        <Image
          src="/images/event-timer.webp"
          alt="Timer background"
          fill
          className="object-contain"
          priority
        />
      </div>

      {/* Timer Content */}
      <div className="relative z-10 flex items-center justify-center w-full h-full px-[20%]">
        <div className="flex items-center justify-between w-full">
          <TimeUnit value={timeLeft.days} label="Days" />
          <Separator />
          <TimeUnit value={timeLeft.hours} label="Hours" />
          <Separator />
          <TimeUnit value={timeLeft.minutes} label="Minutes" />
          <Separator />
          <TimeUnit value={timeLeft.seconds} label="Seconds" />
        </div>
      </div>
    </div>
  );
}

function TimeUnit({ value, label }: { value: number; label: string }) {
  return (
    <div className="flex flex-col items-center">
      <span className="text-[20px] font-serif text-[#4A3728] leading-none mb-1">
        {value.toString().padStart(2, '0')}
      </span>
      <span className="text-[7px] font-serif text-[#4A3728]/80 leading-none tracking-widest uppercase">
        {label}
      </span>
    </div>
  );
}

function Separator() {
  return (
    <div className="flex items-center justify-center h-full pt-1">
      <div className="w-2 h-2 rounded-full bg-[#4A3728] opacity-90 mx-0.5" />
    </div>
  );
}
