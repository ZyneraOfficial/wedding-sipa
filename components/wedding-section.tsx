"use client";

import Image from "next/image";
import { motion, Variants } from "framer-motion";
import NoiseOverlay from "@/components/noise-overlay";
import HeroCollage from "@/components/hero-collage";
import QuoteSection from "@/components/quote-section";
import ProfileCards from "@/components/profile-cards";
import EventDetails from "@/components/event-details";
import GiftSection from "./gift-section";
import RSVPSection from "./rsvp-section";
import ThanksSection from "./thanks-section";

const fadeInUp: Variants = {
  initial: { opacity: 0, y: 40 },
  whileInView: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: "easeOut" }
  },
};

const AnimatedSection = ({ children, delay = 0 }: { children: React.ReactNode; delay?: number }) => (
  <motion.div
    variants={fadeInUp}
    initial="initial"
    whileInView="whileInView"
    viewport={{ once: true, margin: "-10%" }}
    transition={delay ? { delay } : undefined}
    className="w-full"
  >
    {children}
  </motion.div>
);

interface WeddingSectionProps {
  isRevealed: boolean;
}

export default function WeddingSection({ isRevealed }: WeddingSectionProps) {
  return (
    <section className="relative bg-[#778873] min-h-screen flex flex-col items-center overflow-hidden">
      <NoiseOverlay />

      {/* Ornament - following the cover page from below */}
      <motion.div
        initial={{ y: "100%", opacity: 0 }}
        animate={isRevealed ? { y: 0, opacity: 1 } : { y: "100%", opacity: 0 }}
        transition={{ duration: 1.2, ease: [0.76, 0, 0.24, 1] }}
        className="absolute w-[1200px] h-[1300px] -top-120 z-0"
      >
        <Image src="/images/big-paper.webp" alt="Big Paper" fill className="w-full object-cover rotate-[-120deg]" />
      </motion.div>

      {/* Main Content - reveal after ornament starts moving */}
      {isRevealed && (
        <>
          <HeroCollage />
          <AnimatedSection><QuoteSection /></AnimatedSection>
          <AnimatedSection><ProfileCards /></AnimatedSection>
          <AnimatedSection><EventDetails /></AnimatedSection>

          <div className="relative w-full h-full pb-50 mt-10">
            <Image src="/images/back-paper.webp" alt="Back Paper" fill className="w-full" />
            <div className="relative z-10 w-full flex flex-col items-center">
              <AnimatedSection><GiftSection /></AnimatedSection>
              <AnimatedSection><RSVPSection /></AnimatedSection>
            </div>
          </div>

          <AnimatedSection><ThanksSection /></AnimatedSection>
        </>
      )}
    </section>
  );
}
