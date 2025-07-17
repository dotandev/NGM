"use client"

import { motion, AnimatePresence } from "framer-motion"
import { usePathname } from "next/navigation"
import type { ReactNode } from "react"

interface PageTransitionProps {
  children: ReactNode
}

export default function PageTransition({ children }: PageTransitionProps) {
  const pathname = usePathname()

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={pathname}
        initial={{
          x: "100%",
          opacity: 0,
        }}
        animate={{
          x: 0,
          opacity: 1,
        }}
        exit={{
          x: "-100%",
          opacity: 0,
        }}
        transition={{
          type: "tween",
          ease: [0.22, 1, 0.36, 1],
          duration: 0.8,
        }}
        style={{
          position: "relative",
          width: "100%",
          minHeight: "100vh",
        }}
      >
        {children}
      </motion.div>
    </AnimatePresence>
  )
}
