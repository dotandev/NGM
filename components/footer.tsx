"use client";

import type React from "react";

import { motion } from "framer-motion";
import Link from "next/link";
import { Facebook, Linkedin, Instagram, Twitter } from "lucide-react";
import { useState, useEffect } from "react";
import Image from "next/image";
import NgmConfLogoBlue from "@/assets/ngm-conf-logo-blue.png";

export default function Footer() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkIsMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    // Check on mount
    checkIsMobile();

    // Add event listener for resize
    window.addEventListener("resize", checkIsMobile);

    // Cleanup
    return () => window.removeEventListener("resize", checkIsMobile);
  }, []);

  return (
    <footer
      style={{
        backgroundColor: "#EAFFF3",
        padding: isMobile ? "40px 16px 24px" : "80px 24px 40px",
      }}
    >
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
            padding: isMobile ? "32px 20px" : "64px",
            marginBottom: isMobile ? "40px" : "80px",
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
                fontSize: isMobile ? "32px" : "48px",
                fontWeight: "bold",
                color: "#FFF",
                marginBottom: "16px",
                lineHeight: "1.2",
              }}
            >
              Register Today
            </h2>
            <p
              style={{
                fontSize: isMobile ? "16px" : "18px",
                color: "rgba(255, 255, 255, 0.9)",
                marginBottom: isMobile ? "24px" : "32px",
                maxWidth: "500px",
                margin: isMobile ? "0 auto 24px" : "0 auto 32px",
              }}
            >
              Join these discussions for just 7500.
            </p>

            <div
              style={{
                display: "flex",
                flexDirection: isMobile ? "column" : "row",
                gap: isMobile ? "12px" : "16px",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Link
                href="https://bitooqoh.com/explore/ngm-conf-4.0"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  backgroundColor: "#0DA04C",
                  color: "#fff",
                  padding: isMobile ? "14px 28px" : "16px 32px",
                  borderRadius: "25px",
                  textDecoration: "none",
                  fontSize: isMobile ? "14px" : "16px",
                  fontWeight: "600",
                  transition: "transform 0.2s ease",
                  minWidth: isMobile ? "200px" : "auto",
                  textAlign: "center",
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

              <Link
                href="/sponsor"
                style={{
                  backgroundColor: "white",
                  color: "#0DA04C",
                  padding: isMobile ? "14px 28px" : "16px 32px",
                  borderRadius: "25px",
                  textDecoration: "none",
                  fontSize: isMobile ? "14px" : "16px",
                  fontWeight: "600",
                  transition: "transform 0.2s ease",
                  minWidth: isMobile ? "200px" : "auto",
                  textAlign: "center",
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
            </div>
          </div>
        </motion.div>

        {/* Footer Content */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: isMobile ? "1fr" : "1fr 1fr 1fr",
            gap: isMobile ? "32px" : "64px",
            marginBottom: isMobile ? "32px" : "48px",
          }}
        >
          {/* Logo and Description */}
          <div style={{ textAlign: isMobile ? "center" : "left" }}>
            <Link
              href="/"
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: isMobile ? "center" : "flex-start",
                gap: "12px",
                textDecoration: "none",
                marginBottom: "24px",
              }}
            >
              {/* <NgmLogo style={{ width: "90px", height: "130px" }} /> */}
              <Image
                src={NgmConfLogoBlue}
                alt="Ngm Logo"
                width={isMobile ? 100 : 140}
                height={isMobile ? 72 : 100}
              />
            </Link>

            <p
              style={{
                fontSize: "16px",
                color: "#666",
                lineHeight: "1.6",
                marginBottom: "24px",
              }}
            >
              BOLD Ideas, Fearless Execution.{" "}
            </p>

            <div
              style={{
                display: "flex",
                gap: "12px",
                justifyContent: isMobile ? "center" : "flex-start",
              }}
            >
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
                    e.currentTarget.style.backgroundColor =
                      "rgb(15 25 144 / 1)";
                    e.currentTarget.style.color = "white";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.backgroundColor = "transparent";
                    e.currentTarget.style.color = "rgb(15 25 144 / 1)";
                  }}
                >
                  <Icon size={18} />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div style={{ textAlign: isMobile ? "center" : "left" }}>
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
            <div
              style={{ display: "flex", flexDirection: "column", gap: "12px" }}
            >
              {["Home", "Speakers", "Contact Us"].map((link) => (
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
                    e.currentTarget.style.color = "rgb(15 25 144 / 1)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.color = "#666";
                  }}
                >
                  {link}
                </Link>
              ))}
            </div>
          </div>

          {/* Newsletter */}
          <div style={{ textAlign: isMobile ? "center" : "left" }}>
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
              Get first hand news from us!{" "}
            </p>

            <button
              type="submit"
              style={{
                height: "52px",
                backgroundColor: "#0DA04C",
                color: "white",
                border: "none",
                padding: "12px 24px",
                borderRadius: "25px",
                fontSize: isMobile ? "14px" : "16px",
                fontWeight: "600",
                cursor: "pointer",
                transition: "all 0.2s ease",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                gap: "8px",
                width: isMobile ? "100%" : "auto",
                maxWidth: isMobile ? "250px" : "none",
                margin: isMobile ? "0 auto" : "0",
              }}
            >
              Subscribe
              <span>→</span>
            </button>
          </div>
        </div>

        {/* Bottom Bar */}
        <div
          style={{
            borderTop: "1px solid #e5e5e5",
            paddingTop: isMobile ? "24px" : "32px",
            textAlign: "center",
          }}
        >
          <p
            style={{
              fontSize: isMobile ? "14px" : "16px",
              color: "#666",
              margin: 0,
            }}
          >
            <span style={{ fontWeight: "600" }}>
              Design & Developed by The NGM Technical Team.
            </span>
          </p>
        </div>
      </div>
    </footer>
  );
}
