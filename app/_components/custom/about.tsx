"use client";

import { useState, useEffect, useRef } from "react";
import { Code2, Database, Palette, Server, Globe, Zap } from "lucide-react";

const aboutSectionData = {
  role: "Full Stack Developer",
  experience: "3+",
};

function About() {
  const [isVisible, setIsVisible] = useState(false);
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

  const techStack = [
    { name: "React", icon: "⚛️", category: "Frontend" },
    { name: "Next.js", icon: "🔺", category: "Frontend" },
    { name: "JavaScript", icon: "🟨", category: "Frontend" },
    { name: "Tailwind CSS", icon: "🎨", category: "Frontend" },
    { name: "Node.js", icon: "🟢", category: "Backend" },
    { name: "Django", icon: "🐍", category: "Backend" },
    { name: "MongoDB", icon: "🍃", category: "Database" },
    { name: "Supabase", icon: "🟢", category: "Database" },
    { name: "Figma", icon: "🎯", category: "Design" },
    { name: "Sanity CMS", icon: "📝", category: "CMS" },
  ];

  const highlights = [
    {
      icon: <Code2 className="w-8 h-8 text-blue-500" />,
      title: "Frontend Excellence",
      description:
        "Crafting responsive, accessible, and performant user interfaces with React and Next.js",
    },
    {
      icon: <Server className="w-8 h-8 text-green-500" />,
      title: "Backend Mastery",
      description:
        "Building robust APIs and server-side solutions with Node.js and Django",
    },
    {
      icon: <Database className="w-8 h-8 text-purple-500" />,
      title: "Database Design",
      description:
        "Designing efficient database schemas and optimizing queries for scalability",
    },
    {
      icon: <Globe className="w-8 h-8 text-orange-500" />,
      title: "Full Stack Integration",
      description:
        "Seamlessly connecting frontend and backend systems for complete solutions",
    },
    {
      icon: <Zap className="w-8 h-8 text-yellow-500" />,
      title: "Performance Focus",
      description:
        "Optimizing applications for speed, SEO, and exceptional user experience",
    },
    {
      icon: <Palette className="w-8 h-8 text-pink-500" />,
      title: "Design-Driven Development",
      description:
        "Translating designs into pixel-perfect, interactive web experiences",
    },
  ];

  return (
    <section id="about" ref={sectionRef} className="py-20 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div
          className={`text-center mb-16 transition-all duration-1000 ${
            isVisible ? "animate-fadeInUp opacity-100" : "opacity-0"
          }`}
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-poppins font-bold mb-4">
            About <span className="gradient-text">Me</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Passionate developer with a love for creating innovative solutions
            and learning new technologies
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left side - About content */}
          <div
            className={`transition-all duration-1000 delay-200 ${
              isVisible ? "animate-fadeInLeft opacity-100" : "opacity-0"
            }`}
          >
            <div className="space-y-6">
              <div>
                <h3 className="text-2xl font-poppins font-semibold mb-4">
                  Full Stack Developer
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  With{" "}
                  <span className="font-semibold text-primary">
                    2+ years of experience
                  </span>{" "}
                  in full-stack development, I specialize in building modern,
                  scalable web applications. My journey began with a passion for
                  problem-solving and has evolved into expertise across the
                  entire development lifecycle.
                </p>
              </div>

              <div>
                <p className="text-muted-foreground leading-relaxed">
                  I thrive on transforming complex requirements into elegant,
                  user-friendly solutions. From crafting intuitive frontends
                  with React (TypeScript) and Next.js to building robust
                  backends with Node.js, I bring a holistic approach to every
                  project.
                </p>
              </div>

              <div className="bg-card p-6 rounded-lg border">
                <h4 className="font-semibold mb-3 flex items-center gap-2">
                  <Zap className="w-5 h-5 text-yellow-500" />
                  What I Bring to Your Project
                </h4>
                <ul className="space-y-2 text-muted-foreground">
                  <li>• Clean, maintainable code following best practices</li>
                  <li>• Responsive design that works on all devices</li>
                  <li>• Performance optimization and SEO implementation</li>
                  <li>• Collaborative approach with strong communication</li>
                  <li>
                    • Continuous learning and adaptation to new technologies
                  </li>
                </ul>
              </div>

              <div className="bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 p-6 rounded-lg">
                <h4 className="font-semibold mb-2">Fun Fact</h4>
                <p className="text-muted-foreground">
                  When I&apos;m not coding, you&apos;ll find me listening to
                  music, reading about emerging technologies. I believe great
                  software is built by passionate people! 🎶
                </p>
              </div>
            </div>
          </div>

          {/* Right side - Skills and highlights */}
          <div
            className={`transition-all duration-1000 delay-400 ${
              isVisible ? "animate-fadeInRight opacity-100" : "opacity-0"
            }`}
          >
            {/* Tech Stack */}
            <div className="mb-8">
              <h4 className="text-xl font-poppins font-semibold mb-6">
                Tech Stack
              </h4>
              <div className="grid grid-cols-3 gap-4">
                {techStack.map((tech, index) => (
                  <div
                    key={tech.name}
                    className="bg-card p-4 rounded-lg border hover:shadow-lg transition-all duration-300 transform hover:scale-105 text-center"
                    style={{ animationDelay: `${index * 100}ms` }}
                  >
                    <div className="text-2xl mb-2">{tech.icon}</div>
                    <div className="font-medium text-sm">{tech.name}</div>
                    <div className="text-xs text-muted-foreground">
                      {tech.category}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Key Highlights */}
            <div>
              <h4 className="text-xl font-poppins font-semibold mb-6">
                Key Strengths
              </h4>
              <div className="grid gap-4">
                {highlights.slice(0, 3).map((highlight, index) => (
                  <div
                    key={highlight.title}
                    className="flex items-start gap-4 p-4 bg-card rounded-lg border hover:shadow-lg transition-all duration-300"
                  >
                    <div className="flex-shrink-0">{highlight.icon}</div>
                    <div>
                      <h5 className="font-semibold mb-1">{highlight.title}</h5>
                      <p className="text-sm text-muted-foreground">
                        {highlight.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Additional Highlights Grid */}
        <div
          className={`mt-16 transition-all duration-1000 delay-600 ${
            isVisible ? "animate-fadeInUp opacity-100" : "opacity-0"
          }`}
        >
          <div className="grid md:grid-cols-3 gap-6">
            {highlights.slice(3).map((highlight, index) => (
              <div
                key={highlight.title}
                className="text-center p-6 bg-card rounded-lg border hover:shadow-lg transition-all duration-300 transform hover:scale-105"
                style={{ animationDelay: `${(index + 3) * 200}ms` }}
              >
                <div className="flex justify-center mb-4">{highlight.icon}</div>
                <h5 className="font-semibold mb-2">{highlight.title}</h5>
                <p className="text-sm text-muted-foreground">
                  {highlight.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
