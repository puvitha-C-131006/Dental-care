import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <section id="home" className="w-full py-20 md:py-32 lg:py-40 bg-gradient-to-b from-sky-50 to-white dark:from-sky-900/20 dark:to-background overflow-hidden">
      <div className="container mx-auto text-center px-4">
        <h1 className="text-4xl md:text-6xl font-bold tracking-tighter mb-4 opacity-0 animate-fade-in-up">
          Brightening Smiles, One Patient at a Time
        </h1>
        <p className="max-w-2xl mx-auto text-lg text-muted-foreground mb-8 opacity-0 animate-fade-in-up [animation-delay:200ms]">
          Welcome to Poonguzhali Specialist Dental Care, where we provide expert dental solutions with a gentle and caring touch.
        </p>
        <div className="opacity-0 animate-fade-in-up [animation-delay:400ms]">
          <Button size="lg" asChild>
            <Link to="/contact">Book an Appointment</Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Hero;