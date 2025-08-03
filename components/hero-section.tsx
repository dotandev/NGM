"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import NewCountdownTimer from "./new-countdown-timer";

export default function HeroSection() {
  return (
    <section className="bg-[rgb(15,25,144)] min-h-screen flex items-center relative overflow-hidden py-8 md:py-0">
      {/* Background Pattern */}
      <div
        className="absolute top-0 right-0 w-3/5 md:w-3/5 h-full opacity-10 z-0"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fillRule='evenodd'%3E%3Cg fill='%23ffffff' fillOpacity='0.1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}
      />

      <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8 flex justify-center items-center w-full z-10">
        <div className="flex flex-col items-center text-center max-w-6xl mx-auto">
          <p className="text-sm md:text-base tracking-[6px] md:tracking-[10px] italic text-white/90 mb-4">
            THEME:
          </p>
          <motion.h1
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-[80px] font-bold text-white leading-[1.1] mb-4 md:mb-6 px-2"
          >
            <strong>BOLD </strong>
            Ideas,
            <br />
            Fearless Execution
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-base md:text-lg lg:text-xl xl:text-2xl text-white/80 mb-6 md:mb-8 max-w-4xl mx-auto px-4 leading-relaxed"
          >
            Witness the future of innovation at the NGM Conference 4.0, where
            bold ideas meet fearless execution. Join us for a transformative
            experience that will ignite your passion and propel you into the
            next era of technological advancement.
          </motion.p>

          <NewCountdownTimer />

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="flex justify-center gap-4 mb-8 md:mb-12"
          >
            <Link
              href="https://bitooqoh.com/explore/ngm-conf-4.0"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#0DA04C] text-white py-3 md:py-4 px-6 md:px-8 rounded-full no-underline text-sm md:text-base font-semibold transition-all duration-200 hover:-translate-y-0.5 hover:shadow-lg active:translate-y-0"
            >
              Register Now
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
