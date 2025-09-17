import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <section
      id="home"
      className="w-full py-20 md:py-32 lg:py-40 bg-background"
    >
      <div className="container mx-auto text-center px-4 text-foreground">
        <h1 className="text-4xl md:text-6xl font-bold tracking-tighter mb-4 opacity-0 animate-fade-in-up text-primary">
          Poonguzhali Dental Speciality Care
        </h1>
        <p className="max-w-2xl mx-auto text-lg text-muted-foreground mb-4 opacity-0 animate-fade-in-up [animation-delay:100ms]">
          Your Smile Begins Here
        </p>
        <p className="max-w-2xl mx-auto text-lg font-serif italic text-green-500 mb-8 opacity-0 animate-fade-in-up [animation-delay:200ms]">
          Dr. P. Poonguzhali, BDS., F.F.A.
        </p>
        <div className="opacity-0 animate-fade-in-up [animation-delay:300ms]">
          <Button size="lg" asChild>
            <Link to="/contact">Book an Appointment</Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Hero;