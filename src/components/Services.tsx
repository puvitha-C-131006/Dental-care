import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Stethoscope, HeartPulse, Bone, Smile, Baby } from "lucide-react";

const services = [
  {
    icon: <Stethoscope className="h-8 w-8 text-primary" />,
    title: "General Dentistry",
    description: "Routine check-ups, cleanings, and fillings to maintain your oral health.",
  },
  {
    icon: <Smile className="h-8 w-8 text-primary" />,
    title: "Cosmetic Dentistry",
    description: "Enhance your smile with teeth whitening, veneers, and smile makeovers.",
  },
  {
    icon: <Bone className="h-8 w-8 text-primary" />,
    title: "Orthodontics",
    description: "Straighten your teeth and correct your bite with braces and clear aligners.",
  },
  {
    icon: <HeartPulse className="h-8 w-8 text-primary" />,
    title: "Dental Implants",
    description: "Permanent solutions for missing teeth that look and feel natural.",
  },
  {
    icon: <Baby className="h-8 w-8 text-primary" />,
    title: "Pediatric Dentistry",
    description: "Specialized dental care for infants, children, and adolescents.",
  },
];

const Services = () => {
  return (
    <section id="services" className="w-full py-12 md:py-24 lg:py-32 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold">Our Services</h2>
          <p className="text-muted-foreground mt-2">Comprehensive dental care for the whole family.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => (
            <Card key={service.title}>
              <CardHeader className="flex flex-row items-center gap-4">
                {service.icon}
                <CardTitle>{service.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">{service.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;