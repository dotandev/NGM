"use client";

import { motion } from "framer-motion";
import { Plus, Minus } from "lucide-react";
import { useState, useEffect } from "react";

export default function FAQPage() {
  const [openItems, setOpenItems] = useState<number[]>([]);
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

  const toggleItem = (index: number) => {
    setOpenItems((prev) =>
      prev.includes(index) ? prev.filter((i) => i !== index) : [...prev, index]
    );
  };

  const faqItems = [
    {
      question: "Can I change my ticket?",
      answer:
        "Yes, you can change your ticket at any time before the event. Please contact the conference team for assistance with ticcket changes.",
    },
    {
      question: "Is there any refund option?",
      answer:
        "No, we do not offer refunds for purchased tickets. This policy helps us maintain the event's financial stability and ensures we can commit to our vendors, speakers, and venue arrangements. However, you can transfer your ticket to someone else or consider attending our next event if you're unable to make it to this one. We appreciate your understanding in this matter.",
    },
    {
      question: "What are the payment options?",
      answer:
        "Cash, Bank Transfer, E-wallets (e.g., Flutterwave, Paystack, etc.)",
    },
    {
      question: "Any possibilities of schedule change?",
      answer:
        "Bi IdhnilLahh, it won't happen. All registered attendees will be notified immediately of any schedule updates via email.",
    },
  ];

  return (
    <main
      style={{
        backgroundColor: "#EAFFF3",
        minHeight: "100vh",
        padding: isMobile ? "80px 16px 40px" : "120px 24px 80px",
      }}
    >
      <div style={{ maxWidth: "800px", margin: "0 auto" }}>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          style={{
            textAlign: "center",
            marginBottom: isMobile ? "40px" : "64px",
          }}
        >
          <h1
            style={{
              fontSize: isMobile ? "40px" : "72px",
              fontWeight: "bold",
              color: "rgb(15 25 144 / 1)",
              marginBottom: "16px",
              lineHeight: "1.1",
            }}
          >
            Frequently Asked Question
          </h1>
        </motion.div>

        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: isMobile ? "12px" : "16px",
          }}
        >
          {faqItems.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              style={{
                backgroundColor: "white",
                borderRadius: "12px",
                overflow: "hidden",
                boxShadow: "0 4px 20px rgba(0, 0, 0, 0.1)",
              }}
            >
              <button
                onClick={() => toggleItem(index)}
                style={{
                  width: "100%",
                  padding: isMobile ? "20px" : "32px",
                  backgroundColor: "transparent",
                  border: "none",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  cursor: "pointer",
                  textAlign: "left",
                }}
              >
                <h3
                  style={{
                    fontSize: isMobile ? "18px" : "24px",
                    fontWeight: "bold",
                    color: "rgb(15 25 144 / 1)",
                    margin: 0,
                    paddingRight: isMobile ? "12px" : "16px",
                  }}
                >
                  {item.question}
                </h3>

                <div
                  style={{
                    width: isMobile ? "28px" : "32px",
                    height: isMobile ? "28px" : "32px",
                    borderRadius: "50%",
                    backgroundColor: openItems.includes(index)
                      ? "rgb(15 25 144 / 1)"
                      : "#f5f5f5",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    transition: "all 0.3s ease",
                    flexShrink: 0,
                  }}
                >
                  {openItems.includes(index) ? (
                    <Minus size={isMobile ? 16 : 18} color="white" />
                  ) : (
                    <Plus
                      size={isMobile ? 16 : 18}
                      color="rgb(15 25 144 / 1)"
                    />
                  )}
                </div>
              </button>

              <motion.div
                initial={false}
                animate={{
                  height: openItems.includes(index) ? "auto" : 0,
                  opacity: openItems.includes(index) ? 1 : 0,
                }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
                style={{ overflow: "hidden" }}
              >
                <div
                  style={{ padding: isMobile ? "0 20px 20px" : "0 32px 32px" }}
                >
                  <p
                    style={{
                      fontSize: isMobile ? "14px" : "16px",
                      color: "#666",
                      lineHeight: "1.6",
                      margin: 0,
                    }}
                  >
                    {item.answer}
                  </p>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </main>
  );
}
