"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";

export default function Contact() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [sending, setSending] = useState(false);
  const [sent, setSent] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSending(true);
    // Simulated form submission
    await new Promise((resolve) => setTimeout(resolve, 1500));
    setSending(false);
    setSent(true);
    setFormData({ name: "", email: "", message: "" });
    setTimeout(() => setSent(false), 4000);
  };

  return (
    <section
      id="contato"
      ref={ref}
      className="relative py-24 lg:py-32 bg-brown-dark text-white overflow-hidden"
    >
      {/* Background decorations */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-caramel/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-72 h-72 bg-terracotta/8 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-20">
          {/* Left - Info */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7 }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 border border-white/15 rounded-full mb-8">
              <span className="text-xs font-semibold tracking-[0.2em] text-caramel-light uppercase">
                Contato
              </span>
            </div>

            <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-8">
              Vamos criar algo{" "}
              <span className="text-caramel-light italic">extraordinário</span>{" "}
              juntos.
            </h2>

            <div className="space-y-6 mb-8">
              {/* Email */}
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center p-3 overflow-hidden">
                  <img src="/images/email.png" alt="Email" className="w-6 h-6 object-contain" />
                </div>
                <div>
                  <p className="text-white/50 text-sm mb-0.5">Email</p>
                  <a
                    href="mailto:isamarisena2020@gmail.com"
                    className="text-white hover:text-caramel-light transition-colors duration-300"
                  >
                    isamarisena2020@gmail.com
                  </a>
                </div>
              </div>

              {/* Phone */}
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center p-3 overflow-hidden">
                  <img src="/images/celular.png" alt="Telefone" className="w-6 h-6 object-contain" />
                </div>
                <div>
                  <p className="text-white/50 text-sm mb-0.5">Telefone</p>
                  <a
                    href="tel:+5599984683676"
                    className="text-white hover:text-caramel-light transition-colors duration-300"
                  >
                    (99) 98468-3676
                  </a>
                </div>
              </div>
            </div>

            {/* Social links */}
            <div className="flex gap-4 mt-10">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 bg-white/10 hover:bg-caramel/30 rounded-xl flex items-center justify-center text-white/80 hover:text-white transition-all duration-300 hover:-translate-y-1"
                aria-label="Instagram"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
                </svg>
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 bg-white/10 hover:bg-caramel/30 rounded-xl flex items-center justify-center text-white/80 hover:text-white transition-all duration-300 hover:-translate-y-1"
                aria-label="LinkedIn"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
              </a>
              <a
                href="mailto:isamarasena2001@gmail.com"
                className="w-12 h-12 bg-white/10 hover:bg-caramel/30 rounded-xl flex items-center justify-center text-white/80 hover:text-white transition-all duration-300 hover:-translate-y-1"
                aria-label="Email"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </a>
            </div>
          </motion.div>

          {/* Right - Form */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Name */}
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-white/70 mb-2"
                >
                  Nome
                </label>
                <input
                  type="text"
                  id="name"
                  required
                  value={formData.name}
                  onChange={(e) =>
                    setFormData({ ...formData, name: e.target.value })
                  }
                  className="w-full px-5 py-4 bg-white/10 border border-white/15 rounded-xl text-white placeholder-white/30 focus:outline-none focus:border-caramel/50 focus:bg-white/15 transition-all duration-300"
                  placeholder="Seu nome completo"
                />
              </div>

              {/* Email */}
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-white/70 mb-2"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  required
                  value={formData.email}
                  onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                  className="w-full px-5 py-4 bg-white/10 border border-white/15 rounded-xl text-white placeholder-white/30 focus:outline-none focus:border-caramel/50 focus:bg-white/15 transition-all duration-300"
                  placeholder="seu@email.com"
                />
              </div>

              {/* Message */}
              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-white/70 mb-2"
                >
                  Mensagem
                </label>
                <textarea
                  id="message"
                  rows={5}
                  required
                  value={formData.message}
                  onChange={(e) =>
                    setFormData({ ...formData, message: e.target.value })
                  }
                  className="w-full px-5 py-4 bg-white/10 border border-white/15 rounded-xl text-white placeholder-white/30 focus:outline-none focus:border-caramel/50 focus:bg-white/15 transition-all duration-300 resize-none"
                  placeholder="Como posso ajudar?"
                />
              </div>

              {/* Submit */}
              <motion.button
                type="submit"
                disabled={sending}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full py-4 bg-caramel hover:bg-caramel-dark text-white font-semibold rounded-xl transition-all duration-300 hover:shadow-xl hover:shadow-caramel/20 disabled:opacity-70 disabled:cursor-not-allowed"
              >
                {sending ? (
                  <span className="flex items-center justify-center gap-2">
                    <svg
                      className="animate-spin w-5 h-5"
                      fill="none"
                      viewBox="0 0 24 24"
                    >
                      <circle
                        className="opacity-25"
                        cx="12"
                        cy="12"
                        r="10"
                        stroke="currentColor"
                        strokeWidth="4"
                      />
                      <path
                        className="opacity-75"
                        fill="currentColor"
                        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"
                      />
                    </svg>
                    Enviando...
                  </span>
                ) : sent ? (
                  <span className="flex items-center justify-center gap-2">
                    ✓ Mensagem enviada!
                  </span>
                ) : (
                  "Enviar mensagem"
                )}
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
