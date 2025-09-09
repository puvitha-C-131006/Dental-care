import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Check } from "lucide-react";

const pricingTiers = [
  {
    title: "Basic Care",
    price: "$75",
    frequency: "/visit",
    description: "For routine check-ups and cleanings.",
    features: ["Comprehensive Exam", "Professional Cleaning", "Oral Cancer Screening"],
  },
  {
    title: "Cosmetic Plan",
    price: "$250",
    frequency: "/treatment",
    description: "For enhancing the beauty of your smile.",
    features: ["Everything in Basic Care", "Professional Teeth Whitening", "Cosmetic Consultation"],
  },
  {
    title: "Family Package",
    price: "$250",
    frequency: "/month",
    description: "Complete care for the entire family.",
    features: ["Up to 4 Family Members", "All Basic Care Services", "20% off other treatments"],
  },
];

const Pricing = () => {
  return (
    <section id="pricing" className="w-full py-12 md:py-24 lg:py-32 bg-muted/40">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold">Transparent Pricing</h2>
          <p className="text-muted-foreground mt-2">Affordable plans for every need.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {pricingTiers.map((tier) => (
            <Card key={tier.title} className="flex flex-col">
              <CardHeader>
                <CardTitle>{tier.title}</CardTitle>
                <CardDescription>{tier.description}</CardDescription>
                <div>
                  <span className="text-4xl font-bold">{tier.price}</span>
                  <span className="text-muted-foreground">{tier.frequency}</span>
                </div>
              </CardHeader>
              <CardContent className="flex-grow">
                <ul className="space-y-2">
                  {tier.features.map((feature) => (
                    <li key={feature} className="flex items-center gap-2">
                      <Check className="h-5 w-5 text-primary" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
              <CardFooter>
                <Button className="w-full" asChild>
                  <a href="#contact">Book Now</a>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;