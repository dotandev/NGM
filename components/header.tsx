"use client";

// @typescript-eslint/no-unused-expressions

import Link from "next/link";
import { motion } from "framer-motion";
import {
  ShoppingCart,
  // , ChevronDown
} from "lucide-react";
import { useState } from "react";
import NgmLogo from "./ngm-logo";

export default function Header() {
  const [isHomeOpen, setIsHomeOpen] = useState(false);
  // const [isPagesOpen, setIsPagesOpen] = useState(false)

  {
    isHomeOpen;
  }
  return (
    <>
      <motion.header
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="py-2"
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          // backgroundColor: "#0DA04C",
          backgroundColor: "rgb(15 25 144 / 1)",
          color: "white",
          // padding: "16px 24px",
          zIndex: 1000,
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <nav className="container mx-auto flex items-center justify-between">
          <Link
            href="/"
            style={{
              display: "flex",
              alignItems: "center",
              gap: "12px",
              textDecoration: "none",
            }}
          >
            <NgmLogo isLight style={{ width: "40px", height: "70px" }} />
          </Link>

          <div style={{ display: "flex", alignItems: "center", gap: "32px" }}>
            <Link
              href="/"
              // style={{ position: "relative" }}
              // onMouseEnter={() => setIsHomeOpen(true)}
              // onMouseLeave={() => setIsHomeOpen(false)}
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
            </Link>

            <Link
              href="/agenda"
              style={{
                color: "white",
                textDecoration: "none",
                fontSize: "16px",
              }}
            >
              Agenda
            </Link>

            <Link
              href="/speakers"
              style={{
                color: "white",
                textDecoration: "none",
                fontSize: "16px",
              }}
            >
              Speakers
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
          </div>

          <div style={{ display: "flex", alignItems: "center", gap: "16px" }}>
            <Link
              href="https://bitooqoh.com/explore/ngm-conf-4.0"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                backgroundColor: "#fff",
                color: "rgb(15 25 144 / 1)",
                padding: "12px 24px",
                borderRadius: "25px",
                textDecoration: "none",
                fontSize: "16px",
                fontWeight: "600",
              }}
            >
              Register Now
            </Link>

            {/* <button
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
            <ShoppingCart size={20} color="#0DA04C" />
          </button> */}
          </div>
        </nav>
      </motion.header>
    </>
  );
}
