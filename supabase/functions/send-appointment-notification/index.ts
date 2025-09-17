import { serve } from "https://deno.land/std@0.190.0/http/server.ts";

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
};

serve(async (req) => {
  // Handle CORS preflight request
  if (req.method === 'OPTIONS') {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const { name, phone, email, age, date, time, message } = await req.json();

    // Log the appointment details (you can extend this to send emails, save to DB, etc.)
    console.log("New Appointment Request:");
    console.log(`Name: ${name}`);
    console.log(`Phone: ${phone}`);
    console.log(`Email: ${email}`);
    console.log(`Age: ${age}`);
    console.log(`Date: ${date}`);
    console.log(`Time: ${time}`);
    console.log(`Message: ${message || 'No message provided'}`);

    // In a real application, you would integrate with an email service (e.g., SendGrid, Resend)
    // or save this data to a Supabase database table.
    // For now, we'll just return a success response.

    return new Response(
      JSON.stringify({ message: "Appointment request received successfully!" }),
      {
        headers: { ...corsHeaders, "Content-Type": "application/json" },
        status: 200,
      },
    );
  } catch (error) {
    console.error("Error processing appointment request:", error.message);
    return new Response(
      JSON.stringify({ error: "Failed to process appointment request." }),
      {
        headers: { ...corsHeaders, "Content-Type": "application/json" },
        status: 500,
      },
    );
  }
});