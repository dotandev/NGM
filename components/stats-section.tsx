"use client";

import { motion } from "framer-motion";
import { Mic, Clock, Users, Calendar } from "lucide-react";
import Link from "next/link";

export default function StatsSection() {
  const stats = [
    { icon: Mic, number: "20", label: "SPEAKER" },
    { icon: Clock, number: "72", label: "Hours" },
    { icon: Users, number: "10", label: "Workshop" },
    { icon: Calendar, number: "03", label: "Days" },
  ];

  return (
    <section style={{ backgroundColor: "#EAFFF3", padding: "80px 24px" }}>
      <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          style={{
            display: "grid",
            gridTemplateColumns: "2fr 1fr",
            gap: "32px",
            backgroundColor: "white",
            borderRadius: "16px",
            overflow: "hidden",
            boxShadow: "0 10px 30px rgba(0, 0, 0, 0.1)",
          }}
        >
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: "1px",
            }}
          >
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                style={{
                  padding: "48px 32px",
                  textAlign: "center",
                  backgroundColor: index % 2 === 0 ? "#f8f9fa" : "white",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  gap: "16px",
                }}
              >
                <div
                  style={{
                    width: "64px",
                    height: "64px",
                    borderRadius: "50%",
                    border: "2px solid #0DA04C",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <stat.icon size={24} color="#0DA04C" />
                </div>
                <div>
                  <div
                    style={{
                      fontSize: "36px",
                      fontWeight: "bold",
                      color: "#0DA04C",
                      marginBottom: "4px",
                    }}
                  >
                    {stat.number}
                  </div>
                  <div
                    style={{
                      fontSize: "16px",
                      color: "#666",
                      fontWeight: "600",
                    }}
                  >
                    {stat.label}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <div
            style={{
              backgroundColor: "rgb(15 25 144 / 1)",
              padding: "48px 32px",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              gap: "24px",
            }}
          >
            <h2
              style={{
                fontSize: "32px",
                fontWeight: "bold",
                color: "white",
                lineHeight: "1.2",
                margin: 0,
              }}
            >
              Welcome to the greatest Digital conference 2023
            </h2>

            <div
              className="py-6 px-[21.45px] bg-[#FFFFFF26] border-[2.34px] border-[#FFFFFF33] rounded-lg"
              // style={{
              //   backgroundColor: "#0DA04C",
              //   padding: "24px",
              //   borderRadius: "12px",
              // }}
            >
              <p
                style={{
                  fontSize: "16px",
                  color: "#fff",
                  lineHeight: "1.6",
                  margin: "0 0 20px 0",
                }}
              >
                Join these discussions for just 7500.
              </p>

              <Link
                href="https://bitooqoh.com/explore/ngm-conf-4.0"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  backgroundColor: "white",
                  color: "#0DA04C",
                  padding: "12px 24px",
                  borderRadius: "25px",
                  textDecoration: "none",
                  fontSize: "16px",
                  fontWeight: "600",
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "8px",
                }}
              >
                Learn More →
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
