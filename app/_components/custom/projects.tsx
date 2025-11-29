"use client";

import { useState, useEffect, useRef } from "react";
import { Button } from "@/app/_components/ui/button";
import { ExternalLink, Github, ArrowRight } from "lucide-react";
import Image from "next/image";
import { cn } from "@/app/_lib/utils";

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
      title: "The Wild Oasis",
      description:
        "A customer-facing website that allows guests to explore information about the hotel and cabins, check availability, make and manage reservations, and maintain a personal profile.",
      image: "/images/projects/the-wild-oasis.png",
      technologies: [
        "Next.js",
        "React",
        "Supabase",
        "Context API",
        "Tailwind CSS",
      ],
      category: "fullstack",
      features: [
        "Guests can view details and availability of cabins.",
        "Users can create accounts, sign in, and manage profiles.",
        "Authentication and authorization using NextAuth.js and Supabase.",
        "Guests can make, update, or delete cabin reservations.",
        "Filter cabins by capacity and view past or upcoming bookings.",
      ],
      liveUrl: "https://the-wild-oasis-website.vercel.app/",
      githubUrl: "https://github.com/Tejas19Tejam/the-wild-oasis",
      status: "Completed",
    },
    {
      id: 2,
      title: "Natours (Learning)",
      description:
        "A full-stack tour-booking platform that lets users explore top-rated destinations, view detailed tour information, and securely book adventures online. The application features seamless payments powered by Stripe, dynamic server-rendered pages using Pug templates, and a robust backend built with Node.js, Express, and MongoDB for efficient data handling.",
      image: "/images/projects/natours.jpeg",
      technologies: [
        "Node.js",
        "Express",
        "Pug Templates",
        "Stripe API",
        "HTML/CSS",
        "MongoDB",
      ],
      category: "fullstack",
      features: [
        "Browse top-rated tours with detailed information, pricing, and ratings.",
        "Secure online booking system enabling users to reserve tours seamlessly.",
        "Integrated Stripe payment gateway for safe, fast, and reliable transactions.",
        "Responsive UI built with Pug templates, optimized for performance and accessibility.",
        "Dynamic tour management powered by Node.js, Express, and MongoDB.",
        "User authentication.",
      ],
      liveUrl: "https://natours.dev/",
      githubUrl: "https://github.com/Tejas19Tejam/natours",
      status: "Completed",
    },
    {
      id: 3,
      title: "AI-Powered Task Management Application",
      description:
        "A smart and intuitive task management system that helps users plan, track, and complete their daily, weekly, and monthly tasks. The application provides intelligent insights, performance analytics, and personalized productivity plans powered by AI.",
      image: "",
      technologies: [
        "React",
        "Nodejs",
        "PostgresQL",
        "Prisma",
        "TailwindCSS",
        "Zod",
      ],
      category: "fullstack",
      features: [
        "Create and manage daily, weekly, and monthly tasks with a clean and structured UI.",
        "Smart notification system that reminds users of upcoming or pending tasks.",
        "AI-powered productivity insights that analyze task completion patterns.",
        "AI-generated personalized plans to help users manage time and complete tasks efficiently.",
        "Advanced validation using Zod for reliable and error-free form handling.",
        "Dashboard with visual analytics to track performance trends over time.",
        "Support for task categories, priorities, and progress tracking.",
        "Optional suggestions to break large tasks into manageable subtasks.",
      ],
      liveUrl: "",
      githubUrl: "",
      status: "In Progress",
    },
    {
      id: 4,
      title: "UsePopcorn (Learning)",
      description:
        "A lightweight front-end movie discovery application built while learning the useEffect and component interaction patterns in . The app allows users to search for movies, view detailed information including  ratings, and create a personalized watchlist with custom user ratings.",
      image: "/images/projects/use-popcorns.jpeg",
      technologies: ["React", "HTML", "CSS", "Fetch API", "OMDb API"],
      category: "frontend",
      features: [
        "Search movies in real time using the OMDb API.",
        "View detailed movie information including plot, poster, actors, and IMDb rating.",
        "Rate movies manually based on personal preference.",
        "Add movies to a persistent watchlist for later viewing.",
        "Automatically track and display the total number of movies added.",
        "Built to understand React's useEffect, state management, and component communication.",
      ],
      liveUrl: "https://ltpopcorn.vercel.app/",
      githubUrl: "https://github.com/Tejas19Tejam/react-usepopcorns",
      status: "Completed",
    },
    {
      id: 5,
      title: "MapTy (Learning)",
      description:
        "A front-end workout tracking application built while learning core concepts of vanilla JavaScript, including DOM manipulation and event-driven architecture. The app allows users to log running and cycling workouts directly on an interactive map powered by , and stores all entries locally for persistent access.",
      image: "/images/projects/mapty.png",
      technologies: [
        "HTML",
        "CSS",
        "JavaScript",
        "Leaflet API",
        "LocalStorage",
      ],
      category: "frontend",
      features: [
        "Log running and cycling workouts by selecting a location on the map.",
        "Automatically record workout details such as distance, duration, pace (min/km), and speed (km/h).",
        "Render each workout visually on the map with custom markers.",
        "Display detailed workout entries in a structured list view.",
        "Persist all workouts using LocalStorage to maintain data even after page reloads.",
        "Built to understand vanilla JavaScript, DOM manipulation, geolocation, and map rendering.",
      ],
      liveUrl: "https://mapty-app-tejas.netlify.app/",
      githubUrl: "https://github.com/Tejas19Tejam/mapty-app",
      status: "Completed",
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
                <div className="w-full h-50 bg-gradient-to-r from-blue-500 to-purple-600 flex items-center justify-center">
                  {project.image ? (
                    <Image
                      src={project.image}
                      alt="The Wild Oasis Image"
                      fill
                    />
                  ) : (
                    <span className="text-white text-6xl font-bold opacity-20">
                      {project.title.charAt(0)}
                    </span>
                  )}
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
                    disabled={!project.liveUrl}
                    className={cn(
                      project.liveUrl
                        ? ""
                        : "flex-1 disabled:cursor-not-allowed",

                      "flex items-center justify-center gap-2"
                    )}
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
                window.open("https://github.com/Tejas19Tejam", "_blank")
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
