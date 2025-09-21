import { Link } from "react-router-dom";
import { Card, CardContent } from "./ui/card";
import { Button } from "./ui/button";
import { ArrowRight } from "lucide-react";
import SafeImage from "./SafeImage";

const projects = [
  {
    id: 1,
    title: "Serene Minimalist Residence",
    category: "Residential",
    image: "/featured1.jpeg",
    description:
      "DcInteriors transformed this home with clean lines, natural textures, and a calming atmosphere.",
  },
  {
    id: 2,
    title: "Luxury City Penthouse",
    category: "Residential",
    image: "/featured2.jpeg",
    description:
      "Sophisticated design with breathtaking city views, premium finishes, and elegant interiors.",
  },
  {
    id: 3,
    title: "Innovative Corporate Office",
    category: "Commercial",
    image: "/featured3.jpeg",
    description:
      "A collaborative workspace crafted by DcInteriors to boost productivity and style.",
  },
];

export default function FeaturedProjects() {
  return (
    <section className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-slide-up">
          <h2 className="mb-4">Featured Projects by DcInteriors</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Explore some of our most recent, stylish interior design transformations crafted for our clients.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Card
              key={project.id}
              className="group overflow-hidden hover:shadow-xl transition-all duration-500 border-border/50 animate-scale-in"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="relative h-64 overflow-hidden">
                <SafeImage
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <Button variant="secondary" size="sm">
                    View Details
                  </Button>
                </div>
                <div className="absolute top-4 left-4">
                  <span className="bg-primary text-primary-foreground px-3 py-1 text-sm rounded-full">
                    {project.category}
                  </span>
                </div>
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                <p className="text-muted-foreground text-sm">
                  {project.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button asChild size="lg" className="bg-primary hover:bg-primary/90">
            <Link to="/portfolio" className="flex items-center space-x-2">
              <span>View All Projects</span>
              <ArrowRight className="h-4 w-4" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}