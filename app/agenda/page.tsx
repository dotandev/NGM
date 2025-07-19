"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function AgendaPage() {
  const scheduleData = [
    {
      time: "9:00 AM",
      title: "Doors Open",
      description: "Join these discussions for just 7500.",
      speaker: null,
    },
    {
      time: "9:30 AM",
      title: "Intro & welcome",
      description: "Join these discussions for just 7500.",
      speaker: null,
    },
    {
      time: "10:00 AM",
      title: "Session 01 Title",
      description: "Join these discussions for just 7500.",
      speaker: {
        name: "Ameer",
        role: "Product Designer",
        image: "/placeholder.svg?height=60&width=60",
      },
    },
    {
      time: "11:00 AM",
      title: "Session 02 Title",
      description: "Join these discussions for just 7500.",
      speaker: {
        name: "Ameerah",
        role: "Developer",
        image: "/placeholder.svg?height=60&width=60",
      },
    },
  ];

  return (
    <main
      style={{
        backgroundColor: "#fff",
        minHeight: "100vh",
        padding: "80px 24px",
      }}
    >
      <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          style={{ marginBottom: "64px" }}
        >
          <h1
            style={{
              fontSize: "72px",
              fontWeight: "bold",
              color: "#0DA04C",
              marginBottom: "32px",
            }}
          >
            Schedule
          </h1>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(3, 1fr)",
              gap: "2px",
              marginBottom: "48px",
            }}
          >
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
                DAY 01
              </h3>
              <p style={{ color: "#666", margin: "8px 0 0 0" }}>
                12 October - Sunday
              </p>
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

        <div style={{ display: "flex", flexDirection: "column", gap: "2px" }}>
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
                padding: "32px",
                display: "grid",
                gridTemplateColumns: "150px 1fr auto",
                alignItems: "center",
                gap: "32px",
              }}
            >
              <div>
                <div
                  style={{
                    fontSize: "24px",
                    fontWeight: "bold",
                    color: "white",
                  }}
                >
                  {item.time}
                </div>
              </div>

              <div>
                <h3
                  style={{
                    fontSize: "24px",
                    fontWeight: "bold",
                    color: "#fff",
                    margin: "0 0 8px 0",
                  }}
                >
                  {item.title}
                </h3>
                <p
                  style={{
                    color: "rgba(255, 255, 255, 0.8)",
                    margin: 0,
                    fontSize: "16px",
                  }}
                >
                  {item.description}
                </p>
              </div>

              {item.speaker && (
                <div
                  style={{ display: "flex", alignItems: "center", gap: "16px" }}
                >
                  <Image
                    src={item.speaker.image || "/placeholder.svg"}
                    alt={item.speaker.name}
                    width={60}
                    height={60}
                    style={{ borderRadius: "50%" }}
                  />
                  <div>
                    <div
                      style={{
                        fontSize: "18px",
                        fontWeight: "bold",
                        color: "white",
                      }}
                    >
                      {item.speaker.name}
                    </div>
                    <div
                      style={{
                        fontSize: "14px",
                        color: "rgba(255, 255, 255, 0.8)",
                      }}
                    >
                      {item.speaker.role}
                    </div>
                  </div>
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </main>
  );
}
