"use client";

import { useState, useEffect, useRef } from "react";

function Skills() {
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

  const skillCategories = [
    {
      title: "Frontend Development",
      icon: "🎨",
      skills: [
        { name: "React", level: 90, color: "bg-blue-500" },
        { name: "Next.js", level: 85, color: "bg-gray-800" },
        { name: "JavaScript", level: 88, color: "bg-yellow-500" },
        { name: "TypeScript", level: 80, color: "bg-blue-600" },
        { name: "Tailwind CSS", level: 92, color: "bg-teal-500" },
        { name: "HTML/CSS", level: 95, color: "bg-orange-500" },
      ],
    },
    {
      title: "Backend Development",
      icon: "⚙️",
      skills: [
        { name: "Node.js", level: 85, color: "bg-green-500" },
        { name: "Django", level: 80, color: "bg-green-700" },
        { name: "Express.js", level: 83, color: "bg-gray-600" },
        { name: "Python", level: 78, color: "bg-blue-500" },
        { name: "RESTful APIs", level: 88, color: "bg-purple-500" },
        { name: "GraphQL", level: 70, color: "bg-pink-500" },
      ],
    },
    {
      title: "Database & Tools",
      icon: "🗃️",
      skills: [
        { name: "MongoDB", level: 82, color: "bg-green-600" },
        { name: "PostgreSQL", level: 75, color: "bg-blue-700" },
        { name: "Git", level: 90, color: "bg-orange-600" },
        { name: "Docker", level: 70, color: "bg-blue-500" },
        { name: "AWS", level: 68, color: "bg-orange-500" },
        { name: "Vercel", level: 85, color: "bg-black" },
      ],
    },
    {
      title: "Design & CMS",
      icon: "🎯",
      skills: [
        { name: "Figma", level: 80, color: "bg-purple-500" },
        { name: "Adobe XD", level: 70, color: "bg-purple-600" },
        { name: "Sanity CMS", level: 85, color: "bg-red-500" },
        { name: "Contentful", level: 75, color: "bg-blue-500" },
        { name: "UI/UX Design", level: 78, color: "bg-pink-500" },
        { name: "Responsive Design", level: 92, color: "bg-teal-600" },
      ],
    },
  ];

  return (
    <section id="skills" ref={sectionRef} className="py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div
          className={`text-center mb-16 transition-all duration-1000 ${
            isVisible ? "animate-fadeInUp opacity-100" : "opacity-0"
          }`}
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-poppins font-bold mb-4">
            Technical <span className="gradient-text">Skills</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A comprehensive overview of my technical expertise and proficiency
            levels
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <div
              key={category.title}
              className={`bg-card p-6 rounded-lg border hover:shadow-lg transition-all duration-500 ${
                isVisible ? "animate-fadeInUp opacity-100" : "opacity-0"
              }`}
              style={{ animationDelay: `${categoryIndex * 200}ms` }}
            >
              {/* Category Header */}
              <div className="flex items-center gap-3 mb-6">
                <span className="text-2xl">{category.icon}</span>
                <h3 className="text-xl font-poppins font-semibold">
                  {category.title}
                </h3>
              </div>

              {/* Skills List */}
              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skill.name} className="group">
                    <div className="flex justify-between items-center mb-2">
                      <span className="font-medium text-sm">{skill.name}</span>
                      <span className="text-sm text-muted-foreground">
                        {skill.level}%
                      </span>
                    </div>
                    <div className="w-full bg-muted rounded-full h-2 overflow-hidden">
                      <div
                        className={`h-full ${skill.color} rounded-full transition-all duration-1000 ease-out`}
                        style={{
                          width: isVisible ? `${skill.level}%` : "0%",
                          transitionDelay: `${
                            categoryIndex * 200 + skillIndex * 100
                          }ms`,
                        }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Additional Skills Highlight */}
        <div
          className={`mt-16 text-center transition-all duration-1000 delay-800 ${
            isVisible ? "animate-fadeInUp opacity-100" : "opacity-0"
          }`}
        >
          <div className="bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 p-8 rounded-lg">
            <h3 className="text-2xl font-poppins font-semibold mb-4">
              Always Learning
            </h3>
            <p className="text-muted-foreground mb-4 max-w-3xl mx-auto">
              Technology evolves rapidly, and so do I. I&apos;m constantly
              exploring new frameworks, tools, and best practices to stay at the
              forefront of web development. Currently diving deeper into AI
              integration, serverless architectures, and advanced React
              patterns.
            </p>
            <div className="flex flex-wrap justify-center gap-3 mt-6">
              <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm">
                AI Integration
              </span>
              <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm">
                Serverless
              </span>
              <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm">
                Microservices
              </span>
              <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm">
                DevOps
              </span>
              <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm">
                Web3
              </span>
              <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm">
                Mobile Development
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Skills;
