import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <section
      id="home"
      className="relative w-full py-20 md:py-32 lg:py-40 bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: "url('https://images.unsplash.com/photo-1559839734-2b71ea197ec2?q=80&w=2070&auto=format&fit=crop')" }}
    >
      <div className="absolute inset-0 bg-black/50" />
      <div className="relative container mx-auto text-center px-4 text-white">
        <h1 className="text-4xl md:text-6xl font-bold tracking-tighter mb-4 opacity-0 animate-fade-in-up">
          Brightening Smiles, One Patient at a Time
        </h1>
        <p className="max-w-2xl mx-auto text-lg text-gray-200 mb-8 opacity-0 animate-fade-in-up [animation-delay:200ms]">
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