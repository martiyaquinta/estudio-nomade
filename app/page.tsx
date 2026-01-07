import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Benefits from "@/components/Benefits";
import Portfolio from "@/components/Portfolio";
import ServicesPreview from "@/components/ServicesPreview";
import CTAContact from "@/components/CTAContact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <Hero />
      <About />
      <Benefits />
      <Portfolio />
      <ServicesPreview />
      <CTAContact />
      <Footer />
    </main>
  );
}
