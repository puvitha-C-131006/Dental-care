import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Stethoscope, HeartPulse, Bone, Smile, Baby, Zap } from "lucide-react";

const features = [
  {
    icon: <Stethoscope className="h-8 w-8 text-primary" />,
    title: "Comprehensive Exams",
    description: "Thorough check-ups to assess your oral health and prevent future issues.",
  },
  {
    icon: <Smile className="h-8 w-8 text-primary" />,
    title: "Cosmetic Dentistry",
    description: "Enhance your smile with teeth whitening, veneers, and smile makeovers.",
  },
  {
    icon: <Bone className="h-8 w-8 text-primary" />,
    title: "Advanced Orthodontics",
    description: "Straighten your teeth and correct your bite with modern braces and clear aligners.",
  },
  {
    icon: <HeartPulse className="h-8 w-8 text-primary" />,
    title: "Dental Implants",
    description: "Permanent solutions for missing teeth that look and feel natural.",
  },
  {
    icon: <Baby className="h-8 w-8 text-primary" />,
    title: "Pediatric Care",
    description: "Specialized, gentle dental care for infants, children, and adolescents.",
  },
  {
    icon: <Zap className="h-8 w-8 text-primary" />,
    title: "Latest Technology",
    description: "We use state-of-the-art equipment for precise and comfortable treatments.",
  },
];

const Features = () => {
  return (
    <section id="services" className="w-full py-12 md:py-24 lg:py-32 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 opacity-0 animate-fade-in-up">
          <h2 className="text-3xl md:text-4xl font-bold">Our Services</h2>
          <p className="text-muted-foreground mt-2">Comprehensive dental care for the whole family.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card key={feature.title} className="opacity-0 animate-fade-in-up" style={{ animationDelay: `${index * 150}ms` }}>
              <CardHeader className="flex flex-row items-center gap-4">
                {feature.icon}
                <CardTitle>{feature.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;