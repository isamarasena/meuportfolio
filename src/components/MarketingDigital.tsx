"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

export default function MarketingDigital() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const services = [
    {
      icon: "📊",
      title: "Estratégia Digital",
      description: "Planejamento estratégico para posicionamento de marca no ambiente digital",
    },
    {
      icon: "📱",
      title: "Gestão de Redes",
      description: "Administração e crescimento orgânico de perfis em redes sociais",
    },
    {
      icon: "🎯",
      title: "Campanhas Ads",
      description: "Criação e gestão de campanhas publicitárias em mídias pagas",
    },
    {
      icon: "📈",
      title: "Análise & Métricas",
      description: "Acompanhamento de resultados e otimização contínua de performance",
    },
  ];

  return (
    <section ref={ref} className="py-24 lg:py-32 bg-cream-light relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-caramel/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-1/4 w-72 h-72 bg-terracotta/5 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-caramel/10 border border-caramel/20 rounded-full mb-6">
            <span className="text-xs font-semibold tracking-[0.2em] text-caramel-dark uppercase">
              Serviços
            </span>
          </div>
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-brown-dark mb-4">
            Marketing Digital
          </h2>
          <p className="text-brown-light text-lg max-w-2xl mx-auto leading-relaxed">
            Estratégias personalizadas e soluções completas de marketing digital
            desenvolvidas para impulsionar sua marca e alcançar resultados expressivos.
            Um espaço em constante evolução para novas soluções e projetos de expansão futura.
          </p>
          
          <div className="mt-12 w-20 h-0.5 bg-caramel mx-auto opacity-40" />
        </motion.div>
      </div>
    </section>
  );
}
