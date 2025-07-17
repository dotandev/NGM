"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"

export default function CountdownTimer() {
  const [timeLeft, setTimeLeft] = useState({
    days: 104,
    hours: 3,
    minutes: 5,
  })

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev.minutes > 0) {
          return { ...prev, minutes: prev.minutes - 1 }
        } else if (prev.hours > 0) {
          return { ...prev, hours: prev.hours - 1, minutes: 59 }
        } else if (prev.days > 0) {
          return { ...prev, days: prev.days - 1, hours: 23, minutes: 59 }
        }
        return prev
      })
    }, 60000)

    return () => clearInterval(timer)
  }, [])

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.6 }}
      style={{
        display: "flex",
        alignItems: "center",
        gap: "24px",
        marginTop: "48px",
      }}
    >
      <div style={{ textAlign: "center" }}>
        <div
          style={{
            fontSize: "64px",
            fontWeight: "bold",
            color: "white",
            lineHeight: "1",
            fontFamily: "system-ui, -apple-system, sans-serif",
          }}
        >
          {String(timeLeft.days).padStart(2, "0")}
        </div>
        <div style={{ fontSize: "16px", color: "rgba(255, 255, 255, 0.8)", marginTop: "8px" }}>Days</div>
      </div>

      <div style={{ fontSize: "48px", color: "white", fontWeight: "bold" }}>:</div>

      <div style={{ textAlign: "center" }}>
        <div
          style={{
            fontSize: "64px",
            fontWeight: "bold",
            color: "white",
            lineHeight: "1",
            fontFamily: "system-ui, -apple-system, sans-serif",
          }}
        >
          {String(timeLeft.hours).padStart(2, "0")}
        </div>
        <div style={{ fontSize: "16px", color: "rgba(255, 255, 255, 0.8)", marginTop: "8px" }}>Hours</div>
      </div>

      <div style={{ fontSize: "48px", color: "white", fontWeight: "bold" }}>:</div>

      <div style={{ textAlign: "center" }}>
        <div
          style={{
            fontSize: "64px",
            fontWeight: "bold",
            color: "white",
            lineHeight: "1",
            fontFamily: "system-ui, -apple-system, sans-serif",
          }}
        >
          {String(timeLeft.minutes).padStart(2, "0")}
        </div>
        <div style={{ fontSize: "16px", color: "rgba(255, 255, 255, 0.8)", marginTop: "8px" }}>Minutes</div>
      </div>
    </motion.div>
  )
}
