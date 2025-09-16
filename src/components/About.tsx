const About = () => {
  return (
    <section id="about" className="w-full py-12 md:py-24 lg:py-32 bg-muted/40">
      <div className="container mx-auto px-4 grid md:grid-cols-2 gap-12 items-center">
        <div className="flex justify-center">
          <img
            src="/d1.jpg"
            alt="Poonguzhali Dental Care Clinic Interior"
            className="rounded-lg shadow-lg max-w-full h-auto object-cover"
          />
        </div>
        <div className="space-y-4 text-center md:text-left">
          <h2 className="text-3xl md:text-4xl font-bold text-primary">About Poonguzhali Dental Speciality Care</h2>
          <p className="text-muted-foreground">
            At Poonguzhali Specialist Dental Care, our mission is to provide the highest quality dental services in a comfortable and welcoming environment. Our team of experienced specialists is dedicated to helping you achieve and maintain a healthy, beautiful smile for life.
          </p>
          <p className="text-muted-foreground">
            We utilize the latest technology and techniques to ensure that your treatment is efficient, effective, and as painless as possible. Your comfort and satisfaction are our top priorities.
          </p>
          <div className="pt-4">
            <h3 className="text-xl font-semibold text-foreground">Dr. P. Poonguzhali, BDS., F.F.A.</h3>
            <p className="text-muted-foreground">Lead Dental Specialist</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;