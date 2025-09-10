"use client";

import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const testimonials = [
  {
    name: "A .Rajadurai",
    avatar: "/a1.jpg", // Updated to use the new image
    feedback: "The team at Poonguzhali Dental Care is amazing! They made me feel so comfortable and my teeth have never looked better. Highly recommend!",
  },
  {
    name: "A .Rajesh Kumar",
    avatar: "/placeholder.svg", // Changed to placeholder
    feedback: "I used to dread dental visits, but not anymore. Dr. Poonguzhali and her staff are incredibly gentle and professional. Excellent service!",
  },
  {
    name: "A . saraswathi",
    avatar: "/placeholder.svg", // Replace with actual image if available
    feedback: "My kids love coming here! The pediatric care is fantastic, and they make dental health fun. A truly family-friendly clinic.",
  },
];

const Testimonials = () => {
  return (
    <section id="testimonials" className="w-full py-12 md:py-24 lg:py-32 bg-muted/40">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold">What Our Patients Say</h2>
          <p className="text-muted-foreground mt-2">Hear from those who trust us with their smiles.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="flex flex-col items-center text-center p-6">
              <CardHeader className="pb-4">
                <Avatar className="h-20 w-20 mb-4">
                  <AvatarImage src={testimonial.avatar} alt={testimonial.name} />
                  <AvatarFallback>{testimonial.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                </Avatar>
                <h3 className="text-lg font-semibold">{testimonial.name}</h3>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground italic">"{testimonial.feedback}"</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;