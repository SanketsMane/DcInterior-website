import { useState } from "react";
import { Link } from "react-router-dom";
import { ExternalLink, Calendar, Home, Building, Palette, Eye } from "lucide-react";

import { Card, CardContent } from "../components/ui/card";
import { Badge } from "../components/ui/badge";
import { Button } from "../components/ui/button";
import SEOHead from "../components/SEOHead";
import SafeImage from "../components/SafeImage";

const projects = [
  {
    id: 1,
    title: "Elegant Villa",
    category: "Residential",
    tags: ["Luxury", "Modern", "Spacious"],
    image: "/project1.jpeg",
    description:
      "A luxury villa blending modern architecture with timeless elegance, featuring open spaces and premium interiors.",
    year: "2024",
    duration: "6 months",
  },
  {
    id: 2,
    title: "Smart Apartment",
    category: "Residential",
    tags: ["Minimalist", "Tech-Enabled", "Urban"],
    image: "/project2.jpeg",
    description:
      "A contemporary city apartment with smart home automation and space-optimized design for modern living.",
    year: "2024",
    duration: "4 months",
  },
  {
    id: 3,
    title: "Corporate HQ",
    category: "Commercial",
    tags: ["Professional", "Modern", "Productive"],
    image: "/project3.jpeg",
    description:
      "State-of-the-art headquarters designed to encourage collaboration and productivity with modern aesthetics.",
    year: "2024",
    duration: "5 months",
  },
  {
    id: 4,
    title: "Fine Dining Restaurant",
    category: "Commercial",
    tags: ["Hospitality", "Luxury", "Cozy"],
    image: "/project4.jpeg",
    description:
      "An upscale dining experience featuring warm ambiance, elegant seating, and a stylish atmosphere.",
    year: "2023",
    duration: "3 months",
  },
  {
    id: 5,
    title: "Seaside Retreat",
    category: "Residential",
    tags: ["Coastal", "Relaxed", "Natural"],
    image: "/project5.jpeg",
    description:
      "A tranquil beach house designed with natural materials and open layouts to embrace ocean views.",
    year: "2023",
    duration: "4 months",
  },
  {
    id: 6,
    title: "Art Exhibition Hall",
    category: "Commercial",
    tags: ["Gallery", "Minimalist", "Art"],
    image: "/project6.jpeg",
    description:
      "A minimalist gallery space carefully curated to highlight artworks while providing a calm viewing environment.",
    year: "2023",
    duration: "2 months",
  },
];

const categories = ["All", "Residential", "Commercial"];

export default function PortfolioPage() {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredProjects =
    selectedCategory === "All"
      ? projects
      : projects.filter((p) => p.category === selectedCategory);

  return (
    <div className="min-h-screen pt-16">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-primary/5 to-secondary/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="max-w-3xl mx-auto animate-slide-up">
            <h1 className="mb-6">Our Portfolio</h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Discover a selection of our featured projects, each designed with
              precision, creativity, and a deep understanding of our clients&apos;
              needs.
            </p>
          </div>
        </div>
      </section>

      {/* Filter Section */}
      <section className="py-8 border-b border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap gap-4 justify-center">
            {categories.map((category) => (
              <Button
                key={category}
                onClick={() => setSelectedCategory(category)}
                variant={selectedCategory === category ? "default" : "outline"}
                className="transition-all duration-200"
              >
                {category}
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project, index) => (
              <Card
                key={project.id}
                className="group overflow-hidden hover:shadow-xl transition-all duration-500 border-border/50 animate-scale-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="relative h-64 overflow-hidden">
                  <SafeImage
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <Button
                      variant="secondary"
                      size="sm"
                      className="flex items-center space-x-2"
                    >
                      <Eye className="h-4 w-4" />
                      <span>View Project</span>
                    </Button>
                  </div>
                  <div className="absolute top-4 left-4">
                    <Badge
                      variant="secondary"
                      className="bg-primary text-primary-foreground"
                    >
                      {project.category}
                    </Badge>
                  </div>
                </div>

                <CardContent className="p-6 space-y-4">
                  <div>
                    <h3 className="text-xl font-semibold mb-2">
                      {project.title}
                    </h3>
                    <p className="text-muted-foreground text-sm">
                      {project.description}
                    </p>
                  </div>

                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <Badge key={tag} variant="outline" className="text-xs">
                        {tag}
                      </Badge>
                    ))}
                  </div>

                  <div className="flex items-center justify-between pt-2 border-t border-border">
                    <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                      <Calendar className="h-4 w-4" />
                      <span>{project.year}</span>
                    </div>
                    <span className="text-sm text-muted-foreground">
                      {project.duration}
                    </span>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-b from-secondary/30 to-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center animate-slide-up">
            <h2 className="mb-6">Inspired by Our Work?</h2>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              Let’s turn your vision into reality. Contact us today and begin
              your journey toward a beautifully designed space.
            </p>
            <Button
              asChild
              size="lg"
              className="bg-primary hover:bg-primary/90"
            >
              <a href="/contact">Start Your Project</a>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
