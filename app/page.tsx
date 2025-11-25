import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import AboutMe from "@/components/AboutMe";
import ServicesPreview from "@/components/ServicesPreview";
import CTAContact from "@/components/CTAContact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <Hero />
      <About />
      <AboutMe />
      <ServicesPreview />
      <CTAContact />
      <Footer />
    </main>
  );
}
