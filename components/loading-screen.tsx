"use client"

import { motion } from "framer-motion"
import { useEffect, useState } from "react"

interface LoadingScreenProps {
  onComplete: () => void
}

export default function LoadingScreen({ onComplete }: LoadingScreenProps) {
  const [isVisible, setIsVisible] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(false)
      setTimeout(onComplete, 800)
    }, 2000)

    return () => clearTimeout(timer)
  }, [onComplete])

  return (
    <motion.div
      initial={{ opacity: 1 }}
      animate={{ opacity: isVisible ? 1 : 0 }}
      transition={{ duration: 0.8 }}
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor: "rgb(15 25 144 / 1)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        zIndex: 9999,
      }}
    >
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.6 }}
        style={{
          display: "flex",
          alignItems: "center",
          gap: "12px",
        }}
      >
        <div
          style={{
            width: "48px",
            height: "48px",
            backgroundColor: "#C4F82A",
            borderRadius: "50%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
            <path d="M12 2L2 7L12 12L22 7L12 2Z" fill="rgb(34, 197, 94)" />
            <path d="M2 17L12 22L22 17" stroke="rgb(34, 197, 94)" strokeWidth="2" />
            <path d="M2 12L12 17L22 12" stroke="rgb(34, 197, 94)" strokeWidth="2" />
          </svg>
        </div>
        <h1
          style={{
            fontSize: "32px",
            fontWeight: "bold",
            color: "white",
            margin: 0,
            fontFamily: "system-ui, -apple-system, sans-serif",
          }}
        >
          NGM Conference
        </h1>
      </motion.div>
    </motion.div>
  )
}
