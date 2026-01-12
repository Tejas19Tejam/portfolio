"use client";

import { useState, useEffect } from "react";
import { Button } from "@/app/_components/ui/button";
import { ArrowDown, Github, Linkedin, Mail, ExternalLink } from "lucide-react";

const heroSectionData = {
  avatarInitials: "VT",
  name: "Vasudev Tejam",
  title: "Full Stack Developer",
  tagline: `Full Stack Developer with 3+ years of experience delivering web platforms from concept to production. Skilled in building
maintainable systems, improving performance, and deploying reliable features that enhance user experience and business
outcomes.`,
  socialLinks: {
    github: "https://github.com/Tejas19Tejam",
    linkedin: "https://linkedin.com/in/vasudev-tejam/",
    email: "mailto:tejas19tejam@gmail.com",
  },
};

function Hero() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section
      id="hero"
      className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20"
    >
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-purple-50 dark:from-gray-900 dark:via-gray-900 dark:to-purple-900/20"></div>

      {/* Animated background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-blue-400/20 rounded-full blur-xl animate-float"></div>
        <div
          className="absolute top-3/4 right-1/4 w-24 h-24 bg-purple-400/20 rounded-full blur-xl animate-float"
          style={{ animationDelay: "2s" }}
        ></div>
        <div
          className="absolute bottom-1/4 left-1/3 w-20 h-20 bg-pink-400/20 rounded-full blur-xl animate-float"
          style={{ animationDelay: "4s" }}
        ></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Avatar */}
          <div
            className={`mb-8 transition-all duration-1000 ${
              isVisible ? "animate-fadeInUp opacity-100" : "opacity-0"
            }`}
          >
            <div className="w-32 h-32 mx-auto rounded-full bg-gradient-to-r from-blue-500 to-purple-600 flex items-center justify-center text-white font-bold text-4xl mb-4 shadow-2xl">
              {heroSectionData.avatarInitials}
            </div>
          </div>

          {/* Main heading */}
          <div
            className={`mb-6 transition-all duration-1000 delay-200 ${
              isVisible ? "animate-fadeInUp opacity-100" : "opacity-0"
            }`}
          >
            <h1 className="text-4xl sm:text-5xl lg:text-7xl font-poppins font-bold mb-4">
              Hi, I&apos;m{" "}
              <span className="gradient-text">{heroSectionData.name}</span>
            </h1>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-poppins font-semibold text-muted-foreground mb-4">
              {heroSectionData.title}
            </h2>
          </div>

          {/* Tagline */}
          <div
            className={`mb-8 transition-all duration-1000 delay-400 ${
              isVisible ? "animate-fadeInUp opacity-100" : "opacity-0"
            }`}
          >
            <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              {heroSectionData.tagline}
            </p>
          </div>

          {/* CTA Buttons */}
          <div
            className={`mb-12 transition-all duration-1000 delay-600 ${
              isVisible ? "animate-fadeInUp opacity-100" : "opacity-0"
            }`}
          >
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button
                size="lg"
                className="text-lg px-8 py-4 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 transform hover:scale-105 transition-all duration-300"
                onClick={() =>
                  document
                    .getElementById("projects")
                    ?.scrollIntoView({ behavior: "smooth" })
                }
              >
                <ExternalLink className="mr-2" size={20} />
                View Projects
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="text-lg px-8 py-4 rounded-full border-2 hover:bg-muted transform hover:scale-105 transition-all duration-300"
                onClick={() =>
                  document
                    .getElementById("contact")
                    ?.scrollIntoView({ behavior: "smooth" })
                }
              >
                <Mail className="mr-2" size={20} />
                Contact Me
              </Button>
            </div>
          </div>

          {/* Social Links */}
          <div
            className={`mb-12 transition-all duration-1000 delay-800 ${
              isVisible ? "animate-fadeInUp opacity-100" : "opacity-0"
            }`}
          >
            <div className="flex justify-center gap-6">
              <a
                href={heroSectionData.socialLinks.github}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-full bg-muted hover:bg-primary hover:text-primary-foreground transition-all duration-300 transform hover:scale-110"
              >
                <Github size={24} />
              </a>
              <a
                href={heroSectionData.socialLinks.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-full bg-muted hover:bg-primary hover:text-primary-foreground transition-all duration-300 transform hover:scale-110"
              >
                <Linkedin size={24} />
              </a>
              <a
                href={heroSectionData.socialLinks.email}
                className="p-3 rounded-full bg-muted hover:bg-primary hover:text-primary-foreground transition-all duration-300 transform hover:scale-110"
              >
                <Mail size={24} />
              </a>
            </div>
          </div>

          {/* Scroll indicator */}
          <div
            className={`transition-all duration-1000 delay-1000 ${
              isVisible ? "animate-fadeInUp opacity-100" : "opacity-0"
            }`}
          >
            <button
              onClick={() =>
                document
                  .getElementById("about")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
              className="animate-bounce p-2 rounded-full hover:bg-muted transition-colors duration-300"
            >
              <ArrowDown size={24} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
