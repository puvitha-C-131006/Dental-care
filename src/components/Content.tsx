import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const articles = [
  {
    title: "The Importance of Regular Dental Check-ups",
    description: "Learn why visiting the dentist twice a year is crucial for your overall health.",
    image: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?q=80&w=2070&auto=format&fit=crop",
  },
  {
    title: "Tips for a Whiter, Brighter Smile at Home",
    description: "Discover simple, effective ways to maintain a radiant smile between visits.",
    image: "https://images.unsplash.com/photo-1625246302023-7a1f7b454b6a?q=80&w=2070&auto=format&fit=crop",
  },
  {
    title: "Understanding Common Dental Procedures",
    description: "A simple guide to fillings, root canals, and crowns to ease your dental anxiety.",
    image: "https://images.unsplash.com/photo-1606811333358-f070a5b5a9a3?q=80&w=2070&auto=format&fit=crop",
  },
];

const Content = () => {
  return (
    <section id="content" className="w-full py-12 md:py-24 lg:py-32 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold">Dental Health Insights</h2>
          <p className="text-muted-foreground mt-2">Information to help you maintain a healthy smile.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {articles.map((article) => (
            <Card key={article.title}>
              <CardHeader>
                <img src={article.image} alt={article.title} className="rounded-t-lg aspect-video object-cover" />
              </CardHeader>
              <CardContent>
                <CardTitle className="mb-2 text-lg">{article.title}</CardTitle>
                <p className="text-muted-foreground text-sm">{article.description}</p>
                <a href="#" className="text-primary font-semibold text-sm mt-4 inline-block">Read More &rarr;</a>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Content;