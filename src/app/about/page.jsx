import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import { Award, Users, Clock, Heart } from "lucide-react";

export const metadata = {
  title: "About DcInteriors - Premier Interior Designers in Pune Baner | Design Concept Interiors",
  description: "Learn about Design Concept Interiors (DcInteriors) - Pune Baner's trusted interior design experts. With years of experience in residential & commercial projects near Kirloskar Brother Ltd.",
  keywords: [
    "about DcInteriors",
    "interior designer Pune Baner",
    "Design Concept Interiors team",
    "interior design company Baner",
    "best interior designers Pune",
    "residential commercial interior design",
  ],
};

const stats = [
  {
    icon: Users,
    value: "500+",
    label: "Happy Clients in Pune",
  },
  {
    icon: Award,
    value: "50+",
    label: "Successful Projects",
  },
  {
    icon: Clock,
    value: "8+",
    label: "Years in Pune Market",
  },
  {
    icon: Heart,
    value: "1000+",
    label: "Spaces Transformed",
  },
];

const team = [
  {
    name: "Design Concept Team",
    role: "Creative Directors",
    image: "/user1.jpeg",
    bio: "Our creative team at DcInteriors brings expertise in modern design trends and Pune's architectural preferences.",
  },
  {
    name: "Project Management",
    role: "Lead Coordinators",
    image: "/user2.jpeg",
    bio: "Our project managers ensure timely delivery and seamless execution of all interior design projects in Pune Baner.",
  },
  {
    name: "Client Relations",
    role: "Customer Success",
    image: "/user3.jpeg",
    bio: "Our client relations team ensures every project journey is smooth and satisfying, from consultation to completion.",
  },
];

export default function AboutPage() {
  return (
    <div className="min-h-screen pt-16">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-primary/5 to-secondary/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="animate-slide-up">
              <h1 className="mb-6">About Design Concept Interiors</h1>
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                Based in Baner, Pune, Design Concept Interiors (DcInteriors) has been 
                transforming spaces across the city with innovative design solutions. 
                We specialize in creating elegant, functional, and contemporary interiors 
                that reflect the modern lifestyle of Pune residents.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Our philosophy is simple: every space tells a story. Located near 
                Kirloskar Brother Ltd in Baner, we combine creativity, local expertise, 
                and sustainability to make sure your story is timeless and inspiring.
              </p>
            </div>
            <div className="relative h-96 lg:h-[500px] animate-scale-in">
              <Image
                src="/about.jpeg"
                alt="DcInteriors studio in Baner Pune"
                fill
                className="object-cover rounded-lg shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div
                key={stat.label}
                className="text-center animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="w-16 h-16 mx-auto mb-4 bg-primary/10 rounded-full flex items-center justify-center">
                  <stat.icon className="h-8 w-8 text-primary" />
                </div>
                <div className="text-3xl font-bold text-foreground mb-2">
                  {stat.value}
                </div>
                <div className="text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20 bg-gradient-to-b from-secondary/30 to-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center animate-slide-up">
            <h2 className="mb-8">Our Vision</h2>
            <p className="text-xl text-muted-foreground leading-relaxed mb-8">
              To craft inspiring spaces that enrich lifestyles and empower
              communities. At ModernSpace, we believe design is more than 
              aesthetics—it’s about impact, sustainability, and lasting value.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
              <Card className="bg-card/50 backdrop-blur-sm border-border/50">
                <CardContent className="p-6 text-center">
                  <h3 className="text-xl font-semibold mb-3">Creativity</h3>
                  <p className="text-muted-foreground">
                    Designing bold, unique, and functional concepts tailored to you.
                  </p>
                </CardContent>
              </Card>
              <Card className="bg-card/50 backdrop-blur-sm border-border/50">
                <CardContent className="p-6 text-center">
                  <h3 className="text-xl font-semibold mb-3">Sustainability</h3>
                  <p className="text-muted-foreground">
                    Using eco-conscious practices and materials for long-term impact.
                  </p>
                </CardContent>
              </Card>
              <Card className="bg-card/50 backdrop-blur-sm border-border/50">
                <CardContent className="p-6 text-center">
                  <h3 className="text-xl font-semibold mb-3">Excellence</h3>
                  <p className="text-muted-foreground">
                    Delivering with precision, passion, and uncompromising quality.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-slide-up">
            <h2 className="mb-4">Meet the Team</h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Our passionate professionals bring creativity, strategy, and heart 
              into every project, ensuring each space is extraordinary.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <Card
                key={member.name}
                className="overflow-hidden hover:shadow-lg transition-shadow duration-300 animate-fade-in"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className="relative h-64">
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-1">{member.name}</h3>
                  <p className="text-primary font-medium mb-3">{member.role}</p>
                  <p className="text-muted-foreground text-sm">{member.bio}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
