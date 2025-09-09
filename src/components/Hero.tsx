import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <section id="home" className="w-full py-20 md:py-32 lg:py-40 bg-gradient-to-r from-blue-50 to-teal-50 dark:from-blue-900/20 dark:to-teal-900/20">
      <div className="container mx-auto text-center px-4">
        <h1 className="text-4xl md:text-6xl font-bold tracking-tighter mb-4">
          Your Smile, Our Specialty
        </h1>
        <p className="max-w-2xl mx-auto text-lg text-muted-foreground mb-8">
          Welcome to Poonguzhali Specialist Dental Care, where we provide expert dental solutions with a gentle and caring touch.
        </p>
        <Button size="lg" asChild>
          <a href="#contact">Book an Appointment</a>
        </Button>
      </div>
    </section>
  );
};

export default Hero;