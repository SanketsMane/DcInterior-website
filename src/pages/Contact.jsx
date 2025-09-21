import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "../components/ui/card";
import { Button } from "../components/ui/button";
import { Input } from "../components/ui/input";
import { Textarea } from "../components/ui/textarea";
import { Label } from "../components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../components/ui/select";
import { MapPin, Phone, Mail, Clock, Send } from "lucide-react";
import SEOHead from "../components/SEOHead";

const contactInfo = [
  {
    icon: MapPin,
    title: "Visit Our Studio",
    details: ["Egale era Office no -102", "Near Kirloskar Brother Ltd", "Baner, Pune - 411045"],
  },
  {
    icon: Phone,
    title: "Call Us",
    details: ["+91 9975458787", "Mon-Fri: 9AM-6PM", "Sat: 10AM-3PM"],
  },
  {
    icon: Mail,
    title: "Email Us",
    details: [
      "designconcept.interior.dc@gmail.com",
      "Quick response guaranteed",
      "Free consultation available",
    ],
  },
  {
    icon: Clock,
    title: "Business Hours",
    details: [
      "Monday - Friday: 9AM - 6PM",
      "Saturday: 10AM - 3PM",
      "Sunday: By Appointment",
    ],
  },
];

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    message: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSelectChange = (value, name) => {
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // WhatsApp integration
    const message = `Hi DcInteriors! I'm interested in your services.%0A%0AName: ${formData.name}%0AEmail: ${formData.email}%0APhone: ${formData.phone}%0AService: ${formData.service}%0AMessage: ${formData.message}`;
    window.open(`https://wa.me/919975458787?text=${message}`, '_blank');
  };

  return (
    <div className="min-h-screen pt-16">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-primary/5 to-secondary/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="max-w-3xl mx-auto animate-slide-up">
            <h1 className="mb-6">Contact DcInteriors</h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Ready to transform your space in Pune Baner? Contact Design Concept Interiors today for a free consultation and let's bring your interior design dreams to life.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div className="animate-slide-up">
              <Card className="shadow-lg border-border/50">
                <CardHeader>
                  <CardTitle className="text-2xl">Send Us a Message</CardTitle>
                  <p className="text-muted-foreground">
                    Fill out the form below and we'll get back to you within 1–2
                    business days or connect instantly via WhatsApp.
                  </p>
                </CardHeader>
                <CardContent className="space-y-6">
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="name">Full Name *</Label>
                        <Input
                          id="name"
                          name="name"
                          value={formData.name}
                          onChange={handleInputChange}
                          placeholder="Your full name"
                          required
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="email">Email Address *</Label>
                        <Input
                          id="email"
                          name="email"
                          type="email"
                          value={formData.email}
                          onChange={handleInputChange}
                          placeholder="your@email.com"
                          required
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="phone">Phone Number</Label>
                      <Input
                        id="phone"
                        name="phone"
                        type="tel"
                        value={formData.phone}
                        onChange={handleInputChange}
                        placeholder="+91 98765 43210"
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="service">Service Type</Label>
                      <Select
                        onValueChange={(value) =>
                          handleSelectChange(value, "service")
                        }
                      >
                        <SelectTrigger>
                          <SelectValue placeholder="Select a service" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="residential">
                            Residential Design
                          </SelectItem>
                          <SelectItem value="commercial">
                            Commercial Design
                          </SelectItem>
                          <SelectItem value="consultation">
                            Design Consultation
                          </SelectItem>
                          <SelectItem value="planning">
                            Space Planning
                          </SelectItem>
                          <SelectItem value="renovation">
                            Home Renovation
                          </SelectItem>
                          <SelectItem value="other">Other</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="message">Project Details *</Label>
                      <Textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleInputChange}
                        placeholder="Tell us about your project, timeline, and any specific requirements..."
                        rows={6}
                        required
                      />
                    </div>

                    <Button
                      type="submit"
                      size="lg"
                      className="w-full bg-primary hover:bg-primary/90"
                    >
                      <Send className="h-4 w-4 mr-2" />
                      Send via WhatsApp
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>

            {/* Contact Information */}
            <div className="space-y-8 animate-fade-in">
              <div>
                <h2 className="text-3xl font-semibold mb-6">
                  Contact Information
                </h2>
                <p className="text-muted-foreground text-lg leading-relaxed">
                  Whether you're planning a new home, office, or renovation in Pune Baner,
                  we're here to help. Reach out via phone, email, or visit us at
                  our Baner studio for a consultation.
                </p>
              </div>

              <div className="space-y-6">
                {contactInfo.map((info) => (
                  <Card
                    key={info.title}
                    className="bg-card/50 backdrop-blur-sm border-border/50"
                  >
                    <CardContent className="p-6">
                      <div className="flex items-start space-x-4">
                        <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                          <info.icon className="h-6 w-6 text-primary" />
                        </div>
                        <div>
                          <h3 className="font-semibold mb-2">{info.title}</h3>
                          {info.details.map((detail, index) => (
                            <p
                              key={index}
                              className="text-muted-foreground text-sm"
                            >
                              {detail}
                            </p>
                          ))}
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>

              {/* Map Placeholder */}
              <Card className="overflow-hidden">
                <CardContent className="p-0">
                  <div className="h-64 bg-gradient-to-br from-primary/10 to-secondary/20 flex items-center justify-center">
                    <div className="text-center">
                      <MapPin className="h-12 w-12 text-primary mx-auto mb-2" />
                      <p className="text-muted-foreground">We're located in Baner</p>
                      <p className="text-sm text-muted-foreground">
                        Near Kirloskar Brother Ltd, Pune
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
