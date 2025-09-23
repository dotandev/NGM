"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useState, useEffect } from "react";

export default function AgendaPage() {
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
  const scheduleData = [
    {
      time: {
        start: "7:00 AM",
        end: "9:45 AM",
      },
      title: "Pre-Event Medicals & Networking sessions",
      description: null,
      speaker: null,
    },
    {
      time: {
        start: "10:00 AM",
        end: "10:30 AM",
      },
      title: "Opening Ceremony & Welcome Address",
      description: null,
      speaker: null,
    },
    {
      time: {
        start: "10:30 AM",
        end: "10:55 AM",
      },
      title: "Keynote Address",
      description: "Mr. Kola Adesina, GMD, Sahara Group",
      speaker: {
        name: "Mr. Kola Adesina",
        role: "GMD, Sahara Group",
        image: null,
      },
    },
    {
      time: {
        start: "11:00 AM",
        end: "12:00 PM",
      },
      title: "Panel Session",
      description: null,
      speaker: null,
    },
    {
      time: {
        start: "12:00 PM",
        end: "1:00 PM",
      },
      title: "SME Pitch Competition",
      description: null,
      speaker: null,
    },
    {
      time: {
        start: "1:10 PM",
        end: "1:20 PM",
      },
      title: "Distinguished Guest Speech",
      description: "Senator Shuaib Afolabi Salisu",
      speaker: {
        name: "Senator Shuaib Afolabi Salisu",
        role: null,
        image: null,
      },
    },
    {
      time: {
        start: "1:25 PM",
        end: "1:40 PM",
      },
      title: "Announcement of SME Winners",
      description: null,
      speaker: null,
    },
    {
      time: {
        start: "1:40 PM",
        end: "2:10 PM",
      },
      title: "Lunch & Networking Break",
      description: null,
      speaker: null,
    },
    {
      time: {
        start: "2:20 PM",
        end: "3:00 PM",
      },
      title: "Fireside Chat",
      description: null,
      speaker: null,
    },
    {
      time: {
        start: "2:20 PM",
        end: "3:50 PM",
      },
      title: "Idea Fair & Case Study Competitions Documentary and Awards",
      description: null,
      speaker: null,
    },
    {
      time: {
        start: "4:10 PM",
        end: "4:30 PM",
      },
      title: "NGM Talk",
      description: null,
      speaker: null,
    },
    {
      time: {
        start: "4:30 PM",
        end: "5:00 PM",
      },
      title: "Award Presentations & Closing Remarks",
      description: null,
      speaker: null,
    },
  ];

  return (
    <main
      style={{
        backgroundColor: "#fff",
        minHeight: "100vh",
        padding: isMobile ? "60px 16px 40px" : "80px 24px",
      }}
    >
      <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          style={{ marginBottom: isMobile ? "40px" : "64px" }}
        >
          <h1
            style={{
              fontSize: isMobile ? "40px" : "72px",
              fontWeight: "bold",
              color: "#0DA04C",
              marginBottom: isMobile ? "24px" : "32px",
            }}
          >
            Schedule
          </h1>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: isMobile ? "1fr" : "repeat(3, 1fr)",
              gap: "2px",
              marginBottom: isMobile ? "32px" : "48px",
            }}
          >
            <div
              style={{
                backgroundColor: "#f8f9fa",
                padding: isMobile ? "20px" : "24px",
                textAlign: "center",
              }}
            >
              <h3
                style={{
                  fontSize: isMobile ? "20px" : "24px",
                  fontWeight: "bold",
                  color: "#0DA04C",
                  margin: 0,
                }}
              >
                October 4, 2025
              </h3>
              {/* <p
                style={{
                  color: "#666",
                  margin: "8px 0 0 0",
                  fontSize: isMobile ? "14px" : "16px",
                }}
              >
                12 October - Sunday
              </p> */}
            </div>
            {/* <div
              style={{
                backgroundColor: "#0DA04C",
                padding: "24px",
                textAlign: "center",
              }}
            >
              <h3 style={{ fontSize: "24px", fontWeight: "bold", color: "white", margin: 0 }}>DAY 02</h3>
              <p style={{ color: "rgba(255, 255, 255, 0.8)", margin: "8px 0 0 0" }}>14 Jan - Saturday</p>
            </div> */}
            {/* <div
              style={{
                backgroundColor: "#0DA04C",
                padding: "24px",
                textAlign: "center",
                border: "2px solid #C4F82A",
              }}
            >
              <h3 style={{ fontSize: "24px", fontWeight: "bold", color: "white", margin: 0 }}>DAY 03</h3>
              <p style={{ color: "rgba(255, 255, 255, 0.8)", margin: "8px 0 0 0" }}>16 Jan - Monday</p>
            </div> */}
          </div>
        </motion.div>

        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: isMobile ? "12px" : "2px",
          }}
        >
          {scheduleData.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              style={{
                backgroundColor: "#0DA04C",
                border: "1px solid rgba(196, 248, 42, 0.3)",
                padding: isMobile ? "20px" : "32px",
                display: isMobile ? "flex" : "grid",
                flexDirection: isMobile ? "column" : undefined,
                gridTemplateColumns: isMobile ? undefined : "150px 1fr auto",
                alignItems: isMobile ? "flex-start" : "center",
                gap: isMobile ? "16px" : "32px",
              }}
            >
              <div>
                <div
                  style={{
                    fontSize: isMobile ? "16px" : "18px",
                    fontWeight: "600",
                    color: "white",
                  }}
                >
                  <p>{item.time.start}</p>
                  <p>{item.time.end}</p>
                </div>
              </div>

              <div>
                <h3
                  style={{
                    fontSize: isMobile ? "20px" : "24px",
                    fontWeight: "600",
                    color: "#fff",
                    margin: "0 0 8px 0",
                  }}
                >
                  {item.title}
                </h3>
                {item.description && (
                  <p
                    style={{
                      color: "rgba(255, 255, 255, 0.8)",
                      margin: 0,
                      fontSize: isMobile ? "14px" : "16px",
                    }}
                  >
                    {item.description}
                  </p>
                )}
              </div>

              {/* {item.speaker && (
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: isMobile ? "12px" : "16px",
                    flexDirection: isMobile ? "row" : "row",
                  }}
                >
                  <Image
                    src={
                      item.speaker.image ||
                      "/placeholder.svg?height=60&width=60"
                    }
                    alt={item.speaker.name}
                    width={isMobile ? 50 : 60}
                    height={isMobile ? 50 : 60}
                    style={{ borderRadius: "50%" }}
                  />
                  <div>
                    <div
                      style={{
                        fontSize: isMobile ? "16px" : "18px",
                        fontWeight: "bold",
                        color: "white",
                      }}
                    >
                      {item.speaker.name}
                    </div>
                    {item.speaker.role && (
                      <div
                        style={{
                          fontSize: isMobile ? "12px" : "14px",
                          color: "rgba(255, 255, 255, 0.8)",
                        }}
                      >
                        {item.speaker.role}
                      </div>
                    )}
                  </div>
                </div>
              )} */}
            </motion.div>
          ))}
        </div>
      </div>
    </main>
  );
}
