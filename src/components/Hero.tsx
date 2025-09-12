import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <section
      id="home"
      className="w-full py-20 md:py-32 lg:py-40 bg-background"
    >
      <div className="container mx-auto grid md:grid-cols-2 gap-12 items-center px-4">
        <div className="space-y-6 text-center md:text-left opacity-0 animate-fade-in-up">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight font-serif text-gray-900">
            Poonguzhali Dental Speciality Care
          </h1>
          <p className="text-xl md:text-2xl text-primary font-semibold">
            Your Smile Begins Here
          </p>
          <p className="text-md text-muted-foreground">
            Dr. P. Poonguzhali, BDS., F.F.A.
          </p>
          <div className="pt-4">
            <Button size="lg" asChild>
              <Link to="/contact">Book an Appointment</Link>
            </Button>
          </div>
        </div>
        <div className="flex justify-center opacity-0 animate-fade-in-up [animation-delay:200ms]">
          <img
            src="/dental.jpg"
            alt="Modern dental clinic illustration"
            className="rounded-lg w-full max-w-md animate-slow-float"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;