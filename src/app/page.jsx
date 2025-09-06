import HeroSection from "@/components/hero-section";
import ServicesOverview from "@/components/services-overview";
import FeaturedProjects from "@/components/featured-projects";
import TestimonialsSection from "@/components/testimonials-section";
import CallToAction from "@/components/call-to-action";

export default function Home() {
  return (
    <div className="min-h-screen">
      <HeroSection />
      <ServicesOverview />
      <FeaturedProjects />
      <TestimonialsSection />
      <CallToAction />
    </div>
  );
}
