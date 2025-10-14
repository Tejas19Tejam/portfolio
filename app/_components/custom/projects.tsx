"use client";

import { useState, useEffect, useRef } from "react";
import { Button } from "@/app/_components/ui/button";
import { ExternalLink, Github, ArrowRight } from "lucide-react";

function Projects() {
  const [isVisible, setIsVisible] = useState(false);
  const [activeFilter, setActiveFilter] = useState("all");
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const projects = [
    {
      id: 1,
      title: "E-Commerce Platform",
      description:
        "A full-stack e-commerce solution with advanced features including real-time inventory management, payment processing, and admin dashboard.",
      image: "/api/placeholder/600/400",
      technologies: ["Next.js", "Node.js", "MongoDB", "Stripe", "Tailwind CSS"],
      category: "fullstack",
      features: [
        "User authentication & authorization",
        "Product catalog with search & filtering",
        "Shopping cart & checkout process",
        "Payment gateway integration",
        "Admin dashboard for inventory management",
        "Real-time order tracking",
      ],
      liveUrl: "https://demo-ecommerce.com",
      githubUrl: "https://github.com/yourusername/ecommerce-platform",
      status: "Completed",
    },
    {
      id: 2,
      title: "Task Management App",
      description:
        "A collaborative project management tool with real-time updates, team collaboration features, and advanced analytics.",
      image: "/api/placeholder/600/400",
      technologies: [
        "React",
        "Django",
        "PostgreSQL",
        "WebSocket",
        "Material-UI",
      ],
      category: "fullstack",
      features: [
        "Real-time collaboration",
        "Drag & drop task management",
        "Team member assignment",
        "Progress tracking & analytics",
        "File attachments & comments",
        "Email notifications",
      ],
      liveUrl: "https://demo-taskmanager.com",
      githubUrl: "https://github.com/yourusername/task-manager",
      status: "Completed",
    },
    {
      id: 3,
      title: "Weather Dashboard",
      description:
        "A responsive weather application with location-based forecasts, interactive maps, and personalized weather alerts.",
      image: "/api/placeholder/600/400",
      technologies: ["React", "OpenWeather API", "Chart.js", "Tailwind CSS"],
      category: "frontend",
      features: [
        "Current weather conditions",
        "5-day weather forecast",
        "Interactive weather maps",
        "Location-based search",
        "Weather alerts & notifications",
        "Responsive design",
      ],
      liveUrl: "https://demo-weather.com",
      githubUrl: "https://github.com/yourusername/weather-dashboard",
      status: "Completed",
    },
    {
      id: 4,
      title: "Blog CMS Platform",
      description:
        "A headless CMS built with Sanity and Next.js, featuring rich text editing, media management, and SEO optimization.",
      image: "/api/placeholder/600/400",
      technologies: ["Next.js", "Sanity CMS", "Vercel", "TypeScript"],
      category: "frontend",
      features: [
        "Rich text editor",
        "Media library management",
        "SEO optimization",
        "Multi-author support",
        "Comment system",
        "Social media integration",
      ],
      liveUrl: "https://demo-blog.com",
      githubUrl: "https://github.com/yourusername/blog-cms",
      status: "Completed",
    },
    {
      id: 5,
      title: "API Gateway Service",
      description:
        "A microservices API gateway with authentication, rate limiting, load balancing, and comprehensive monitoring.",
      image: "/api/placeholder/600/400",
      technologies: ["Node.js", "Express", "Redis", "Docker", "MongoDB"],
      category: "backend",
      features: [
        "API rate limiting",
        "Authentication & authorization",
        "Load balancing",
        "Request/response logging",
        "Health monitoring",
        "API documentation",
      ],
      liveUrl: null,
      githubUrl: "https://github.com/yourusername/api-gateway",
      status: "Completed",
    },
    {
      id: 6,
      title: "Real-time Chat Application",
      description:
        "A modern chat application with real-time messaging, file sharing, and video call integration.",
      image: "/api/placeholder/600/400",
      technologies: ["React", "Socket.io", "Node.js", "WebRTC", "MongoDB"],
      category: "fullstack",
      features: [
        "Real-time messaging",
        "File & image sharing",
        "Video & voice calls",
        "Group chat rooms",
        "Message history",
        "Online status indicators",
      ],
      liveUrl: "https://demo-chat.com",
      githubUrl: "https://github.com/yourusername/chat-app",
      status: "In Progress",
    },
  ];

  const filters = [
    { id: "all", label: "All Projects" },
    { id: "fullstack", label: "Full Stack" },
    { id: "frontend", label: "Frontend" },
    { id: "backend", label: "Backend" },
  ];

  const filteredProjects =
    activeFilter === "all"
      ? projects
      : projects.filter((project) => project.category === activeFilter);

  return (
    <section id="projects" ref={sectionRef} className="py-20 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div
          className={`text-center mb-16 transition-all duration-1000 ${
            isVisible ? "animate-fadeInUp opacity-100" : "opacity-0"
          }`}
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-poppins font-bold mb-4">
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8">
            A showcase of my recent work, demonstrating various technologies and
            problem-solving approaches
          </p>

          {/* Filter Buttons */}
          <div className="flex flex-wrap justify-center gap-4">
            {filters.map((filter) => (
              <Button
                key={filter.id}
                variant={activeFilter === filter.id ? "default" : "outline"}
                onClick={() => setActiveFilter(filter.id)}
                className="rounded-full"
              >
                {filter.label}
              </Button>
            ))}
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <div
              key={project.id}
              className={`group bg-card rounded-lg border overflow-hidden hover:shadow-xl transition-all duration-500 transform hover:scale-105 ${
                isVisible ? "animate-fadeInUp opacity-100" : "opacity-0"
              }`}
              style={{ animationDelay: `${index * 200}ms` }}
            >
              {/* Project Image */}
              <div className="relative overflow-hidden">
                <div className="w-full h-48 bg-gradient-to-r from-blue-500 to-purple-600 flex items-center justify-center">
                  <span className="text-white text-6xl font-bold opacity-20">
                    {project.title.charAt(0)}
                  </span>
                </div>
                <div className="absolute top-4 right-4">
                  <span
                    className={`px-2 py-1 text-xs rounded-full ${
                      project.status === "Completed"
                        ? "bg-green-100 text-green-800"
                        : "bg-yellow-100 text-yellow-800"
                    }`}
                  >
                    {project.status}
                  </span>
                </div>
              </div>

              {/* Project Content */}
              <div className="p-6">
                <h3 className="text-xl font-poppins font-semibold mb-2 group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                <p className="text-muted-foreground text-sm mb-4 line-clamp-3">
                  {project.description}
                </p>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.slice(0, 3).map((tech) => (
                    <span
                      key={tech}
                      className="px-2 py-1 bg-primary/10 text-primary text-xs rounded-md"
                    >
                      {tech}
                    </span>
                  ))}
                  {project.technologies.length > 3 && (
                    <span className="px-2 py-1 bg-muted text-muted-foreground text-xs rounded-md">
                      +{project.technologies.length - 3} more
                    </span>
                  )}
                </div>

                {/* Key Features */}
                <div className="mb-6">
                  <h4 className="font-medium text-sm mb-2">Key Features:</h4>
                  <ul className="text-xs text-muted-foreground space-y-1">
                    {project.features.slice(0, 3).map((feature, i) => (
                      <li key={i} className="flex items-center gap-1">
                        <ArrowRight
                          size={12}
                          className="text-primary flex-shrink-0"
                        />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Action Buttons */}
                <div className="flex gap-3">
                  {project.liveUrl && (
                    <Button
                      size="sm"
                      className="flex-1 flex items-center justify-center gap-2"
                      onClick={() => window.open(project.liveUrl, "_blank")}
                    >
                      <ExternalLink size={14} />
                      Live Demo
                    </Button>
                  )}
                  <Button
                    size="sm"
                    variant="outline"
                    className={`${
                      project.liveUrl ? "" : "flex-1"
                    } flex items-center justify-center gap-2`}
                    onClick={() => window.open(project.githubUrl, "_blank")}
                  >
                    <Github size={14} />
                    Code
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div
          className={`text-center mt-16 transition-all duration-1000 delay-600 ${
            isVisible ? "animate-fadeInUp opacity-100" : "opacity-0"
          }`}
        >
          <div className="bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 p-8 rounded-lg">
            <h3 className="text-2xl font-poppins font-semibold mb-4">
              Want to see more?
            </h3>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
              These are just a few highlights from my portfolio. I have worked
              on many more projects across different domains and technologies.
              Check out my GitHub for the complete collection!
            </p>
            <Button
              size="lg"
              onClick={() =>
                window.open("https://github.com/yourusername", "_blank")
              }
              className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700"
            >
              <Github className="mr-2" size={20} />
              View All Projects
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Projects;
