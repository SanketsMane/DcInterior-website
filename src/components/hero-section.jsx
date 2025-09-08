import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles } from "lucide-react";

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/hero-bg.jpeg"
          alt="Luxury interior design"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/40" />
      </div>

      {/* Hero Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="animate-fade-in">
          <div className="flex items-center justify-center space-x-2 mb-6">
            <Sparkles className="h-6 w-6 text-accent" />
            <span className="text-accent font-medium">
              Premium Interior Design by DcInteriors - Pune Baner
            </span>
          </div>

          <h1 className="text-white mb-6 max-w-4xl mx-auto">
            Transform Your Space with Pune's
            <span className="text-accent block">Premier Interior Designers</span>
          </h1>

          <p className="text-xl text-gray-200 mb-8 max-w-2xl mx-auto leading-relaxed">
            Design Concept Interiors brings your vision to life in Pune Baner. We specialize in creating stunning residential and commercial spaces that blend functionality with aesthetic excellence.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button
              asChild
              size="lg"
              className="bg-primary hover:bg-primary/90 text-white"
            >
              <Link href="/portfolio" className="flex items-center space-x-2">
                <span>View Our Pune Projects</span>
                <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="border-white hover:bg-white hover:text-black"
            >
              <Link href="/contact">Free Consultation in Baner</Link>
            </Button>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/50 rounded-full mt-2"></div>
        </div>
      </div>
    </section>
  );
}
