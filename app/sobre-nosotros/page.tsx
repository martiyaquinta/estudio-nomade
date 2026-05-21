import Header from "@/components/Header";
import Footer from "@/components/Footer";
import AboutUs from "@/components/AboutUs";

export default function SobreNosotrosPage() {
  return (
    <main className="min-h-screen" style={{ background: "var(--bg-primary)" }}>
      <Header />
      <div className="pt-20">
        <AboutUs />
      </div>
      <Footer />
    </main>
  );
}
