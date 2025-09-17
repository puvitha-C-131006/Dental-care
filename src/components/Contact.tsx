"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { Calendar } from "@/components/ui/calendar";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { CalendarIcon } from "lucide-react";
import { format } from "date-fns";
import { cn } from "@/lib/utils";
import { useForm, Controller } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { toast } from "sonner";
import { supabase } from "@/lib/supabase";

// Define the form schema using zod
const formSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters." }),
  phone: z.string().regex(/^\d{10}$/, { message: "Phone number must be 10 digits." }),
  email: z.string().email({ message: "Invalid email address." }),
  age: z.coerce.number().min(1, { message: "Age must be at least 1." }).max(120, { message: "Age cannot exceed 120." }),
  date: z.date({ required_error: "A date is required." }),
  time: z.string({ required_error: "A time slot is required." }),
  message: z.string().optional(),
});

type AppointmentFormValues = z.infer<typeof formSchema>;

const Contact = () => {
  const form = useForm<AppointmentFormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      phone: "",
      email: "",
      age: undefined, // Set default to undefined for number input
      date: undefined,
      time: undefined,
      message: "",
    },
  });

  // Generate time slots from 9:00 AM to 8:30 PM
  const timeSlots = [];
  for (let i = 9; i <= 20; i++) {
    const hour = i > 12 ? i - 12 : i;
    const period = i >= 12 ? "PM" : "AM";
    timeSlots.push(`${hour}:00 ${period}`);
    if (i < 20) {
      timeSlots.push(`${hour}:30 ${period}`);
    }
  }

  const onSubmit = async (values: AppointmentFormValues) => {
    const loadingToastId = toast.loading("Sending your appointment request...");
    try {
      // Call your Supabase Edge Function here
      const { data, error } = await supabase.functions.invoke('send-appointment-notification', {
        body: JSON.stringify({
          name: values.name,
          phone: values.phone,
          email: values.email,
          age: values.age, // Include age in the payload
          date: format(values.date, "PPP"),
          time: values.time,
          message: values.message,
        }),
        headers: { 'Content-Type': 'application/json' },
      });

      if (error) {
        throw error;
      }

      toast.dismiss(loadingToastId);
      toast.success("Thank you, your appointment request has been received. We will contact you shortly.");
      form.reset(); // Reset form fields on successful submission
    } catch (error: any) {
      toast.dismiss(loadingToastId);
      toast.error("Failed to send appointment request. Please try again later.");
      console.error("Appointment submission error:", error.message);
    }
  };

  return (
    <section id="contact" className="w-full py-12 md:py-24 lg:py-32 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold">Book an Appointment</h2>
          <p className="text-muted-foreground mt-2">Fill out the form below and we'll get back to you shortly.</p>
        </div>
        <div className="max-w-xl mx-auto">
          <form onSubmit={form.handleSubmit(onSubmit)} className="grid gap-6">
            <div className="grid sm:grid-cols-2 gap-6">
              <div className="space-y-2">
                <Label htmlFor="name">Name</Label>
                <Input id="name" placeholder="Your Name" {...form.register("name")} />
                {form.formState.errors.name && (
                  <p className="text-destructive text-sm">{form.formState.errors.name.message}</p>
                )}
              </div>
              <div className="space-y-2">
                <Label htmlFor="phone">Phone</Label>
                <Input id="phone" placeholder="Your Phone Number" {...form.register("phone")} />
                {form.formState.errors.phone && (
                  <p className="text-destructive text-sm">{form.formState.errors.phone.message}</p>
                )}
              </div>
            </div>
            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input id="email" type="email" placeholder="Your Email Address" {...form.register("email")} />
              {form.formState.errors.email && (
                <p className="text-destructive text-sm">{form.formState.errors.email.message}</p>
              )}
            </div>
            <div className="space-y-2">
              <Label htmlFor="age">Age</Label>
              <Input id="age" type="number" placeholder="Your Age" {...form.register("age", { valueAsNumber: true })} />
              {form.formState.errors.age && (
                <p className="text-destructive text-sm">{form.formState.errors.age.message}</p>
              )}
            </div>
            <div className="grid sm:grid-cols-2 gap-6">
              <div className="space-y-2">
                <Label htmlFor="date">Preferred Date</Label>
                <Controller
                  control={form.control}
                  name="date"
                  render={({ field }) => (
                    <Popover>
                      <PopoverTrigger asChild>
                        <Button
                          variant={"outline"}
                          className={cn(
                            "w-full justify-start text-left font-normal",
                            !field.value && "text-muted-foreground"
                          )}
                        >
                          <CalendarIcon className="mr-2 h-4 w-4" />
                          {field.value ? format(field.value, "PPP") : <span>Pick a date</span>}
                        </Button>
                      </PopoverTrigger>
                      <PopoverContent className="w-auto p-0">
                        <Calendar
                          mode="single"
                          selected={field.value}
                          onSelect={field.onChange}
                          disabled={(date) => date < new Date(new Date().setDate(new Date().getDate() - 1))}
                          initialFocus
                        />
                      </PopoverContent>
                    </Popover>
                  )}
                />
                {form.formState.errors.date && (
                  <p className="text-destructive text-sm">{form.formState.errors.date.message}</p>
                )}
              </div>
              <div className="space-y-2">
                <Label htmlFor="time">Preferred Time</Label>
                <Controller
                  control={form.control}
                  name="time"
                  render={({ field }) => (
                    <Select onValueChange={field.onChange} value={field.value}>
                      <SelectTrigger>
                        <SelectValue placeholder="Select a time" />
                      </SelectTrigger>
                      <SelectContent>
                        {timeSlots.map((slot) => (
                          <SelectItem key={slot} value={slot}>{slot}</SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  )}
                />
                {form.formState.errors.time && (
                  <p className="text-destructive text-sm">{form.formState.errors.time.message}</p>
                )}
              </div>
            </div>
            <div className="space-y-2">
              <Label htmlFor="message">Message</Label>
              <Textarea id="message" placeholder="Any additional information..." {...form.register("message")} />
            </div>
            <Button type="submit" className="w-full bg-success text-success-foreground hover:bg-success/90">Send Message</Button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;