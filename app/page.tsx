"use client";

import { useState } from "react";
import { LayoutGroup } from "framer-motion";
import CoverPage from "@/components/cover-page";
import WeddingSection from "@/components/wedding-section";

export default function Home() {
  const [isRevealed, setIsRevealed] = useState(false);
  const [contentVisible, setContentVisible] = useState(false);

  const handleOpen = () => {
    setIsRevealed(true);
    // Delay the mounting of HeroCollage and other content 
    // to allow the cover ornament to fill the screen first.
    setTimeout(() => setContentVisible(true), 1000);
  };

  return (
    <LayoutGroup>
      <main className="relative w-full">
        <WeddingSection isRevealed={contentVisible} />
        <CoverPage isRevealed={isRevealed} onOpen={handleOpen} />
      </main>
    </LayoutGroup>
  );
}
