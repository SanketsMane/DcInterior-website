import HeroSection from "../components/hero-section";
import ServicesOverview from "../components/services-overview";
import FeaturedProjects from "../components/featured-projects";
import TestimonialsSection from "../components/testimonials-section";
import CallToAction from "../components/call-to-action";
import SEOHead from "../components/SEOHead";

export default function Home() {
  return (
    <div className="min-h-screen">
      <SEOHead 
        title="DcInteriors - Best Interior Designer in Pune Baner | Design Concept Interiors"
        description="Transform your space with Design Concept Interiors - Pune Baner's trusted interior design experts. Residential & commercial solutions. Located near Kirloskar Brother Ltd, Baner. Call 9975458787"
        keywords="DcInteriors, Design Concept Interiors, interior designer in Pune, interior designer in Baner, best interior designer Pune Baner, home interior design Pune, office interior design Baner"
      />
      <HeroSection />
      <ServicesOverview />
      <FeaturedProjects />
      <TestimonialsSection />
      <CallToAction />
    </div>
  );
}