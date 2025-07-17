"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import CountdownTimer from "./countdown-timer"
import image from '@/public/next.svg'

export default function HeroSection() {
  return (
    <section
      style={{
        // backgroundColor: "rgb(34, 197, 94)",
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
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fillRule='evenodd'%3E%3Cg fill='%23ffffff' fillOpacity='0.1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}
      />

      <div
        style={{
          maxWidth: "1200px",
          margin: "0 auto",
          padding: "0 24px",
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: "64px",
          alignItems: "center",
          width: "100%",
        }}
      >
        <div>
          <motion.h1
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            style={{
              fontSize: "72px",
              fontWeight: "bold",
              color: "#C4F82A",
              lineHeight: "1.1",
              marginBottom: "24px",
              fontFamily: "system-ui, -apple-system, sans-serif",
            }}
          >
            The Mentor-Mentee Conference Of The Year.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            style={{
              fontSize: "18px",
              color: "rgba(255, 255, 255, 0.9)",
              marginBottom: "32px",
              lineHeight: "1.6",
            }}
          >
            Join these discussions for just 7500.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            style={{ display: "flex", gap: "16px", marginBottom: "48px" }}
          >
            <Link
              href="/tickets"
              style={{
                backgroundColor: "#C4F82A",
                color: "rgb(34, 197, 94)",
                padding: "16px 32px",
                borderRadius: "25px",
                textDecoration: "none",
                fontSize: "16px",
                fontWeight: "600",
                transition: "transform 0.2s ease",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = "translateY(-2px)"
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = "translateY(0)"
              }}
            >
              Buy Tickets
            </Link>

            <Link
              href="/sponsor"
              style={{
                backgroundColor: "white",
                color: "rgb(34, 197, 94)",
                padding: "16px 32px",
                borderRadius: "25px",
                textDecoration: "none",
                fontSize: "16px",
                fontWeight: "600",
                transition: "transform 0.2s ease",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = "translateY(-2px)"
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = "translateY(0)"
              }}
            >
              Become Sponsor
            </Link>
          </motion.div>

          <CountdownTimer />
        </div>

        <motion.div
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
              color: "rgb(34, 197, 94)",
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
        </motion.div>
      </div>
    </section>
  )
}
