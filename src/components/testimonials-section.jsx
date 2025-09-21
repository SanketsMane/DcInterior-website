import { Card, CardContent } from "./ui/card";
import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Sarah Johnson",
    role: "Homeowner",
    content:
      "DcInteriors transformed our home into a stunning and functional space. Their attention to detail and personalized approach was outstanding.",
    rating: 5,
  },
  {
    name: "Michael Chen",
    role: "Business Owner",
    content:
      "Our office redesign enhanced productivity and left a lasting impression on our clients. The team truly captured our vision.",
    rating: 5,
  },
  {
    name: "Emma Wilson",
    role: "Property Developer",
    content:
      "Professional, creative, and reliable. DcInteriors delivered an exceptional space on time and within budget.",
    rating: 5,
  },
];

export default function TestimonialsSection() {
  return (
    <section className="py-20 bg-gradient-to-b from-secondary/30 to-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-slide-up">
          <h2 className="mb-4">What Our Clients Say</h2>
          <p className="text-muted-foreground text-lg leading-relaxed">
            Hear from our clients about how DcInteriors brought their
            vision to life and created spaces they love.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card
              key={testimonial.name}
              className="bg-card/50 backdrop-blur-sm border-border/50 animate-fade-in hover:shadow-lg transition-shadow duration-300"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <CardContent className="p-6">
                <div className="flex items-center space-x-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star
                      key={i}
                      className="h-4 w-4 fill-accent text-accent"
                    />
                  ))}
                </div>
                <p className="text-muted-foreground mb-6 italic">
                  &quot;{testimonial.content}&quot;
                </p>
                <div className="border-t border-border pt-4">
                  <p className="font-semibold">{testimonial.name}</p>
                  <p className="text-sm text-muted-foreground">
                    {testimonial.role}
                  </p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}