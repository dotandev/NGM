"use client";

import type React from "react";

import { motion } from "framer-motion";
import Link from "next/link";
// import { useState } from "react"

export default function CTASections() {
  // const [email, setEmail] = useState("")

  // const handleRegister = (e: React.FormEvent) => {
  //   e.preventDefault()
  //   console.log("Registering:", email)
  //   setEmail("")
  // }

  return (
    <section style={{ backgroundColor: "#EAFFF3", padding: "80px 24px" }}>
      <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: "32px",
            marginBottom: "64px",
          }}
        >
          {/* Book Your Seat */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            style={{
              backgroundColor: "#C4F82A",
              borderRadius: "16px",
              padding: "48px",
              textAlign: "center",
            }}
          >
            <h2
              style={{
                fontSize: "48px",
                fontWeight: "bold",
                color: "#0DA04C",
                marginBottom: "32px",
                lineHeight: "1.2",
              }}
            >
              Book Your Seat
            </h2>

            <Link
              href="/tickets"
              style={{
                backgroundColor: "white",
                color: "#0DA04C",
                padding: "16px 32px",
                borderRadius: "25px",
                textDecoration: "none",
                fontSize: "18px",
                fontWeight: "600",
                display: "inline-block",
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

          {/* Become a Sponsor */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            style={{
              backgroundColor: "#0DA04C",
              borderRadius: "16px",
              padding: "48px",
              textAlign: "center",
            }}
          >
            <h2
              style={{
                fontSize: "48px",
                fontWeight: "bold",
                color: "white",
                marginBottom: "32px",
                lineHeight: "1.2",
              }}
            >
              Become a Sponsor
            </h2>

            <Link
              href="/sponsor"
              style={{
                backgroundColor: "#C4F82A",
                color: "#0DA04C",
                padding: "16px 32px",
                borderRadius: "25px",
                textDecoration: "none",
                fontSize: "18px",
                fontWeight: "600",
                display: "inline-block",
                transition: "transform 0.2s ease",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = "translateY(-2px)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = "translateY(0)";
              }}
            >
              Become Sponsor
            </Link>
          </motion.div>
        </div>

        {/* Register Today */}
        {/* <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: */}
      </div>
    </section>
  );
}
