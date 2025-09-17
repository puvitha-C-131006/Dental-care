import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Features from "@/components/Features";
import Pricing from "@/components/Pricing";
import Footer from "@/components/Footer";
import Treatment from "@/components/Treatment";
import Testimonials from "@/components/Testimonials";
import AnimateOnScroll from "@/components/AnimateOnScroll"; // Import the new component

const Index = () => {
  return (
    <div className="flex flex-col min-h-screen bg-background">
      <Header />
      <main className="flex-grow">
        <Hero />
        <AnimateOnScroll delay="100ms">
          <About />
        </AnimateOnScroll>
        <AnimateOnScroll delay="200ms">
          <Features />
        </AnimateOnScroll>
        <AnimateOnScroll delay="300ms">
          <Treatment />
        </AnimateOnScroll>
        <AnimateOnScroll delay="400ms">
          <Testimonials />
        </AnimateOnScroll>
        <AnimateOnScroll delay="500ms">
          <Pricing />
        </AnimateOnScroll>
      </main>
      <Footer />
    </div>
  );
};

export default Index;