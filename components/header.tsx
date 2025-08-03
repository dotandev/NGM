"use client";

import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import Image from "next/image";
import NgmConfLogo from "@/public/assets/ngm-conf-logo.webp";

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };
  return (
    <>
      <motion.header
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="fixed top-0 left-0 right-0 z-50 bg-[rgb(15_25_144_/_1)] py-3 md:py-4"
      >
        <nav className="max-w-7xl mx-auto px-4 flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3">
            <Image
              src={NgmConfLogo}
              alt="NGM Conf Logo"
              width={100}
              height={72}
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            <Link
              href="/"
              className="text-white hover:text-gray-200 transition-colors text-base"
            >
              Home
            </Link>
            <Link
              href="/agenda"
              className="text-white hover:text-gray-200 transition-colors text-base"
            >
              Agenda
            </Link>
            <Link
              href="/speakers"
              className="text-white hover:text-gray-200 transition-colors text-base"
            >
              Speakers
            </Link>
          </div>

          {/* Desktop Register Button */}
          <div className="hidden md:flex items-center">
            <Link
              href="https://bitooqoh.com/explore/ngm-conf-4.0"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white text-[rgb(15_25_144_/_1)] px-6 py-3 rounded-full text-base font-semibold hover:bg-gray-100 transition-colors"
            >
              Register Now
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={toggleMobileMenu}
            className="md:hidden text-white p-2"
            aria-label="Toggle mobile menu"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </nav>

        {/* Mobile Menu Overlay */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="md:hidden bg-[rgb(15_25_144_/_1)] border-t border-[rgb(15_25_144_/_1)]"
            >
              <div className="container mx-auto px-4 py-4 space-y-4">
                <Link
                  href="/"
                  onClick={closeMobileMenu}
                  className="block text-white hover:text-gray-200 transition-colors text-lg py-2"
                >
                  Home
                </Link>
                <Link
                  href="/agenda"
                  onClick={closeMobileMenu}
                  className="block text-white hover:text-gray-200 transition-colors text-lg py-2"
                >
                  Agenda
                </Link>
                <Link
                  href="/speakers"
                  onClick={closeMobileMenu}
                  className="block text-white hover:text-gray-200 transition-colors text-lg py-2"
                >
                  Speakers
                </Link>
                <div className="pt-4">
                  <Link
                    href="https://bitooqoh.com/explore/ngm-conf-4.0"
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={closeMobileMenu}
                    className="block w-full bg-white text-[rgb(15_25_144_/_1)] px-6 py-3 rounded-full text-center text-base font-semibold hover:bg-gray-100 transition-colors"
                  >
                    Register Now
                  </Link>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.header>
    </>
  );
}
