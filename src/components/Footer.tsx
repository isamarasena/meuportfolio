"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

export default function Footer() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <footer ref={ref} className="bg-brown-dark border-t border-white/10">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="flex flex-col md:flex-row items-center justify-between gap-4"
        >
          {/* Copyright */}
          <p className="text-white/50 text-sm">
            © {new Date().getFullYear()} Isa Sena. Todos os direitos reservados.
          </p>

          {/* Links */}
          <div className="flex items-center gap-6">
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white/50 hover:text-caramel-light text-sm transition-colors duration-300"
            >
              Instagram
            </a>
            <span className="text-white/20">·</span>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white/50 hover:text-caramel-light text-sm transition-colors duration-300"
            >
              LinkedIn
            </a>
            <span className="text-white/20">·</span>
            <a
              href="mailto:isamarisena2020@gmail.com"
              className="text-white/50 hover:text-caramel-light text-sm transition-colors duration-300"
            >
              Email
            </a>
          </div>
        </motion.div>
      </div>
    </footer>
  );
}
