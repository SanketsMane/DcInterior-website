import { Link } from "react-router-dom";
import { Button } from "./ui/button";
import { Phone, ArrowRight } from "lucide-react";

export default function CallToAction() {
  return (
    <section className="py-20 bg-primary text-primary-foreground">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="max-w-3xl mx-auto animate-slide-up">
          <h2 className="mb-6 text-white">Ready to Elevate Your Space?</h2>
          <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
            At Design Concept Interiors, we transform your vision into stunning,
            functional spaces. From concept to completion, every detail is
            crafted to perfection.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button
              asChild
              size="lg"
              variant="secondary"
              className="bg-white text-primary hover:bg-white/90"
            >
              <Link to="/contact" className="flex items-center space-x-2">
                <span>Start Your Project</span>
                <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
            <Button
              asChild
              size="lg"
              className="bg-[#6A9479] text-primary text-white hover:bg-white/90 hover:text-[#6A9479] border-2 border-white"
            >
              <Link
                to="tel:+15551234567"
                className="flex items-center space-x-2"
              >
                <Phone className="h-4 w-4" />
                <span>Call (555) 123-4567</span>
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}