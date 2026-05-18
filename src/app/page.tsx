import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Experience from "@/components/Experience";
import Skills from "@/components/Skills";
import MarketingDigital from "@/components/MarketingDigital";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main className="flex-1">
        <Hero />
        <About />
        <Experience />
        <Skills />
        <MarketingDigital />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
