import Header from "@/components/Header";
import Hero from "@/components/Hero";
import ServicesPreview from "@/components/ServicesPreview";
import About from "@/components/About";
import Benefits from "@/components/Benefits";
import SociosSection from "@/components/SociosSection";
import CTAContact from "@/components/CTAContact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen" style={{ background: "var(--bg-primary)" }}>
      <Header />
      <Hero />
      <ServicesPreview />
      <SociosSection />
      <About />
      <Benefits />
      <CTAContact />
      <Footer />
    </main>
  );
}
