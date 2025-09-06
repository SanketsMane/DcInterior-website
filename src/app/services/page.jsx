import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  Home,
  Building,
  Palette,
  Layout,
  Lightbulb,
  ShoppingBag,
  CheckCircle,
  ArrowRight,
} from "lucide-react";
import Link from "next/link";

const services = [
  {
    icon: Home,
    title: "Home Interiors",
    description:
      "Bespoke residential designs that bring comfort, elegance, and functionality to every corner of your home.",
    features: [
      "Bedroom & living room makeovers",
      "Modular kitchen design",
      "Bathroom revamp",
      "Custom-built furniture",
      "Personalized décor accents",
    ],
    price: "Starting from PKR 350,000",
  },
  {
    icon: Building,
    title: "Commercial Spaces",
    description:
      "Designing impactful workplaces and retail environments that inspire employees and attract customers.",
    features: [
      "Office layout planning",
      "Retail & showroom design",
      "Restaurants & cafes",
      "Brand-consistent interiors",
      "Employee-friendly spaces",
    ],
    price: "Starting from PKR 600,000",
  },
  {
    icon: Layout,
    title: "Space Optimization",
    description:
      "Smart layout solutions to ensure your space feels open, functional, and visually balanced.",
    features: [
      "Efficient floor plans",
      "Traffic flow mapping",
      "Storage maximization",
      "Furniture placement",
      "3D layout visualization",
    ],
    price: "Starting from PKR 200,000",
  },
  {
    icon: Palette,
    title: "Color & Material Styling",
    description:
      "Expert guidance in choosing color palettes, textures, and materials that complement your style.",
    features: [
      "Theme-based color schemes",
      "Paint & wallpaper selection",
      "Accent highlights",
      "Texture & fabric matching",
      "Seasonal refresh advice",
    ],
    price: "Starting from PKR 80,000",
  },
  {
    icon: Lightbulb,
    title: "Lighting Solutions",
    description:
      "Custom lighting setups that enhance mood, highlight interiors, and improve functionality.",
    features: [
      "Ambient & task lighting",
      "Natural light utilization",
      "Designer fixtures",
      "Smart lighting systems",
      "Energy-efficient planning",
    ],
    price: "Starting from PKR 150,000",
  },
  {
    icon: ShoppingBag,
    title: "Furniture & Décor",
    description:
      "Handpicked furniture, art, and accessories to add the finishing touch to your interiors.",
    features: [
      "Custom-made furniture",
      "Décor & accessory sourcing",
      "Art & wall styling",
      "Textile layering",
      "Final staging & styling",
    ],
    price: "Starting from PKR 250,000",
  },
];

const process = [
  {
    step: "01",
    title: "Consultation",
    description:
      "We begin with a detailed discussion to understand your space, lifestyle, and expectations.",
  },
  {
    step: "02",
    title: "Concept & Design",
    description:
      "Our team prepares mood boards, layouts, and digital previews to bring your vision to life.",
  },
  {
    step: "03",
    title: "Material & Finishes",
    description:
      "We guide you through selecting the right materials, furniture, and color palettes.",
  },
  {
    step: "04",
    title: "Execution & Handover",
    description:
      "Our experts manage the entire process, ensuring a seamless transformation and on-time delivery.",
  },
];

export default function ServicesPage() {
  return (
    <div className="min-h-screen pt-16">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-primary/5 to-secondary/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="max-w-3xl mx-auto animate-slide-up">
            <h1 className="mb-6">Our Services</h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Whether it’s your dream home or a professional workspace, we
              deliver tailored interior solutions that combine creativity,
              functionality, and timeless style.
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card
                key={service.title}
                className="group hover:shadow-xl transition-all duration-300 border-border/50 animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardHeader className="text-center">
                  <div className="w-16 h-16 mx-auto mb-4 bg-primary/10 rounded-full flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                    <service.icon className="h-8 w-8 text-primary" />
                  </div>
                  <CardTitle className="text-xl">{service.title}</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-muted-foreground text-center">
                    {service.description}
                  </p>

                  <div className="space-y-2">
                    {service.features.map((feature) => (
                      <div key={feature} className="flex items-start space-x-2">
                        <CheckCircle className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                        <span className="text-sm text-muted-foreground">
                          {feature}
                        </span>
                      </div>
                    ))}
                  </div>

                  <div className="pt-4 border-t border-border">
                    <div className="flex items-center justify-between">
                      <span className="text-lg font-semibold text-primary">
                        {service.price}
                      </span>
                      <Button
                        size="sm"
                        variant="outline"
                        className="group-hover:bg-primary group-hover:text-primary-foreground transition-colors"
                      >
                        Learn More
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-gradient-to-b from-secondary/30 to-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-slide-up">
            <h2 className="mb-4">How We Work</h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Our structured process ensures every project is delivered smoothly
              — from initial consultation to the final handover.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {process.map((item, index) => (
              <div
                key={item.step}
                className="text-center animate-fade-in"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className="w-16 h-16 mx-auto mb-6 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-2xl font-bold">
                  {item.step}
                </div>
                <h3 className="text-xl font-semibold mb-3">{item.title}</h3>
                <p className="text-muted-foreground">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center bg-gradient-to-br from-primary/5 to-secondary/30 rounded-2xl p-12 animate-scale-in">
            <h2 className="mb-6">Let’s Design Your Dream Space</h2>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              Ready to bring your ideas to life? Book a consultation and start
              your journey with us today.
            </p>
            <Button
              asChild
              size="lg"
              className="bg-primary hover:bg-primary/90"
            >
              <Link href="/contact" className="flex items-center space-x-2">
                <span>Schedule Consultation</span>
                <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
