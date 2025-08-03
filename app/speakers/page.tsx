"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import image from "@/public/next.svg";
import idris from "@/assets/speakers/idris.png";
import olabimpe from "@/assets/speakers/olabimpe.png";
import bashir from "@/assets/speakers/bashir-koledoye.png";
import rashidat from "@/assets/speakers/rashidat-adebisi.png";
import sarwi from "@/assets/speakers/sarwi-rahaman.png";

export default function SpeakersPage() {
  const speakers = [
    {
      id: "idris-ayodeji-bello",
      name: "Idris Ayodeji Bello",
      role: "Founding Partner at LoftyInc Capital",
      image: idris,
      social: {
        behance: "#",
        linkedin: "https://www.linkedin.com/in/belloidris/",
      },
    },
    {
      id: "olabimpe-afolabi",
      name: "Mrs Olabimpe Afolabi",
      role: "Partner, Internal Audit, Governance, Risk &amp; Compliance Services, KPMG",
      image: olabimpe,
      social: {
        behance: "#",
        linkedin: "https://www.linkedin.com/in/olabimpe-afolabi-b45749a/",
      },
    },
    {
      id: "bashir-koledoye",
      name: "Bashir Koledoye",
      role: "Managing Director at Dharmattan Nigeria Limited",
      image: bashir,
      social: {
        behance: "#",
        linkedin: "https://www.linkedin.com/in/bashir-koledoye-7a95074/",
      },
    },
    {
      id: "rashidat-adebisi",
      name: "Mrs Rashidat Adebisi",
      role: "Chief Client Officer at AXA Mansard",
      image: rashidat,
      social: {
        behance: "#",
        linkedin: "https://www.linkedin.com/in/rashidata2604/",
      },
    },
    {
      id: "sarwi-rahaman",
      name: "Sarwi Rahaman",
      role: "Head of Public Sector Sales - Enterprise Business at Airtel Networks Limited (Nigeria)",
      image: sarwi,
      social: {
        behance: "#",
        linkedin: "https://www.linkedin.com/in/sarwi-rahaman-4919105/",
      },
    },
    // {
    //   id: "wade-warren",
    //   name: "Adebayo Salami",
    //   role: "Entrepreneur",
    //   image: "/placeholder.svg?height=400&width=400",
    //   social: { behance: "#", linkedin: "#" },
    // },
  ];

  return (
    <main>
      {/* Hero Section */}
      <section className="bg-[rgb(15_25_144_/_1)] pt-20 pb-12 md:pt-28 md:pb-20 px-4 md:px-6 relative overflow-hidden">
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

        <div className="max-w-7xl mx-auto text-center relative">
          <motion.h1
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-6xl lg:text-7xl font-bold text-[#EAFFF3] mb-4 leading-tight"
          >
            Speakers
          </motion.h1>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-sm md:text-base text-white/80 flex items-center justify-center gap-2"
          >
            <Link
              href="/"
              className="text-white/80 hover:text-white transition-colors"
            >
              Home
            </Link>
            <span>/</span>
            <span className="text-white">Speakers</span>
          </motion.div>
        </div>
      </section>

      {/* Speakers Grid */}
      <section className="bg-[#EAFFF3] py-12 md:py-20 px-4 md:px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {speakers.map((speaker, index) => (
              <motion.div
                key={speaker.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="relative"
              >
                {/* Speaker Image */}
                <div className="relative mb-4 overflow-hidden rounded-lg">
                  <Image
                    src={speaker.image}
                    alt={speaker.name}
                    width={400}
                    height={400}
                    className="w-full object-cover grayscale hover:grayscale-0 hover:scale-105 transition-all duration-300 ease-in-out"
                  />
                </div>

                {/* Speaker Info */}
                <div className="bg-white p-4 md:p-6 rounded-b-lg flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                  <div className="flex-1">
                    <h3 className="text-lg md:text-xl font-bold text-[rgb(15_25_144_/_1)] mb-1">
                      {speaker.name}
                    </h3>
                    <p className="text-sm md:text-base text-gray-600 leading-relaxed">
                      {speaker.role}
                    </p>
                  </div>

                  <div className="flex gap-2 shrink-0">
                    {/* <a
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
                        e.currentTarget.style.transform = "translateY(-2px)";
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.transform = "translateY(0)";
                      }}
                    >
                      <span
                        style={{
                          fontSize: "14px",
                          fontWeight: "bold",
                          color: "#0DA04C",
                        }}
                      >
                        Be
                      </span>
                    </a> */}

                    <a
                      href={speaker.social.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-9 h-9 rounded-full bg-[rgb(15_25_144_/_1)] flex items-center justify-center hover:-translate-y-1 transition-transform duration-200"
                    >
                      <svg
                        width="16"
                        height="16"
                        viewBox="0 0 24 24"
                        fill="white"
                      >
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
  );
}
