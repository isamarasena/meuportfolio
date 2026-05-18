"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";

const navItems = [
  { label: "Trabalhos", href: "#trabalhos" },
  { label: "Experiência", href: "#experiencia" },
  { label: "Sobre", href: "#sobre" },
  { label: "Contato", href: "#contato" },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  return (
    <>
      <motion.header
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? "bg-cream/90 backdrop-blur-xl shadow-md border-b border-caramel/10"
            : "bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <nav className="flex items-center justify-between h-20">
            {/* Logo */}
            <Link href="/" className="group relative flex items-center h-16">
              <img
                src="/images/logo.png"
                alt="Isa Sena"
                className="h-14 w-auto object-contain transition-transform duration-300 group-hover:scale-105"
                onError={(e) => {
                  e.currentTarget.style.display = "none";
                  const nextElem = e.currentTarget.nextElementSibling;
                  if (nextElem) nextElem.classList.remove("hidden");
                }}
              />
              <span className="hidden font-serif text-2xl font-bold text-brown-dark tracking-wide group-hover:text-caramel-dark transition-colors duration-300">
                Isa Sena
              </span>
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-caramel group-hover:w-full transition-all duration-300" />
            </Link>

            {/* Desktop Nav */}
            <div className="hidden md:flex items-center gap-8">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="relative text-sm font-medium text-brown-medium hover:text-brown-dark transition-colors duration-300 group"
                >
                  {item.label}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-caramel group-hover:w-full transition-all duration-300" />
                </Link>
              ))}
              <a
                href="/cv-isa-sena.pdf"
                download
                className="px-6 py-2.5 bg-brown-dark text-white text-sm font-medium rounded-full hover:bg-brown-medium transition-all duration-300 hover:shadow-lg hover:shadow-brown-dark/20 hover:-translate-y-0.5"
              >
                Baixar CV
              </a>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="md:hidden relative w-10 h-10 flex flex-col items-center justify-center gap-1.5"
              aria-label="Menu"
            >
              <motion.span
                animate={mobileOpen ? { rotate: 45, y: 6 } : { rotate: 0, y: 0 }}
                className="w-6 h-0.5 bg-brown-dark block transition-colors"
              />
              <motion.span
                animate={mobileOpen ? { opacity: 0, x: -10 } : { opacity: 1, x: 0 }}
                className="w-6 h-0.5 bg-brown-dark block"
              />
              <motion.span
                animate={mobileOpen ? { rotate: -45, y: -6 } : { rotate: 0, y: 0 }}
                className="w-6 h-0.5 bg-brown-dark block transition-colors"
              />
            </button>
          </nav>
        </div>
      </motion.header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-40 bg-cream/98 backdrop-blur-xl md:hidden"
          >
            <motion.nav
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
              transition={{ duration: 0.4, delay: 0.1 }}
              className="flex flex-col items-center justify-center h-full gap-8"
            >
              {navItems.map((item, i) => (
                <motion.div
                  key={item.href}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.15 + i * 0.08 }}
                >
                  <Link
                    href={item.href}
                    onClick={() => setMobileOpen(false)}
                    className="text-3xl font-serif text-brown-dark hover:text-caramel transition-colors duration-300"
                  >
                    {item.label}
                  </Link>
                </motion.div>
              ))}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
              >
                <a
                  href="/cv-isa-sena.pdf"
                  download
                  className="px-8 py-3 bg-brown-dark text-white text-lg font-medium rounded-full hover:bg-brown-medium transition-all duration-300"
                >
                  Baixar CV
                </a>
              </motion.div>
            </motion.nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
