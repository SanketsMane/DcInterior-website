import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../components/ui/card";
import { Button } from "../components/ui/button";
import { Badge } from "../components/ui/badge";
import { CheckCircle, Home, Palette, Lightbulb, Building, Sofa, TreePine } from "lucide-react";
import SEOHead from "../components/SEOHead";
import { useEffect } from "react";

// Set page title and meta tags programmatically
const usePageMeta = () => {
  useEffect(() => {
    document.title = 'Interior Design Services - Design Concept Interiors | Pune Baner';
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Professional interior design services in Pune Baner. Residential, commercial, and office space design by Design Concept Interiors. Get expert consultation today.');
    }
  }, []);
};

const services = [
  {
    icon: Home,
    title: "Residential Interior Design",
    description: "Transform your home into a personalized sanctuary with our comprehensive residential design services.",
    features: [
      "Complete home makeovers",
      "Room-specific designs",
      "Space optimization",
      "Furniture selection",
      "Color consultation"
    ],
    category: "Residential"
  },
  {
    icon: Building,
    title: "Commercial Interior Design",
    description: "Create inspiring workspaces that boost productivity and reflect your brand identity.",
    features: [
      "Office space planning",
      "Reception area design",
      "Conference room setup",
      "Retail space design",
      "Brand integration"
    ],
    category: "Commercial"
  },
  {
    icon: Palette,
    title: "Modular Kitchen Design",
    description: "Design functional and beautiful kitchens that make cooking a delightful experience.",
    features: [
      "Custom cabinet design",
      "Appliance integration",
      "Storage optimization",
      "Island & peninsula layouts",
      "Material selection"
    ],
    category: "Specialized"
  },
  {
    icon: Sofa,
    title: "Living Room Design",
    description: "Create welcoming living spaces perfect for relaxation and entertainment.",
    features: [
      "Seating arrangement",
      "Entertainment unit design",
      "Lighting solutions",
      "Decor accessories",
      "Traffic flow optimization"
    ],
    category: "Residential"
  },
  {
    icon: TreePine,
    title: "Bedroom Design",
    description: "Design peaceful and comfortable bedrooms for restful sleep and relaxation.",
    features: [
      "Wardrobe design",
      "Bed & furniture selection",
      "Ambient lighting",
      "Storage solutions",
      "Privacy considerations"
    ],
    category: "Residential"
  },
  {
    icon: Lightbulb,
    title: "Consultation & Planning",
    description: "Expert advice and detailed planning to bring your vision to life efficiently.",
    features: [
      "Design consultation",
      "Space planning",
      "3D visualization",
      "Material guidance",
      "Project timeline"
    ],
    category: "Consultation"
  }
]

const processSteps = [
  {
    step: "01",
    title: "Initial Consultation",
    description: "We discuss your vision, requirements, and budget to understand your needs."
  },
  {
    step: "02",
    title: "Concept Development",
    description: "Our team creates initial design concepts and mood boards for your approval."
  },
  {
    step: "03",
    title: "3D Visualization",
    description: "See your space come to life with detailed 3D renderings and virtual tours."
  },
  {
    step: "04",
    title: "Material Selection",
    description: "Choose from premium materials, finishes, and furnishings that fit your style."
  },
  {
    step: "05",
    title: "Project Execution",
    description: "Our skilled craftsmen bring the design to life with attention to every detail."
  },
  {
    step: "06",
    title: "Final Styling",
    description: "We add the finishing touches to create your perfect space."
  }
]

const handleWhatsAppClick = (serviceName) => {
  const message = `Hi, I'm interested in ${serviceName} services. Please provide more details.`
  const whatsappUrl = `https://wa.me/919975458787?text=${encodeURIComponent(message)}`
  window.open(whatsappUrl, '_blank')
}

const handleConsultationClick = () => {
  const message = "Hi, I would like to schedule a free consultation for my interior design project."
  const whatsappUrl = `https://wa.me/919975458787?text=${encodeURIComponent(message)}`
  window.open(whatsappUrl, '_blank')
}

export default function ServicesPage() {
  usePageMeta();

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-gray-50 to-gray-100 py-16">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Our Interior Design Services
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              Transform your space with Design Concept Interiors - Pune Baner's premier interior design studio. 
              We create beautiful, functional spaces that reflect your personality and lifestyle.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Badge variant="secondary" className="px-4 py-2 text-lg">Pune Baner</Badge>
              <Badge variant="secondary" className="px-4 py-2 text-lg">Professional Design</Badge>
              <Badge variant="secondary" className="px-4 py-2 text-lg">Custom Solutions</Badge>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              What We Offer
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              From residential homes to commercial spaces, we provide comprehensive interior design services 
              tailored to your needs and budget.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="h-full hover:shadow-lg transition-shadow duration-300">
                <CardHeader>
                  <div className="flex items-center space-x-4 mb-4">
                    <div className="p-3 bg-blue-100 rounded-lg">
                      <service.icon className="h-6 w-6 text-blue-600" />
                    </div>
                    <Badge variant="outline">{service.category}</Badge>
                  </div>
                  <CardTitle className="text-xl">{service.title}</CardTitle>
                  <CardDescription className="text-gray-600">
                    {service.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3 mb-6">
                    {service.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center space-x-2">
                        <CheckCircle className="h-4 w-4 text-green-500 flex-shrink-0" />
                        <span className="text-sm text-gray-700">{feature}</span>
                      </div>
                    ))}
                  </div>
                  <Button 
                    className="w-full"
                    onClick={() => handleWhatsAppClick(service.title)}
                  >
                    Get Quote
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Our Process */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Design Process
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              We follow a systematic approach to ensure your project is completed on time, 
              within budget, and exceeds your expectations.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {processSteps.map((step, index) => (
              <div key={index} className="relative">
                <div className="bg-white rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow duration-300">
                  <div className="text-4xl font-bold text-blue-600 mb-4">{step.step}</div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">{step.title}</h3>
                  <p className="text-gray-600">{step.description}</p>
                </div>
                {index < processSteps.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-4 transform -translate-y-1/2">
                    <div className="w-8 h-0.5 bg-blue-300"></div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-blue-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Transform Your Space?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Let's discuss your project and create a space that truly reflects your vision. 
            Contact Design Concept Interiors today for a free consultation.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg" 
              variant="secondary"
              className="text-blue-600 hover:text-blue-700"
              onClick={handleConsultationClick}
            >
              Free Consultation
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="border-white text-white hover:bg-white hover:text-blue-600"
              onClick={() => window.location.href = '/contact'}
            >
              Contact Us
            </Button>
          </div>
          <div className="mt-8 text-center">
            <p className="text-blue-100">📱 WhatsApp: +91 9975458787</p>
            <p className="text-blue-100">📧 designconcept.interior.dc@gmail.com</p>
            <p className="text-blue-100">📍 Serving Pune Baner & surrounding areas</p>
          </div>
        </div>
      </section>
    </div>
  )
}