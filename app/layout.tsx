"use client"

import type React from "react"

import { useState } from "react"
import Header from "@/components/header"
import LoadingScreen from "@/components/loading-screen"
import PageTransition from "@/components/page-transition"
import "./globals.css"
import FAQPage from "./faq/page"
import Footer from "@/components/footer"

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const [isLoading, setIsLoading] = useState(true)

  const handleLoadingComplete = () => {
    setIsLoading(false)
  }

  return (
    <html lang="en">
      <body style={{ margin: 0, fontFamily: "system-ui, -apple-system, sans-serif" }}>
        {isLoading && <LoadingScreen onComplete={handleLoadingComplete} />}
        {!isLoading && (
          <>
            <Header />
            <div style={{ paddingTop: "80px", backgroundColor: "rgb(15 25 144 / 1)" }}>
              <PageTransition>{children}</PageTransition>
            </div>
            <FAQPage />
            <Footer />
          </>
        )}
      </body>
    </html>
  )
}
