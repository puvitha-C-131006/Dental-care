import { Header } from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Features from "@/components/Features";
import Pricing from "@/components/Pricing";
import Footer from "@/components/Footer";
import Treatment from "@/components/Treatment";
import Testimonials from "@/components/Testimonials";
import FloatingLogo from "@/components/FloatingLogo";

const Index = () => {
  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-b from-background via-secondary/50 to-background">
      <Header />
      <FloatingLogo />
      <main className="flex-grow">
        <Hero />
        <About />
        <Features />
        <Treatment />
        <Testimonials />
        <Pricing />
      </main>
      <Footer />
    </div>
  );
};

export default Index;