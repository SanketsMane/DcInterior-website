import { Link } from "react-router-dom";
import { Button } from "./ui/button";
import { ArrowRight, Sparkles, Star, Award } from "lucide-react";
import SafeImage from "./SafeImage";

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Parallax Effect */}
      <div className="absolute inset-0 z-0">
        <SafeImage
          src="/hero-bg.jpeg"
          alt="Luxury interior design showcase - Modern living space with elegant furniture and lighting"
          className="w-full h-full object-cover scale-105 transition-transform duration-700 ease-out"
          loading="eager"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-black/50 via-black/40 to-black/60" />
        
        {/* Animated gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-primary/20 via-transparent to-accent/20 animate-pulse opacity-30" />
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-20 left-10 w-20 h-20 border border-white/20 rounded-full animate-bounce opacity-60" />
      <div className="absolute bottom-32 right-16 w-16 h-16 border border-accent/30 rotate-45 animate-pulse opacity-40" />
      <div className="absolute top-1/2 right-8 w-2 h-2 bg-accent rounded-full animate-ping" />

      {/* Hero Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="max-w-5xl mx-auto space-y-8">
          {/* Trust Indicators */}
          <div className="flex items-center justify-center space-x-6 mb-8 animate-fade-in opacity-90">
            <div className="flex items-center space-x-2 text-accent">
              <Star className="h-5 w-5 fill-current" />
              <span className="text-sm font-medium text-white">4.9/5 Rating</span>
            </div>
            <div className="w-px h-4 bg-white/30" />
            <div className="flex items-center space-x-2 text-accent">
              <Award className="h-5 w-5" />
              <span className="text-sm font-medium text-white">500+ Projects</span>
            </div>
            <div className="w-px h-4 bg-white/30" />
            <div className="flex items-center space-x-2 text-accent">
              <Sparkles className="h-5 w-5" />
              <span className="text-sm font-medium text-white">Pune's Premier</span>
            </div>
          </div>

          {/* Main Heading */}
          <div className="space-y-6 animate-slide-up">
            <div className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-6 py-3 text-white">
              <Sparkles className="h-5 w-5 text-accent animate-pulse" />
              <span className="font-medium text-sm lg:text-base">
                Premium Interior Design Excellence in Pune Baner
              </span>
            </div>

            <h1 className="text-white font-serif leading-tight max-w-4xl mx-auto">
              <span className="block text-4xl lg:text-5xl font-bold mb-2">
                Transform Your Space into a
              </span>
              <span className="block text-5xl lg:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-accent via-yellow-300 to-accent animate-pulse">
                Masterpiece of Design
              </span>
            </h1>

            <p className="text-xl lg:text-2xl text-gray-200 mb-8 max-w-3xl mx-auto leading-relaxed font-light">
              Experience Pune's most trusted interior design studio. We create stunning, 
              functional spaces that reflect your personality and enhance your lifestyle in 
              <span className="text-accent font-medium"> Baner, Aundh, and beyond</span>.
            </p>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center animate-scale-in">
            <Button
              asChild
              size="lg"
              className="group bg-primary hover:bg-primary/90 text-white px-8 py-4 text-lg font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border-2 border-transparent hover:border-accent/30"
            >
              <Link to="/portfolio" className="flex items-center space-x-3">
                <span>Explore Our Pune Projects</span>
                <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform duration-200" />
              </Link>
            </Button>
            
            <Button
              asChild
              variant="outline"
              size="lg"
              className="group bg-accent/20 backdrop-blur-md border-2 border-accent hover:border-accent text-white hover:bg-accent hover:text-black px-8 py-4 text-lg font-semibold rounded-xl shadow-lg hover:shadow-accent/50 transition-all duration-300"
            >
              <Link to="/contact" className="flex items-center space-x-3">
                <span>Free Consultation in Baner</span>
                <div className="w-2 h-2 bg-green-400 rounded-full" />
              </Link>
            </Button>
          </div>

          {/* Social Proof */}
          <div className="mt-12 animate-fade-in">
            <p className="text-white/80 text-sm mb-4">Trusted by 500+ families across Pune</p>
            <div className="flex items-center justify-center space-x-8 opacity-70">
              <div className="text-center">
                <div className="text-2xl font-bold text-accent">500+</div>
                <div className="text-xs text-white/80">Happy Clients</div>
              </div>
              <div className="w-px h-8 bg-white/30" />
              <div className="text-center">
                <div className="text-2xl font-bold text-accent">8+</div>
                <div className="text-xs text-white/80">Years Experience</div>
              </div>
              <div className="w-px h-8 bg-white/30" />
              <div className="text-center">
                <div className="text-2xl font-bold text-accent">50+</div>
                <div className="text-xs text-white/80">Projects Delivered</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="flex flex-col items-center space-y-2 text-white/70">
          <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white/50 rounded-full mt-2 animate-bounce"></div>
          </div>
          <span className="text-xs font-medium">Scroll to explore</span>
        </div>
      </div>

      {/* Background Pattern */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-0 w-full h-full opacity-10">
          <div 
            className="w-full h-full"
            style={{
              backgroundImage: `radial-gradient(circle at 25% 25%, white 2px, transparent 2px)`,
              backgroundSize: '60px 60px'
            }}
          />
        </div>
      </div>
    </section>
  );
}