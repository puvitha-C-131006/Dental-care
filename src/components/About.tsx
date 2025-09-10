const About = () => {
  return (
    <section id="about" className="w-full py-12 md:py-24 lg:py-32 bg-muted/40">
      <div className="container mx-auto grid md:grid-cols-2 gap-12 items-center px-4">
        <div>
          <img
            src="/dental.jpg"
            alt="Poonguzhali Dental Care Clinic"
            className="rounded-lg shadow-lg w-full h-auto object-cover animate-slow-float"
          />
        </div>
        <div className="space-y-4">
          <h2 className="text-3xl md:text-4xl font-bold">About Poonguzhali Dental Care</h2>
          <p className="text-muted-foreground">
            At Poonguzhali Specialist Dental Care, our mission is to provide the highest quality dental services in a comfortable and welcoming environment. Our team of experienced specialists is dedicated to helping you achieve and maintain a healthy, beautiful smile for life.
          </p>
          <p className="text-muted-foreground">
            We utilize the latest technology and techniques to ensure that your treatment is efficient, effective, and as painless as possible. Your comfort and satisfaction are our top priorities.
          </p>
          <div className="pt-4">
            <h3 className="text-xl font-semibold text-primary">Dr. R. Poonguzhali, BDS., F.F.A.</h3>
            <p className="text-muted-foreground">Lead Dental Specialist</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;