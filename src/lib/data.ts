export interface PortfolioItem {
  id: string;
  title: string;
  description: string;
  fullDescription: string;
  image: string;
  category: "fotografia" | "video" | "design";
  context: string;
}

export interface ExperienceItem {
  title: string;
  description: string;
  icon: string;
  image?: string;
}

export const experiences: ExperienceItem[] = [
  {
    title: "Produção de Conteúdo (Foto e Vídeo)",
    description:
      "Desenvolvimento de material visual de alta performance para marcas premium, unindo técnica fotográfica e tendências de vídeo curto.",
    icon: "📸",
    image: "/images/foto.png",
  },
  {
    title: "Gestão de Redes Sociais & Design",
    description:
      "Planejamento estratégico de feed e criação de identidade visual digital e design gráfico focado em conversão e branding.",
    icon: "🎨",
    image: "/images/gestao.png",
  },
  {
    title: "Criação de Campanhas Visuais",
    description:
      "Execução de campanhas publicitárias visuais de ponta a ponta, desde atendimento ao cliente até entrega final.",
    icon: "🚀",
    image: "/images/ads.png",
  },
];

export const skillCategories = [
  {
    id: "fotografia",
    title: "Fotografia & Edição",
    subtitle: "Capturando momentos com estética refinada",
    icon: "📷",
    image: "/images/foto.png",
    gradient: "from-caramel/20 to-terracotta/10",
  },
  {
    id: "video",
    title: "Vídeo e Conteúdo",
    subtitle: "Narrativas visuais para o digital",
    icon: "🎬",
    image: "/images/video.png",
    gradient: "from-brown-light/20 to-caramel/10",
  },
  {
    id: "design",
    title: "Design Gráfico",
    subtitle: "Identidade visual que conecta",
    icon: "✨",
    image: "/images/design.png",
    gradient: "from-terracotta/15 to-caramel-light/10",
  },
] as const;

export const portfolioItems: PortfolioItem[] = [
  // Fotografia
  {
    id: "foto-1",
    title: "Ensaio Editorial Verão",
    description: "Fotografia editorial para campanha de moda verão",
    fullDescription:
      "Ensaio editorial completo para campanha de verão de uma marca de moda premium. O projeto envolveu direção de arte, escolha de locações ao ar livre e pós-produção detalhada para criar imagens que transmitissem elegância e frescor, capturando a essência da estação com iluminação natural golden hour.",
    image: "/images/photo-1.png",
    category: "fotografia",
    context: "Marca de moda premium · Campanha Verão 2024",
  },
  {
    id: "foto-2",
    title: "Fotografia de Produto",
    description: "Still life e flatlay para marca de cosméticos",
    fullDescription:
      "Produção fotográfica completa para linha de cosméticos naturais. Cada produto foi fotografado com técnica de still life em superfície de mármore, utilizando iluminação suave e composição minimalista que valoriza as texturas e cores naturais dos produtos, criando imagens premium para e-commerce e redes sociais.",
    image: "/images/photo-2.png",
    category: "fotografia",
    context: "Marca de cosméticos · Catálogo 2024",
  },
  {
    id: "foto-3",
    title: "Fotografia Arquitetônica",
    description: "Registro visual de espaços comerciais premium",
    fullDescription:
      "Documentação fotográfica de espaço comercial para marca lifestyle. O projeto capturou a atmosfera acolhedora e os detalhes arquitetônicos do ambiente, destacando elementos de design de interiores, iluminação ambiente e a experiência sensorial do espaço, ideal para divulgação em redes sociais e materiais de marketing.",
    image: "/images/photo-3.png",
    category: "fotografia",
    context: "Espaço comercial · Lifestyle Brand",
  },
  // Vídeo e Conteúdo
  {
    id: "video-1",
    title: "Cobertura de Evento",
    description: "Registro audiovisual de evento corporativo",
    fullDescription:
      "Cobertura fotográfica e videográfica completa de evento corporativo de alto padrão. O trabalho incluiu captação de momentos espontâneos, detalhes de decoração, e atmosfera do evento com iluminação ambiente e bokeh, resultando em material visual elegante para redes sociais e acervo institucional.",
    image: "/images/photo-4.png",
    category: "video",
    context: "Evento Corporativo · Cobertura Completa",
  },
  {
    id: "video-2",
    title: "Conteúdo Gastronômico",
    description: "Vídeos e fotos para restaurante premium",
    fullDescription:
      "Produção de conteúdo visual para restaurante de alta gastronomia. O projeto combinou fotografia de alimentos com iluminação natural, captação em vídeo dos pratos sendo preparados e servidos, além de ambientação do espaço, criando um acervo completo para Instagram e plataformas de delivery.",
    image: "/images/photo-5.png",
    category: "video",
    context: "Restaurante Premium · Conteúdo Digital",
  },
  {
    id: "video-3",
    title: "Behind The Scenes",
    description: "Bastidores de produção audiovisual",
    fullDescription:
      "Registro completo dos bastidores de produção audiovisual para marca de lifestyle. Documentação do processo criativo, desde a preparação do set até a captação final, mostrando equipamentos, equipe em ação e o cuidado com cada detalhe que resulta em conteúdo de alta qualidade.",
    image: "/images/video-thumb.png",
    category: "video",
    context: "Produção Audiovisual · Making Of",
  },
  // Design
  {
    id: "design-1",
    title: "Identidade Visual Completa",
    description: "Branding e papelaria para marca premium",
    fullDescription:
      "Desenvolvimento completo de identidade visual para marca premium. O projeto incluiu criação de logotipo, paleta de cores, tipografia, cartões de visita, papelaria corporativa e manual de marca. Todo o design foi pensado para transmitir sofisticação e confiança, com uma estética minimalista e atemporal.",
    image: "/images/design-1.png",
    category: "design",
    context: "Branding Completo · Marca Premium",
  },
  {
    id: "design-2",
    title: "Design de Embalagem",
    description: "Packaging para linha de produtos de beleza",
    fullDescription:
      "Criação de design de embalagens para linha de skincare premium. O projeto envolveu desenvolvimento de conceito visual, escolha de materiais e acabamentos, criação de padrões e tipografia exclusiva. As embalagens foram projetadas para transmitir luxo e naturalidade, com acabamento minimalista e paleta de cores neutras.",
    image: "/images/design-2.png",
    category: "design",
    context: "Packaging Design · Linha de Beleza",
  },
  {
    id: "design-3",
    title: "Social Media Design",
    description: "Identidade visual para redes sociais",
    fullDescription:
      "Criação de identidade visual completa para presença digital de marca em redes sociais. O projeto incluiu design de templates para feed e stories do Instagram, criação de highlights covers, paleta de cores digital, tipografia para web e guidelines de uso para manter a consistência visual em todas as plataformas.",
    image: "/images/photo-6.png",
    category: "design",
    context: "Social Media · Identidade Digital",
  },
];
