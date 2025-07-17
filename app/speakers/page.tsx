"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import image from '@/public/next.svg'

export default function SpeakersPage() {
  const speakers = [
    {
      id: "ameer",
      name: "Ameer",
      role: "Art Director",
      image: "/placeholder.svg?height=400&width=400",
      social: { behance: "#", linkedin: "#" },
    },
    {
      id: "ameerah",
      name: "Ameerah",
      role: "Digital Marketer",
      image: "/placeholder.svg?height=400&width=400",
      social: { behance: "#", linkedin: "#" },
    },
    {
      id: "student",
      name: "Student",
      role: "React Developer",
      image: "/placeholder.svg?height=400&width=400",
      social: { behance: "#", linkedin: "#" },
    },
    {
      id: "Grand Meentor",
      name: "Engr. Naasir Giwa",
      role: "UX Designer",
      image: "/placeholder.svg?height=400&width=400",
      social: { behance: "#", linkedin: "#" },
    },
    // {
    //   id: "mike-davis",
    //   name: "Mike Davis",
    //   role: "Product Manager",
    //   image: "/placeholder.svg?height=400&width=400",
    //   social: { behance: "#", linkedin: "#" },
    // },
    // {
    //   id: "wade-warren",
    //   name: "Wade Warren",
    //   role: "SaaS Designer",
    //   image: "/placeholder.svg?height=400&width=400",
    //   social: { behance: "#", linkedin: "#" },
    // },
  ]

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

        <div style={{ maxWidth: "1200px", margin: "0 auto", textAlign: "center", position: "relative" }}>
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
            Speakers
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
            <Link href="/" style={{ color: "rgba(255, 255, 255, 0.8)", textDecoration: "none" }}>
              Home
            </Link>
            <span>/</span>
            <span style={{ color: "white" }}>Speakers</span>
          </motion.div>
        </div>
      </section>

      {/* Speakers Grid */}
      <section style={{ backgroundColor: "#EAFFF3", padding: "80px 24px" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(3, 1fr)",
              gap: "32px",
            }}
          >
            {speakers.map((speaker, index) => (
              <motion.div
                key={speaker.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                style={{ position: "relative" }}
              >
                {/* Speaker Image */}
                <div
                  style={{
                    position: "relative",
                    marginBottom: "16px",
                    overflow: "hidden",
                    borderRadius: "8px",
                  }}
                >
                  <Image
                    // src={speaker.image || "/placeholder.svg"}
                    src={image}
                    alt={speaker.name}
                    width={400}
                    height={400}
                    style={{
                      width: "100%",
                      height: "400px",
                      objectFit: "cover",
                      filter: "grayscale(100%)",
                      transition: "all 0.3s ease",
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.filter = "grayscale(0%)"
                      e.currentTarget.style.transform = "scale(1.05)"
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.filter = "grayscale(100%)"
                      e.currentTarget.style.transform = "scale(1)"
                    }}
                  />

                  {/* Hover Overlay */}
                  <Link
                    href={`/speakers/${speaker.id}`}
                    style={{
                      position: "absolute",
                      top: 0,
                      left: 0,
                      right: 0,
                      bottom: 0,
                      backgroundColor: "rgb(15 25 144 / 1)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      opacity: 0,
                      transition: "opacity 0.3s ease",
                      textDecoration: "none",
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.opacity = "1"
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.opacity = "0"
                    }}
                  >
                    <span
                      style={{
                        color: "white",
                        fontSize: "18px",
                        fontWeight: "600",
                      }}
                    >
                      View Profile
                    </span>
                  </Link>
                </div>

                {/* Speaker Info */}
                <div
                  style={{
                    backgroundColor: "white",
                    padding: "24px",
                    borderRadius: "0 0 8px 8px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                  }}
                >
                  <div>
                    <h3
                      style={{
                        fontSize: "20px",
                        fontWeight: "bold",
                        color: "rgb(15 25 144 / 1)",
                        margin: "0 0 4px 0",
                      }}
                    >
                      {speaker.name}
                    </h3>
                    <p
                      style={{
                        fontSize: "16px",
                        color: "#666",
                        margin: 0,
                      }}
                    >
                      {speaker.role}
                    </p>
                  </div>

                  <div style={{ display: "flex", gap: "8px" }}>
                    <a
                      href={speaker.social.behance}
                      style={{
                        width: "36px",
                        height: "36px",
                        borderRadius: "50%",
                        backgroundColor: "#C4F82A",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        textDecoration: "none",
                        transition: "transform 0.2s ease",
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.transform = "translateY(-2px)"
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.transform = "translateY(0)"
                      }}
                    >
                      <span style={{ fontSize: "14px", fontWeight: "bold", color: "rgb(34, 197, 94)" }}>Be</span>
                    </a>

                    <a
                      href={speaker.social.linkedin}
                      style={{
                        width: "36px",
                        height: "36px",
                        borderRadius: "50%",
                        backgroundColor: "rgb(15 25 144 / 1)",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        textDecoration: "none",
                        transition: "transform 0.2s ease",
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.transform = "translateY(-2px)"
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.transform = "translateY(0)"
                      }}
                    >
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="white">
                        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                      </svg>
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}
