"use client"

import type React from "react"

import { motion } from "framer-motion"
import Link from "next/link"
import { Facebook, Linkedin, Instagram, Twitter } from "lucide-react"
import { useState } from "react"

export default function Footer() {
  const [email, setEmail] = useState("")

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle newsletter subscription
    console.log("Subscribing:", email)
    setEmail("")
  }

  return (
    <footer style={{ backgroundColor: "#EAFFF3", padding: "80px 24px 40px" }}>
      <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
        {/* Newsletter CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          style={{
            backgroundColor: "rgb(15 25 144 / 1)",
            borderRadius: "16px",
            padding: "64px",
            marginBottom: "80px",
            position: "relative",
            overflow: "hidden",
          }}
        >
          {/* Background Pattern */}
          <div
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              opacity: 0.1,
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fillRule='evenodd'%3E%3Cg fill='%23ffffff' fillOpacity='0.1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
            }}
          />

          <div style={{ position: "relative", textAlign: "center" }}>
            <h2
              style={{
                fontSize: "48px",
                fontWeight: "bold",
                color: "#C4F82A",
                marginBottom: "16px",
                lineHeight: "1.2",
              }}
            >
              Register Today
            </h2>
            <p
              style={{
                fontSize: "18px",
                color: "rgba(255, 255, 255, 0.9)",
                marginBottom: "32px",
                maxWidth: "500px",
                margin: "0 auto 32px",
              }}
            >
             Join these discussions for just 7500.
            </p>

            <div style={{ display: "flex", gap: "16px", justifyContent: "center" }}>
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
            </div>
          </div>
        </motion.div>

        {/* Footer Content */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr 1fr 1.5fr",
            gap: "64px",
            marginBottom: "48px",
          }}
        >
          {/* Logo and Description */}
          <div>
            <Link
              href="/"
              style={{
                display: "flex",
                alignItems: "center",
                gap: "12px",
                textDecoration: "none",
                marginBottom: "24px",
              }}
            >
              <div
                style={{
                  width: "48px",
                  height: "48px",
                  backgroundColor: "rgb(15 25 144 / 1)",
                  borderRadius: "50%",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                  <path d="M12 2L2 7L12 12L22 7L12 2Z" fill="#C4F82A" />
                  <path d="M2 17L12 22L22 17" stroke="#C4F82A" strokeWidth="2" />
                  <path d="M2 12L12 17L22 12" stroke="#C4F82A" strokeWidth="2" />
                </svg>
              </div>
              <span style={{ fontSize: "28px", fontWeight: "bold", color: "rgb(15 25 144 / 1)" }}>NGM Conference</span>
            </Link>

            <p
              style={{
                fontSize: "16px",
                color: "#666",
                lineHeight: "1.6",
                marginBottom: "24px",
              }}
            >
Join these discussions for just 7500.            </p>

            <div style={{ display: "flex", gap: "12px" }}>
              {[Facebook, Linkedin, Instagram, Twitter].map((Icon, index) => (
                <a
                  key={index}
                  href="#"
                  style={{
                    width: "40px",
                    height: "40px",
                    borderRadius: "50%",
                    border: "2px solid rgb(15 25 144 / 1)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    color: "rgb(15 25 144 / 1)",
                    textDecoration: "none",
                    transition: "all 0.2s ease",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.backgroundColor = "rgb(15 25 144 / 1)"
                    e.currentTarget.style.color = "white"
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.backgroundColor = "transparent"
                    e.currentTarget.style.color = "rgb(15 25 144 / 1)"
                  }}
                >
                  <Icon size={18} />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3
              style={{
                fontSize: "20px",
                fontWeight: "bold",
                color: "rgb(15 25 144 / 1)",
                marginBottom: "24px",
              }}
            >
              Quick Links
            </h3>
            <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
              {["Home", "Speakers", "Contact Us", "Blog", "Tickets"].map((link) => (
                <Link
                  key={link}
                  href={`/${link.toLowerCase().replace(" ", "-")}`}
                  style={{
                    color: "#666",
                    textDecoration: "none",
                    fontSize: "16px",
                    transition: "color 0.2s ease",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.color = "rgb(15 25 144 / 1)"
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.color = "#666"
                  }}
                >
                  {link}
                </Link>
              ))}
            </div>
          </div>

          {/* Utility Pages */}
          <div>
            <h3
              style={{
                fontSize: "20px",
                fontWeight: "bold",
                color: "rgb(15 25 144 / 1)",
                marginBottom: "24px",
              }}
            >
              Utility Pages
            </h3>
            <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
              {["Mentors", "Board Of Trustees", "Event Timeline"].map((link) => (
                <Link
                  key={link}
                  href="#"
                  style={{
                    color: "#666",
                    textDecoration: "none",
                    fontSize: "16px",
                    transition: "color 0.2s ease",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.color = "rgb(15 25 144 / 1)"
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.color = "#666"
                  }}
                >
                  {link}
                </Link>
              ))}
            </div>
          </div>

          {/* Newsletter */}
          <div>
            <h3
              style={{
                fontSize: "20px",
                fontWeight: "bold",
                color: "rgb(15 25 144 / 1)",
                marginBottom: "24px",
              }}
            >
              Subscribe to our newsletter
            </h3>
            <p
              style={{
                fontSize: "16px",
                color: "#666",
                lineHeight: "1.6",
                marginBottom: "24px",
              }}
            >
Join these discussions for just 7500.            </p>

            <form onSubmit={handleSubscribe} style={{ display: "flex", gap: "8px" }}>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter Your e mail"
                required
                style={{
                  flex: 1,
                  padding: "12px 16px",
                  borderRadius: "25px",
                  border: "2px solid #e5e5e5",
                  fontSize: "16px",
                  outline: "none",
                  transition: "border-color 0.2s ease",
                }}
                onFocus={(e) => {
                  e.currentTarget.style.borderColor = "rgb(34, 197, 94)"
                }}
                onBlur={(e) => {
                  e.currentTarget.style.borderColor = "#e5e5e5"
                }}
              />
              <button
                type="submit"
                style={{
                  backgroundColor: "rgb(34, 197, 94)",
                  color: "white",
                  border: "none",
                  padding: "12px 24px",
                  borderRadius: "25px",
                  fontSize: "16px",
                  fontWeight: "600",
                  cursor: "pointer",
                  transition: "all 0.2s ease",
                  display: "flex",
                  alignItems: "center",
                  gap: "8px",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = "rgb(34, 197, 94)"
                  e.currentTarget.style.transform = "translateY(-1px)"
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = "rgb(15 25 144 / 1)"
                  e.currentTarget.style.transform = "translateY(0)"
                }}
              >
                Subscribe →
              </button>
            </form>
          </div>
        </div>

        {/* Bottom Bar */}
        <div
          style={{
            borderTop: "1px solid #e5e5e5",
            paddingTop: "32px",
            textAlign: "center",
          }}
        >
          <p style={{ fontSize: "16px", color: "#666", margin: 0 }}>
            <span style={{ fontWeight: "600" }}>Design & Developed by The NGM Technical Team.</span>
          </p>
        </div>
      </div>
    </footer>
  )
}
