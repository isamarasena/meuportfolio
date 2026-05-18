import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Isa Sena | Profissional Criativa - Fotografia, Conteúdo & Design",
  description:
    "Portfólio de Isa Sena — Fotógrafa, Criadora de Conteúdo e Designer. Focada em posicionamento de marca e criação estratégica com estética refinada.",
  keywords: [
    "fotografia",
    "design gráfico",
    "criação de conteúdo",
    "branding",
    "marketing digital",
    "Isa Sena",
  ],
  authors: [{ name: "Isa Sena" }],
  openGraph: {
    title: "Isa Sena | Profissional Criativa",
    description:
      "Fotógrafa, Criadora de Conteúdo e Designer. Focada em posicionamento de marca e criação estratégica.",
    type: "website",
    locale: "pt_BR",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className="h-full antialiased">
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
