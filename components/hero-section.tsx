"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import CountdownTimer from "./countdown-timer";
import image from "@/public/next.svg";
import NewCountdownTimer from "./new-countdown-timer";

export default function HeroSection() {
  return (
    <section
      style={{
        // backgroundColor: "#0DA04C",
        backgroundColor: "rgb(15 25 144 / 1)",
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Background Pattern */}
      <div
        style={{
          position: "absolute",
          top: 0,
          right: 0,
          width: "60%",
          height: "100%",
          opacity: 0.1,
          zIndex: 0,
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fillRule='evenodd'%3E%3Cg fill='%23ffffff' fillOpacity='0.1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}
      />

      <div
        style={{
          maxWidth: "1200px",
          margin: "0 auto",
          padding: "0 24px",
          // display: "grid",
          // gridTemplateColumns: "1fr 1fr",
          // gap: "64px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          width: "100%",
          zIndex: 1,
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            textAlign: "center",
          }}
        >
          <p className="text-base tracking-[10px] italic">THEME: </p>
          <motion.h1
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-[80px] font-bold text-white leading-[1.1] mb-6"
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
            // style={{
            //   fontSize: "18px",
            //   color: "rgba(255, 255, 255, 0.9)",
            //   marginBottom: "32px",
            //   lineHeight: "1.6",
            // }}
            className="text-2xl text-white/80 mb-8 max-w-5xl mx-auto"
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
            style={{
              display: "flex",
              justifyContent: "center",
              gap: "16px",
              marginBottom: "48px",
            }}
          >
            <Link
              href="https://bitooqoh.com/explore/ngm-conf-4.0"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                backgroundColor: "#0DA04C",
                color: "#fff",
                padding: "16px 32px",
                borderRadius: "25px",
                textDecoration: "none",
                fontSize: "16px",
                fontWeight: "600",
                transition: "transform 0.2s ease",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = "translateY(-2px)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = "translateY(0)";
              }}
            >
              Register Now
            </Link>
          </motion.div>
        </div>

        {/* <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          style={{ position: "relative" }}
        >
          <div
            style={{
              position: "absolute",
              top: "20px",
              right: "20px",
              backgroundColor: "white",
              padding: "12px 24px",
              borderRadius: "8px",
              fontSize: "16px",
              fontWeight: "600",
              color: "#0DA04C",
              display: "flex",
              alignItems: "center",
              gap: "8px",
              zIndex: 2,
            }}
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
              <path d="M19 3h-1V1h-2v2H8V1H6v2H5c-1.11 0-1.99.9-1.99 2L3 19c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H5V8h14v11zM7 10h5v5H7z" />
            </svg>
            FEBRUARY 24-25TH 2023
          </div>

          <Image
            src={image}
            alt="omo"
            width={600}
            height={400}
            style={{
              borderRadius: "16px",
              width: "100%",
              height: "auto",
              objectFit: "cover",
            }}
          />
        </motion.div> */}
      </div>
    </section>
  );
}
