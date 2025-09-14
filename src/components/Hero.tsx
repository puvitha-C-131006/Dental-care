import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <section
      id="home"
      className="w-full py-20 md:py-32 lg:py-40 bg-white" // Ensure white background for hero
    >
      <div className="container mx-auto flex flex-col items-center px-4">
        <div className="space-y-6 text-center opacity-0 animate-fade-in-up max-w-3xl">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-gray-900"> {/* Made heading bolder */}
            <span className="text-primary">Poonguzhali Dental Speciality Care</span>
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground italic font-medium"> {/* Added medium font weight */}
            Your Smile Begins Here
          </p>
          <p className="text-lg font-semibold text-cyan-800"> {/* Increased font size slightly */}
            Dr. P. Poonguzhali, BDS., F.F.A.
          </p>
          <div className="pt-4">
            <Button size="lg" className="rounded-full px-8 py-6 text-lg bg-primary hover:bg-primary/90 text-primary-foreground shadow-lg" asChild> {/* Enhanced button styling */}
              <Link to="/contact">Book an Appointment</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;