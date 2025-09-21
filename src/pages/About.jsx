import { Card, CardContent } from "../components/ui/card";
import { Award, Users, Clock, Heart } from "lucide-react";
import SEOHead from "../components/SEOHead";
import SafeImage from "../components/SafeImage";

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


export default function AboutPage() {
  return (
    <div className="min-h-screen pt-16">
      <SEOHead 
        title="About DcInteriors - Leading Interior Designers in Pune Baner | Design Concept Interiors"
        description="Learn about Design Concept Interiors (DcInteriors) - Pune Baner's premier interior design company with 8+ years experience. 500+ happy clients, 50+ successful projects."
        keywords="about DcInteriors, interior design company Pune, Design Concept Interiors team, interior designers Baner, residential interior design, commercial interior design Pune"
      />
      
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-primary/5 to-secondary/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              About DcInteriors
            </h1>
            <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
              Design Concept Interiors (DcInteriors) has been transforming spaces in Pune Baner for over 8 years. 
              Located near Kirloskar Brother Ltd, we are your trusted partners for creating beautiful, functional interiors 
              that reflect your personality and lifestyle.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <div className="bg-white/80 backdrop-blur-sm px-6 py-3 rounded-full border border-primary/20">
                📍 Located in Baner, Pune
              </div>
              <div className="bg-white/80 backdrop-blur-sm px-6 py-3 rounded-full border border-primary/20">
                📞 9975458787
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center group">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-full mb-4 group-hover:bg-primary/20 transition-colors">
                  <stat.icon className="w-8 h-8 text-primary" />
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
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <SafeImage 
                src="/about.jpeg" 
                alt="DcInteriors team workspace in Baner, Pune"
                className="rounded-2xl shadow-2xl w-full h-auto hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Our Mission in Pune Baner
              </h2>
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                At DcInteriors, we believe that every space has the potential to inspire and transform lives. 
                Our mission is to create exceptional interior designs that combine functionality with aesthetics, 
                specifically tailored to Pune's lifestyle and architectural heritage.
              </p>
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                From our office near Kirloskar Brother Ltd in Baner, we serve residential and commercial clients 
                across Pune, bringing innovative design solutions that reflect both modern trends and timeless elegance.
              </p>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-primary rounded-full mt-3"></div>
                  <div>
                    <h3 className="font-semibold mb-1">Innovative Design Solutions</h3>
                    <p className="text-muted-foreground">Cutting-edge designs that blend modern aesthetics with practical functionality.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-primary rounded-full mt-3"></div>
                  <div>
                    <h3 className="font-semibold mb-1">Local Expertise</h3>
                    <p className="text-muted-foreground">Deep understanding of Pune's architectural style and climate considerations.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-primary rounded-full mt-3"></div>
                  <div>
                    <h3 className="font-semibold mb-1">Sustainable Practices</h3>
                    <p className="text-muted-foreground">Eco-friendly materials and energy-efficient design solutions for a better tomorrow.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>



      {/* Values Section */}
      <section className="py-20 bg-gradient-to-b from-secondary/30 to-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Our Core Values
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              These principles guide every project we undertake at DcInteriors, ensuring exceptional results and client satisfaction.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center group">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/20 transition-colors">
                <span className="text-2xl">🎨</span>
              </div>
              <h3 className="text-xl font-semibold mb-3">Creativity</h3>
              <p className="text-muted-foreground">Pushing boundaries with innovative design solutions that inspire and delight.</p>
            </div>
            
            <div className="text-center group">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/20 transition-colors">
                <span className="text-2xl">⭐</span>
              </div>
              <h3 className="text-xl font-semibold mb-3">Quality</h3>
              <p className="text-muted-foreground">Uncompromising commitment to excellence in every detail and finish.</p>
            </div>
            
            <div className="text-center group">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/20 transition-colors">
                <span className="text-2xl">🤝</span>
              </div>
              <h3 className="text-xl font-semibold mb-3">Partnership</h3>
              <p className="text-muted-foreground">Building lasting relationships with clients through trust and collaboration.</p>
            </div>
            
            <div className="text-center group">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/20 transition-colors">
                <span className="text-2xl">🌱</span>
              </div>
              <h3 className="text-xl font-semibold mb-3">Sustainability</h3>
              <p className="text-muted-foreground">Creating beautiful spaces while respecting our environment and future generations.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}