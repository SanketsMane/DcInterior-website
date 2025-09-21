import { Card, CardContent } from "./ui/card";
import {
  Home,
  Building,
  Palette,
  Layout,
  Lightbulb,
  ShoppingBag,
} from "lucide-react";

const services = [
  {
    icon: Home,
    title: "Residential Design",
    description:
      "Transform your home into a comfortable and stylish sanctuary that reflects your personality.",
  },
  {
    icon: Building,
    title: "Commercial Spaces",
    description:
      "Design professional environments that boost productivity and leave a lasting impression on clients.",
  },
  {
    icon: Layout,
    title: "Space Planning",
    description:
      "Create optimal layouts that maximize functionality, flow, and aesthetics in any space.",
  },
  {
    icon: Palette,
    title: "Color Consultation",
    description:
      "Expert color guidance to craft the perfect mood and ambiance for your space.",
  },
  {
    icon: Lightbulb,
    title: "Lighting Design",
    description:
      "Strategic lighting solutions to enhance both functionality and atmosphere in every room.",
  },
  {
    icon: ShoppingBag,
    title: "Furniture Selection",
    description:
      "Curated furniture and décor pieces that complete your design vision with elegance.",
  },
];

export default function ServicesOverview() {
  return (
    <section className="py-20 bg-gradient-to-b from-background to-secondary/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-slide-up">
          <h2 className="mb-4">Our Design Services</h2>
          <p className="text-muted-foreground text-lg leading-relaxed">
            Design Concept Interiors offers a wide range of interior design services
            tailored to bring your vision to life. From residential to commercial
            spaces, we create environments that inspire and delight.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card
              key={service.title}
              className="group hover:shadow-lg transition-all duration-300 border-border/50 hover:border-primary/20 animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 mx-auto mb-4 bg-primary/10 rounded-full flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                  <service.icon className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                <p className="text-muted-foreground">{service.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}