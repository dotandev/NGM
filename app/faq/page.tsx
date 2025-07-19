"use client";

import { motion } from "framer-motion";
import { Plus, Minus } from "lucide-react";
import { useState } from "react";

export default function FAQPage() {
  const [openItems, setOpenItems] = useState<number[]>([]);

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
      answer: "Unfortunately, no refund. Do Sadaqah.",
    },
    {
      question: "What are the payment option?",
      answer: "Cash, Transfer, E gbewa! But use our registration ink to pay",
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
        padding: "120px 24px 80px",
      }}
    >
      <div style={{ maxWidth: "800px", margin: "0 auto" }}>
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
              marginBottom: "16px",
              lineHeight: "1.1",
            }}
          >
            Frequently Asked Question
          </h1>
        </motion.div>

        <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
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
                  padding: "32px",
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
                    fontSize: "24px",
                    fontWeight: "bold",
                    color: "rgb(15 25 144 / 1)",
                    margin: 0,
                  }}
                >
                  {item.question}
                </h3>

                <div
                  style={{
                    width: "32px",
                    height: "32px",
                    borderRadius: "50%",
                    backgroundColor: openItems.includes(index)
                      ? "rgb(15 25 144 / 1)"
                      : "#f5f5f5",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    transition: "all 0.3s ease",
                  }}
                >
                  {openItems.includes(index) ? (
                    <Minus size={18} color="white" />
                  ) : (
                    <Plus size={18} color="rgb(15 25 144 / 1)" />
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
                <div style={{ padding: "0 32px 32px" }}>
                  <p
                    style={{
                      fontSize: "16px",
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
