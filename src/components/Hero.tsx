"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden pt-20">
      {/* Subtle background decoration */}
      <div className="absolute top-20 right-0 w-96 h-96 bg-caramel/5 rounded-full blur-3xl" />
      <div className="absolute bottom-20 left-0 w-72 h-72 bg-terracotta/5 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto px-6 lg:px-8 w-full">
        <div className="grid grid-cols-2 gap-4 sm:gap-8 lg:gap-16 items-center">
          {/* Left column - Text */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="order-1"
          >
            {/* Tag */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.5 }}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-caramel/10 border border-caramel/20 rounded-full mb-4 sm:mb-6"
            >
              <span className="w-1.5 h-1.5 bg-caramel rounded-full animate-pulse" />
              <span className="text-[10px] sm:text-xs font-semibold tracking-[0.15em] text-caramel-dark uppercase">
                Profissional Criativa
              </span>
            </motion.div>

            {/* Name */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="font-serif text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-brown-dark leading-tight mb-4 sm:mb-6"
            >
              Isa{" "}
              <span className="relative">
                Sena
                <svg
                  className="absolute -bottom-2 left-0 w-full"
                  viewBox="0 0 200 12"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <motion.path
                    d="M2 8C30 3 70 2 100 5C130 8 170 6 198 3"
                    stroke="#C4956A"
                    strokeWidth="3"
                    strokeLinecap="round"
                    initial={{ pathLength: 0 }}
                    animate={{ pathLength: 1 }}
                    transition={{ delay: 1, duration: 1, ease: "easeInOut" }}
                  />
                </svg>
              </span>
            </motion.h1>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.6 }}
              className="text-xs sm:text-base md:text-xl text-brown-light leading-relaxed mb-6 sm:mb-8 max-w-lg"
            >
              Fotógrafa, Criadora de Conteúdo e Designer. Focada em{" "}
              <span className="text-caramel-dark font-medium">
                posicionamento de marca
              </span>{" "}
              e{" "}
              <span className="text-caramel-dark font-medium">
                criação estratégica
              </span>
              .
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.6 }}
              className="flex flex-wrap gap-2 sm:gap-4"
            >
              <a
                href="#trabalhos"
                className="px-4 sm:px-8 py-2.5 sm:py-3.5 bg-brown-dark text-white text-xs sm:text-base font-medium rounded-full hover:bg-brown-medium transition-all duration-300 hover:shadow-xl hover:shadow-brown-dark/20 hover:-translate-y-1"
              >
                Ver Trabalhos
              </a>
              <a
                href="#contato"
                className="px-4 sm:px-8 py-2.5 sm:py-3.5 border-2 border-brown-dark text-brown-dark text-xs sm:text-base font-medium rounded-full hover:bg-brown-dark hover:text-white transition-all duration-300 hover:-translate-y-1"
              >
                Fale Comigo
              </a>
            </motion.div>
          </motion.div>

          {/* Right column - Image */}
          <motion.div
            initial={{ opacity: 0, x: 50, scale: 0.95 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
            className="order-2 relative"
          >
            <div className="relative max-w-[280px] sm:max-w-[340px] md:max-w-md lg:max-w-none mx-auto">
              {/* Decorative frame */}
              <div className="absolute -top-4 -right-4 w-full h-full border-2 border-caramel/30 rounded-3xl" />
              <div className="absolute -bottom-4 -left-4 w-full h-full bg-caramel/10 rounded-3xl" />

              {/* Main image */}
              <div className="relative rounded-3xl overflow-hidden shadow-2xl shadow-brown-dark/15 aspect-[3/4]">
                <Image
                  src="/images/isa.jpeg"
                  alt="Isa Sena - Profissional Criativa"
                  fill
                  className="object-cover"
                  priority
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
                {/* Subtle gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-brown-dark/10 via-transparent to-transparent" />
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 hidden lg:flex flex-col items-center gap-2"
      >
        <span className="text-xs text-brown-light/60 tracking-widest uppercase">
          Scroll
        </span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
          className="w-5 h-8 border-2 border-brown-light/30 rounded-full flex justify-center pt-1.5"
        >
          <div className="w-1 h-2 bg-caramel rounded-full" />
        </motion.div>
      </motion.div>
    </section>
  );
}
