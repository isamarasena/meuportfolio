"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

export default function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="sobre" ref={ref} className="py-24 lg:py-32 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-caramel/5 rounded-full blur-3xl" />

      <div className="max-w-4xl mx-auto px-6 lg:px-8 relative">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          {/* Section label */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-2 bg-caramel/10 border border-caramel/20 rounded-full mb-8"
          >
            <span className="text-xs font-semibold tracking-[0.2em] text-caramel-dark uppercase">
              Sobre mim
            </span>
          </motion.div>

          {/* Decorative quote marks */}
          <div className="relative">
            <span className="absolute -top-6 -left-4 md:-left-8 text-6xl md:text-8xl font-serif text-caramel/15 leading-none select-none">
              &ldquo;
            </span>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="text-lg md:text-xl lg:text-2xl text-brown-medium leading-relaxed font-light"
            >
              Profissional criativa com experiência em{" "}
              <span className="font-medium text-brown-dark">fotografia</span>,{" "}
              <span className="font-medium text-brown-dark">
                produção de conteúdo digital
              </span>
              ,{" "}
              <span className="font-medium text-brown-dark">design</span> e{" "}
              <span className="font-medium text-brown-dark">marketing</span>.
              Dedicada a transformar visões em realidade visual, com foco em
              posicionamento de marca e fortalecimento da presença digital
              através de{" "}
              <span className="text-caramel-dark font-medium italic">
                estética refinada
              </span>{" "}
              e{" "}
              <span className="text-caramel-dark font-medium italic">
                comunicação assertiva
              </span>
              .
            </motion.p>
            <span className="absolute -bottom-8 -right-4 md:-right-8 text-6xl md:text-8xl font-serif text-caramel/15 leading-none select-none">
              &rdquo;
            </span>
          </div>

          {/* Decorative line */}
          <motion.div
            initial={{ scaleX: 0 }}
            animate={isInView ? { scaleX: 1 } : {}}
            transition={{ delay: 0.8, duration: 0.6 }}
            className="w-20 h-0.5 bg-caramel mx-auto mt-12"
          />
        </motion.div>
      </div>
    </section>
  );
}
