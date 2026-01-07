import Header from "@/components/Header";
import Footer from "@/components/Footer";
import AboutUs from "@/components/AboutUs";

export default function SobreNosotrosPage() {
  return (
    <main className="min-h-screen bg-humo">
      <Header />
      
      <div className="pt-24">
        <AboutUs />
      </div>
      
      <Footer />
    </main>
  );
}
