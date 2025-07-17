"use client"

// @typescript-eslint/no-unused-expressions

import Link from "next/link"
import { motion } from "framer-motion"
import {
  ShoppingCart
  // , ChevronDown
} from "lucide-react"
import { useState } from "react"

export default function Header() {
  const [
    isHomeOpen,
    setIsHomeOpen] = useState(false)
  // const [isPagesOpen, setIsPagesOpen] = useState(false)

  { isHomeOpen }
  return (
    <>
      <motion.header
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          // backgroundColor: "rgb(34, 197, 94)",
          backgroundColor: "rgb(15 25 144 / 1)",
          color: "white",
          padding: "16px 24px",
          zIndex: 1000,
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <Link href="/" style={{ display: "flex", alignItems: "center", gap: "12px", textDecoration: "none" }}>
          <div
            style={{
              width: "40px",
              height: "40px",
              backgroundColor: "#C4F82A",
              borderRadius: "50%",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
              <path d="M12 2L2 7L12 12L22 7L12 2Z" fill="rgb(34, 197, 94)" />
              <path d="M2 17L12 22L22 17" stroke="rgb(34, 197, 94)" strokeWidth="2" />
              <path d="M2 12L12 17L22 12" stroke="rgb(34, 197, 94)" strokeWidth="2" />
            </svg>
          </div>
          <span style={{ fontSize: "24px", fontWeight: "bold", color: "white" }}>NGM Conference</span>
        </Link>

        <nav style={{ display: "flex", alignItems: "center", gap: "32px" }}>
          <div
            style={{ position: "relative" }}
            onMouseEnter={() => setIsHomeOpen(true)}
            onMouseLeave={() => setIsHomeOpen(false)}
          >
            <button
              style={{
                display: "flex",
                alignItems: "center",
                gap: "4px",
                color: "white",
                fontSize: "16px",
                background: "none",
                border: "none",
                cursor: "pointer",
              }}
            >
              Home
              {/* <ChevronDown size={16} /> */}
            </button>
          </div>

          <Link href="/agenda" style={{ color: "white", textDecoration: "none", fontSize: "16px" }}>
            Agenda
          </Link>

          <Link href="/speakers" style={{ color: "white", textDecoration: "none", fontSize: "16px" }}>
            Speakers
          </Link>

          <Link href="/blog" style={{ color: "white", textDecoration: "none", fontSize: "16px" }}>
            Blog
          </Link>

          {/* <div
          style={{ position: "relative" }}
          onMouseEnter={() => setIsPagesOpen(true)}
          onMouseLeave={() => setIsPagesOpen(false)}
        >
          <button
            style={{
              display: "flex",
              alignItems: "center",
              gap: "4px",
              color: "white",
              fontSize: "16px",
              background: "none",
              border: "none",
              cursor: "pointer",
            }}
          >
            Pages <ChevronDown size={16} />
          </button>
        </div> */}
        </nav>

        <div style={{ display: "flex", alignItems: "center", gap: "16px" }}>
          <Link
            href="/tickets"
            style={{
              backgroundColor: "#C4F82A",
              color: "rgb(34, 197, 94)",
              padding: "12px 24px",
              borderRadius: "25px",
              textDecoration: "none",
              fontSize: "16px",
              fontWeight: "600",
            }}
          >
            Buy Tickets
          </Link>

          <button
            style={{
              backgroundColor: "white",
              border: "none",
              borderRadius: "50%",
              width: "40px",
              height: "40px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              cursor: "pointer",
            }}

          // onClick={}
          >
            <ShoppingCart size={20} color="rgb(34, 197, 94)" />
          </button>
        </div>
      </motion.header>
    </>
  )
}
