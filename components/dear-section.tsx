"use client";

import Image from "next/image";
import { useSearchParams } from "next/navigation";
import { Suspense } from "react";

function DearContent() {
  const searchParams = useSearchParams();
  const to = searchParams.get("to");

  return (
    <div className="w-full max-w-lg mx-auto mt-10 px-10">
      <div className="relative w-full">
        {/* Flower decoration - right side */}
        <div className="absolute -right-4 -top-22 w-[90px] z-20 rotate-20">
          <Image
            src="/images/dried-flower.webp"
            alt="Flower decoration"
            width={180}
            height={360}
            className="w-full h-auto"
          />
        </div>

        {/* Paper + Tape container */}
        <div className="relative w-full">
          {/* Tape decoration - top left */}
          <div className="absolute top-5 -left-4 w-[80px] z-20 -rotate-40">
            <Image
              src="/images/tape.webp"
              alt="Tape decoration"
              width={200}
              height={60}
              className="w-full h-auto opacity-80"
            />
          </div>

          {/* Tape decoration - top right */}
          <div className="absolute bottom-5 -right-5 w-[80px] z-20 -rotate-55">
            <Image
              src="/images/tape.webp"
              alt="Tape decoration"
              width={200}
              height={60}
              className="w-full h-auto opacity-80"
            />
          </div>

          {/* Torn paper background with text */}
          <div className="relative z-20">
            <Image
              src="/images/paper-dear.webp"
              alt="Paper background"
              width={600}
              height={180}
              className="w-full h-auto"
            />
            {/* Text overlay on paper */}
            <div className="absolute inset-0 flex flex-col items-center justify-center">
              <span className="font-script text-[#A87045] text-[20px] leading-tight">
                Dear
              </span>
              <span className="font-body text-[#4A3728] text-[14px] tracking-widest mt-1">
                {to || "Tamu Undangan"}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function DearSection() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <DearContent />
    </Suspense>
  );
}