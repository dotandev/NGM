"use client";

import { motion } from "framer-motion";
import { Check } from "lucide-react";
import Link from "next/link";

export default function TicketsPage() {
  const ticketTiers = [
    {
      name: "SINGLE",
      // price: "$65",
      price: "N7,500",
      features: [
        "Free medical checkup",
        "Expert-led sessions",
        "Networking opportunities",
        "Exclusive access to speakers",
      ],
      // bgColor: "white",
      bgColor: "rgb(15 25 144 / 1)",
      textColor: "white",
      buttonColor: "white",
    },
    {
      name: "GROUP OF 5",
      // price: "$95",
      price: "N36,000",
      features: [
        "Free medical checkup",
        "Expert-led sessions",
        "Networking opportunities",
        "Exclusive access to speakers",
      ],
      bgColor: "white",
      textColor: "rgb(15 25 144 / 1)",
      buttonColor: "rgb(15 25 144 / 1)",
    },
    {
      name: "GROUP OF 10",
      // price: "$445",
      price: "N74,000",
      features: [
        "Free medical checkup",
        "Expert-led sessions",
        "Networking opportunities",
        "Exclusive access to speakers",
      ],
      bgColor: "rgb(15 25 144 / 1)",
      textColor: "white",
      buttonColor: "white",
    },
  ];

  return (
    <main
      className="min-h-screen py-12 px-4 md:py-16 lg:py-20 md:px-6"
      style={{ backgroundColor: "#EAFFF3" }}
    >
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12 md:mb-16"
        >
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-[rgb(15,25,144)] mb-4 md:mb-6 px-2">
            Get Your Tickets
          </h1>
          <p className="text-base md:text-lg text-[rgb(15,25,144)] max-w-2xl mx-auto leading-relaxed px-4">
            Join these discussions for just 7500.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {ticketTiers.map((tier, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="rounded-2xl p-6 md:p-8 lg:p-12 text-center shadow-2xl relative"
              style={{ backgroundColor: tier.bgColor }}
            >
              <div
                className="text-lg md:text-xl lg:text-2xl font-bold mb-2"
                style={{ color: tier.textColor }}
              >
                {tier.name}
              </div>

              <div
                className="w-full h-0.5 mb-6 md:mb-8"
                style={{ backgroundColor: tier.textColor }}
              />

              <div
                className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-8 md:mb-12"
                style={{ color: tier.textColor }}
              >
                {tier.price}
              </div>

              <div className="mb-8 md:mb-12">
                {tier.features.map((feature, featureIndex) => (
                  <div
                    key={featureIndex}
                    className="flex items-center gap-3 mb-3 md:mb-4"
                  >
                    <div
                      className="w-5 h-5 md:w-6 md:h-6 rounded-full flex items-center justify-center flex-shrink-0"
                      style={{ backgroundColor: tier.textColor }}
                    >
                      <Check
                        size={12}
                        className="md:w-4 md:h-4"
                        color={tier.bgColor}
                      />
                    </div>
                    <span
                      className="text-sm md:text-base text-left"
                      style={{
                        color:
                          tier.name === "SINGLE" || tier.name === "GROUP OF 10"
                            ? "#EAFFF3"
                            : "rgb(15 25 144 / 1)",
                      }}
                    >
                      {feature}
                    </span>
                  </div>
                ))}
              </div>

              <Link
                href="https://bitooqoh.com/explore/ngm-conf-4.0"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full block py-3 md:py-4 px-6 md:px-8 rounded-full text-sm md:text-base font-semibold transition-all duration-200 hover:-translate-y-0.5 hover:shadow-lg active:translate-y-0"
                style={{
                  backgroundColor: tier.buttonColor,
                  color:
                    tier.name === "SINGLE" || tier.name === "GROUP OF 10"
                      ? "rgb(15 25 144 / 1)"
                      : "#FFF",
                }}
              >
                Buy Tickets
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </main>
  );
}
