import { Link } from "react-router-dom";
import {
  Home,
  Phone,
  Mail,
  MapPin,
  Facebook,
  Instagram,
  Twitter,
} from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-secondary/50 border-t border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Branding & Social */}
          <div className="space-y-4">
            <Link to="/" className="flex items-center space-x-2">
              <Home className="h-8 w-8 text-primary" />
              <span className="text-xl font-bold text-foreground">
                DcInteriors
              </span>
            </Link>
            <p className="text-muted-foreground text-sm">
              Design Concept Interiors - Pune Baner's trusted interior design experts. Transforming spaces with creativity and precision.
            </p>
            <div className="flex space-x-4">
              <a 
                href="https://www.instagram.com/designconceptinteriors8787/" 
                target="_blank" 
                rel="noopener noreferrer"
                aria-label="Follow us on Instagram"
              >
                <Instagram className="h-5 w-5 text-muted-foreground hover:text-primary cursor-pointer transition-colors" />
              </a>
              <Facebook className="h-5 w-5 text-muted-foreground hover:text-primary cursor-pointer transition-colors" />
              <Twitter className="h-5 w-5 text-muted-foreground hover:text-primary cursor-pointer transition-colors" />
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Quick Links</h3>
            <nav className="flex flex-col space-y-2">
              <Link
                to="/about"
                className="text-muted-foreground hover:text-primary transition-colors text-sm"
              >
                About Us
              </Link>
              <Link
                to="/services"
                className="text-muted-foreground hover:text-primary transition-colors text-sm"
              >
                Our Services
              </Link>
              <Link
                to="/portfolio"
                className="text-muted-foreground hover:text-primary transition-colors text-sm"
              >
                Portfolio
              </Link>
              <Link
                to="/contact"
                className="text-muted-foreground hover:text-primary transition-colors text-sm"
              >
                Contact
              </Link>
            </nav>
          </div>

          {/* Services */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Services</h3>
            <nav className="flex flex-col space-y-2">
              <span className="text-muted-foreground text-sm">
                Residential Interiors
              </span>
              <span className="text-muted-foreground text-sm">
                Commercial Interiors
              </span>
              <span className="text-muted-foreground text-sm">
                Space Planning
              </span>
              <span className="text-muted-foreground text-sm">
                Color & Lighting Consultation
              </span>
            </nav>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Contact Info</h3>
            <div className="space-y-2">
              <div className="flex items-start space-x-2">
                <MapPin className="h-4 w-4 text-primary mt-1 flex-shrink-0" />
                <span className="text-muted-foreground text-sm">
                  Egale era Office no -102 near kirloskar brother ltd, Baner, Pune - 411045
                </span>
              </div>
              <div className="flex items-center space-x-2">
                <Phone className="h-4 w-4 text-primary" />
                <a 
                  href="tel:+919975458787" 
                  className="text-muted-foreground text-sm hover:text-primary transition-colors"
                >
                  +91 9975458787
                </a>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="h-4 w-4 text-primary" />
                <a 
                  href="mailto:designconcept.interior.dc@gmail.com" 
                  className="text-muted-foreground text-sm hover:text-primary transition-colors"
                >
                  designconcept.interior.dc@gmail.com
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-8 pt-8 border-t border-border">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-muted-foreground text-sm">
              © 2025 Design Concept Interiors (DcInteriors). All rights reserved.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <Link
                to="#"
                className="text-muted-foreground hover:text-primary text-sm transition-colors"
              >
                Privacy Policy
              </Link>
              <Link
                to="#"
                className="text-muted-foreground hover:text-primary text-sm transition-colors"
              >
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}