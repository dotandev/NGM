"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
// import { use } from "react"

// interface SpeakerDetailProps {
//   params: Promise<{ id: string }>
// }

export default function SpeakerDetail() {
// { params }: SpeakerDetailProps
  // const { id } = use(params)

  const speaker = {
    name: "Ameer",
    role: "Art Director",
    image: "/placeholder.svg?height=600&width=600",
    bio: "Join these discussions for just 7500.",
    social: {
      behance: "#",
      instagram: "#",
      linkedin: "#",
    },
    sessions: [
      {
        day: "DAY 01",
        date: "12 Jan - Thursday",
        time: "10:00 AM",
        title: "Session 01 Title",
        description: "Join these discussions for just 7500.",
      },
      {
        day: "DAY 02",
        date: "14 Jan - Saturday",
        time: "2:00 PM",
        title: "Advanced Design Principles",
        description: "Join these discussions for just 7500.",
      },
    ],
  };

  return (
    <main>
      {/* Hero Section */}
      <section
        style={{
          backgroundColor: "rgb(15 25 144 / 1)",
          padding: "120px 24px 80px",
          position: "relative",
          overflow: "hidden",
        }}
      >
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

        <div
          style={{
            maxWidth: "1200px",
            margin: "0 auto",
            textAlign: "center",
            position: "relative",
          }}
        >
          <motion.h1
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            style={{
              fontSize: "72px",
              fontWeight: "bold",
              color: "#C4F82A",
              marginBottom: "16px",
              lineHeight: "1.1",
            }}
          >
            Speaker&apos;s Details
          </motion.h1>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            style={{
              fontSize: "16px",
              color: "rgba(255, 255, 255, 0.8)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: "8px",
            }}
          >
            <Link
              href="/"
              style={{
                color: "rgba(255, 255, 255, 0.8)",
                textDecoration: "none",
              }}
            >
              Home
            </Link>
            <span>/</span>
            <span style={{ color: "white" }}>Single Speakers</span>
          </motion.div>
        </div>
      </section>

      {/* Speaker Profile */}
      <section style={{ backgroundColor: "#EAFFF3", padding: "80px 24px" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: "0",
              backgroundColor: "white",
              borderRadius: "16px",
              overflow: "hidden",
              boxShadow: "0 10px 30px rgba(0, 0, 0, 0.1)",
              marginBottom: "80px",
            }}
          >
            {/* Speaker Image */}
            <div>
              <Image
                src={speaker.image || "/placeholder.svg"}
                alt={speaker.name}
                width={600}
                height={600}
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                  filter: "grayscale(100%)",
                }}
              />
            </div>

            {/* Speaker Info */}
            <div
              style={{
                padding: "64px 48px",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
              }}
            >
              <div
                style={{
                  fontSize: "16px",
                  color: "#666",
                  marginBottom: "16px",
                  fontWeight: "600",
                }}
              >
                Speaker
              </div>

              <h1
                style={{
                  fontSize: "48px",
                  fontWeight: "bold",
                  color: "#0DA04C",
                  marginBottom: "8px",
                  lineHeight: "1.2",
                }}
              >
                {speaker.name}
              </h1>

              <p
                style={{
                  fontSize: "20px",
                  color: "#666",
                  marginBottom: "32px",
                }}
              >
                {speaker.role}
              </p>

              <p
                style={{
                  fontSize: "16px",
                  color: "#666",
                  lineHeight: "1.6",
                  marginBottom: "32px",
                }}
              >
                {speaker.bio}
              </p>

              <div style={{ display: "flex", gap: "16px" }}>
                <a
                  href={speaker.social.behance}
                  style={{
                    width: "48px",
                    height: "48px",
                    borderRadius: "50%",
                    border: "2px solid rgb(15 25 144 / 1)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    textDecoration: "none",
                    transition: "all 0.2s ease",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.backgroundColor =
                      " rgb(15 25 144 / 1)";
                    e.currentTarget.style.color = "white";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.backgroundColor = "transparent";
                    e.currentTarget.style.color = " rgb(15 25 144 / 1)";
                  }}
                >
                  <span
                    style={{
                      fontSize: "16px",
                      fontWeight: "bold",
                      color: "inherit",
                    }}
                  >
                    Be
                  </span>
                </a>

                <a
                  href={speaker.social.instagram}
                  style={{
                    width: "48px",
                    height: "48px",
                    borderRadius: "50%",
                    border: "2px solid rgb(15 25 144 / 1)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
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
                    e.currentTarget.style.color = " rgb(15 25 144 / 1)";
                  }}
                >
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                  </svg>
                </a>

                <a
                  href={speaker.social.linkedin}
                  style={{
                    width: "48px",
                    height: "48px",
                    borderRadius: "50%",
                    border: "2px solid rgb(15 25 144 / 1)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
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
                    e.currentTarget.style.color = " rgb(15 25 144 / 1)";
                  }}
                >
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                  </svg>
                </a>
              </div>
            </div>
          </motion.div>

          {/* Sessions Section */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2
              style={{
                fontSize: "48px",
                fontWeight: "bold",
                color: "rgb(15 25 144 / 1)",
                marginBottom: "32px",
              }}
            >
              Sessions
            </h2>

            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(3, 1fr)",
                gap: "2px",
                marginBottom: "32px",
              }}
            >
              <div
                style={{
                  backgroundColor: "rgb(15 25 144 / 1)",
                  padding: "24px",
                  textAlign: "center",
                }}
              >
                <h3
                  style={{
                    fontSize: "24px",
                    fontWeight: "bold",
                    color: "white",
                    margin: 0,
                  }}
                >
                  DAY 01
                </h3>
                <p
                  style={{
                    color: "rgba(255, 255, 255, 0.8)",
                    margin: "8px 0 0 0",
                  }}
                >
                  12 Jan - Thursday
                </p>
              </div>
              <div
                style={{
                  backgroundColor: "#f8f9fa",
                  padding: "24px",
                  textAlign: "center",
                }}
              >
                <h3
                  style={{
                    fontSize: "24px",
                    fontWeight: "bold",
                    color: "#0DA04C",
                    margin: 0,
                  }}
                >
                  DAY 02
                </h3>
                <p style={{ color: "#666", margin: "8px 0 0 0" }}>
                  14 Jan - Saturday
                </p>
              </div>
              <div
                style={{
                  backgroundColor: "rgb(15 25 144 / 1)",
                  padding: "24px",
                  textAlign: "center",
                }}
              >
                <h3
                  style={{
                    fontSize: "24px",
                    fontWeight: "bold",
                    color: "white",
                    margin: 0,
                  }}
                >
                  DAY 03
                </h3>
                <p
                  style={{
                    color: "rgba(255, 255, 255, 0.8)",
                    margin: "8px 0 0 0",
                  }}
                >
                  16 Jan - Monday
                </p>
              </div>
            </div>

            <div
              style={{ display: "flex", flexDirection: "column", gap: "2px" }}
            >
              {speaker.sessions.map((session, index) => (
                <div
                  key={index}
                  style={{
                    backgroundColor: "rgb(15 25 144 / 1)",
                    padding: "32px",
                    display: "grid",
                    gridTemplateColumns: "150px 1fr",
                    alignItems: "center",
                    gap: "32px",
                  }}
                >
                  <div>
                    <div
                      style={{
                        fontSize: "24px",
                        fontWeight: "bold",
                        color: "#C4F82A",
                      }}
                    >
                      {session.time}
                    </div>
                  </div>

                  <div>
                    <h3
                      style={{
                        fontSize: "24px",
                        fontWeight: "bold",
                        color: "#C4F82A",
                        margin: "0 0 8px 0",
                      }}
                    >
                      {session.title}
                    </h3>
                    <p
                      style={{
                        color: "rgba(196, 248, 42, 0.8)",
                        margin: 0,
                        fontSize: "16px",
                      }}
                    >
                      {session.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
