"use client";

import { motion } from "framer-motion";
import { Mic, Clock, Users, Calendar } from "lucide-react";
import Link from "next/link";

export default function StatsSection() {
  const stats = [
    { icon: Mic, number: "15+", label: "Speakers" },
    { icon: Clock, number: "7AM - 6PM", label: "" },
    { icon: Users, number: "5", label: "Break-out Sessions" },
    { icon: Calendar, number: "October 4", label: "2025" },
  ];

  return (
    <section
      className="py-12 px-6 md:py-20 md:px-6"
      style={{ backgroundColor: "#EAFFF3" }}
    >
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8 bg-white rounded-2xl overflow-hidden shadow-2xl"
        >
          <div className="lg:col-span-2 grid grid-cols-2 gap-0.5">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className={`p-6 md:p-8 lg:p-12 text-center flex flex-col items-center gap-4 ${
                  index % 2 === 0 ? "bg-gray-50" : "bg-white"
                }`}
              >
                <div className="w-12 h-12 md:w-16 md:h-16 rounded-full border-2 border-[#0DA04C] flex items-center justify-center">
                  <stat.icon
                    size={20}
                    className="md:w-6 md:h-6"
                    color="#0DA04C"
                  />
                </div>
                <div>
                  <div className="text-2xl md:text-3xl lg:text-4xl font-bold text-[#0DA04C] mb-1">
                    {stat.number}
                  </div>
                  <div className="text-sm md:text-base text-gray-600 font-semibold">
                    {stat.label}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="bg-[rgb(15,25,144)] p-6 md:p-8 lg:p-12 flex flex-col justify-center gap-6">
            <h2 className="text-xl md:text-2xl lg:text-3xl font-bold text-white leading-tight m-0">
              Welcome to the greatest Digital conference 2025
            </h2>

            <div className="py-4 md:py-6 px-4 md:px-[21.45px] bg-[#FFFFFF26] border-2 md:border-[2.34px] border-[#FFFFFF33] rounded-lg">
              <p className="text-sm md:text-base text-white leading-relaxed mb-4 md:mb-5">
                Join these discussions for just 7500.
              </p>

              <Link
                href="https://bitooqoh.com/explore/ngm-conf-4.0"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white text-[#0DA04C] py-2 md:py-3 px-4 md:px-6 rounded-full no-underline text-sm md:text-base font-semibold inline-flex items-center gap-2 hover:bg-gray-100 transition-colors"
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
