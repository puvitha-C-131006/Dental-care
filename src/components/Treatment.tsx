"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Sparkles, ClipboardCheck, Radiation, Syringe, Crown, Braces } from "lucide-react";

const treatments = [
  {
    icon: <ClipboardCheck className="h-8 w-8 text-primary" />,
    title: "General Dentistry",
    description: "Routine check-ups, cleanings, fillings, and preventive care to maintain oral health.",
  },
  {
    icon: <Sparkles className="h-8 w-8 text-primary" />,
    title: "Cosmetic Procedures",
    description: "Teeth whitening, veneers, bonding, and smile makeovers for a brighter, more confident smile.",
  },
  {
    icon: <Braces className="h-8 w-8 text-primary" />,
    title: "Orthodontics",
    description: "Braces, clear aligners, and other treatments to correct misaligned teeth and bites.",
  },
  {
    icon: <Crown className="h-8 w-8 text-primary" />,
    title: "Restorative Dentistry",
    description: "Crowns, bridges, dentures, and implants to restore function and aesthetics of damaged or missing teeth.",
  },
  {
    icon: <Radiation className="h-8 w-8 text-primary" />,
    title: "Oral Surgery",
    description: "Extractions, wisdom teeth removal, and other surgical procedures when necessary.",
  },
  {
    icon: <Syringe className="h-8 w-8 text-primary" />,
    title: "Periodontal Care",
    description: "Treatment for gum disease, including deep cleanings and gum grafting.",
  },
];

const Treatment = () => {
  return (
    <section id="treatment" className="w-full py-12 md:py-24 lg:py-32 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 opacity-0 animate-fade-in-up">
          <h2 className="text-3xl md:text-4xl font-bold">Our Treatments</h2>
          <p className="text-muted-foreground mt-2">Providing a wide range of dental services for all your needs.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {treatments.map((treatment, index) => (
            <Card key={treatment.title} className="opacity-0 animate-fade-in-up" style={{ animationDelay: `${index * 150}ms` }}>
              <CardHeader className="flex flex-row items-center gap-4">
                {treatment.icon}
                <CardTitle>{treatment.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">{treatment.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Treatment;