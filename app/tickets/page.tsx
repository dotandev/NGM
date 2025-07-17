"use client"

import { motion } from "framer-motion"
import { Check } from "lucide-react"

export default function TicketsPage() {
  const ticketTiers = [
    {
      name: "REGULAR",
      // price: "$65",
      price: "5k Naira",
      features: ["1 day event", "5 speaker", "interaction session", "lunch & coffee"],
      // bgColor: "white",
      bgColor: "rgb(15 25 144 / 1)",
      textColor: "white",
      buttonColor: "white",
    },
    {
      name: "PREMIUM",
      // price: "$95",
      price: "7.5k Naira",
      features: ["2 day event", "10 speaker", "interaction session", "lunch & coffee"],
      bgColor: "white",
      textColor: "rgb(15 25 144 / 1)",
      buttonColor: "rgb(15 25 144 / 1)",
    },
    {
      name: "VIP",
      // price: "$445",
      price: "9k Naira",
      features: ["3 day event", "20 speaker", "interaction session", "lunch & coffee"],
      bgColor: "rgb(15 25 144 / 1)",
      textColor: "white",
      buttonColor: "white",
    },
  ]

  return (
    <main style={{ backgroundColor: "#EAFFF3", minHeight: "100vh", padding: "80px 24px" }}>
      <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          style={{ textAlign: "center", marginBottom: "64px" }}
        >
          <h1
            style={{
              fontSize: "72px",
              fontWeight: "bold",
              color: "rgb(15 25 144 / 1)",
              marginBottom: "24px",
            }}
          >
            Get Your Tickets
          </h1>
          <p
            style={{
              fontSize: "18px",
              color: "rgb(15 25 144 / 1)",
              maxWidth: "600px",
              margin: "0 auto",
              lineHeight: "1.6",
            }}
          >Join these discussions for just 7500.
          </p>
        </motion.div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            gap: "32px",
          }}
        >
          {ticketTiers.map((tier, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              style={{
                backgroundColor: tier.bgColor,
                borderRadius: "16px",
                padding: "48px 32px",
                textAlign: "center",
                boxShadow: "0 10px 30px rgba(0, 0, 0, 0.1)",
                position: "relative",
              }}
            >
              <div
                style={{
                  fontSize: "24px",
                  fontWeight: "bold",
                  color: tier.textColor,
                  marginBottom: "8px",
                }}
              >
                {tier.name}
              </div>

              <div
                style={{
                  width: "100%",
                  height: "2px",
                  backgroundColor: tier.textColor,
                  marginBottom: "32px",
                }}
              />

              <div
                style={{
                  fontSize: "64px",
                  fontWeight: "bold",
                  color: tier.textColor,
                  marginBottom: "48px",
                }}
              >
                {tier.price}
              </div>

              <div style={{ marginBottom: "48px" }}>
                {tier.features.map((feature, featureIndex) => (
                  <div
                    key={featureIndex}
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "12px",
                      marginBottom: "16px",
                    }}
                  >
                    <div
                      style={{
                        width: "24px",
                        height: "24px",
                        borderRadius: "50%",
                        backgroundColor: tier.textColor,
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                      }}
                    >
                      <Check size={14} color={tier.bgColor} />
                    </div>
                    <span
                      style={{
                        fontSize: "16px",
                        color: tier.name === "VIP" ? "rgba(196, 248, 42, 0.9)" : "#666",
                      }}
                    >
                      {feature}
                    </span>
                  </div>
                ))}
              </div>

              <button
                style={{
                  backgroundColor: tier.buttonColor,
                  color: tier.name === "VIP" ? "rgb(34, 197, 94)" : "rgb(34, 197, 94)",
                  border: "none",
                  padding: "16px 32px",
                  borderRadius: "25px",
                  fontSize: "16px",
                  fontWeight: "600",
                  cursor: "pointer",
                  width: "100%",
                  transition: "transform 0.2s ease",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = "translateY(-2px)"
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = "translateY(0)"
                }}
              >
                Add to Cart
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </main>
  )
}
