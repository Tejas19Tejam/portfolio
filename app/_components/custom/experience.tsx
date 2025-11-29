"use client";

import { useState, useEffect, useRef } from "react";
import { Calendar, MapPin, Briefcase, Award, TrendingUp } from "lucide-react";

function Experience() {
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

  const experiences = [
    {
      id: 1,
      title: "Full Stack Developer",
      company: "Sumcircle Technology Pvt. Ltd.",
      location: "Ghatkopar, Mumbai",
      period: "Dec, 2024 - Present",
      type: "Full-time",
      description:
        "Building scalable and high-performance web applications using React, Next.js, Node.js, and modern cloud technologies. Responsible for leading development initiatives, collaborating directly with clients to understand requirements, and delivering optimized solutions aligned with business objectives.",
      achievements: [
        "Improved application performance by reducing load time by 40% through advanced optimization techniques.",
        "Developed a complete Real Estate web application from the ground up, ensuring scalability and seamless user experience.",
        "Architected and implemented an HRMS system serving over 10,000 users with reliable performance and modular design.",
      ],
      technologies: [
        "React",
        "MongoDB",
        "Node.js",
        "Docker",
        "Sanity CMS",
        "Django",
        "Next.js",
        "AWS",
        "TypeScript",
      ],
    },

    {
      id: 2,
      title: "Assistant System Engineer",
      company: "Tata Consultancy Services",
      location: "Thane, Mumbai",
      period: "June, 2023 - Dec, 2024",
      type: "Full-time",
      description:
        "Transitioned from an IT Support role into full-stack development, I worked on enhancing the NextStep recruitment portal by building responsive front-end features using React.js, TypeScript, and CSS Modules",
      achievements: [
        "Delivered responsive UI components that improved user experience for thousands of candidates on the NextStep portal.",
        "Collaborated with UI/UX teams to implement pixel-perfect and accessibility-friendly interfaces across devices.",
        "Maintained high code quality by participating in Agile sprints and performing structured code reviews using Jira.",
      ],
      technologies: ["React", "CSS Modules", "Nodejs", "HTML/CSS/JS", "Agile"],
    },
    {
      id: 3,
      title: "Graduate Trainee",
      company: "Tata Consultancy Services",
      location: "Thane, Mumbai",
      period: "Aug, 2022 - June, 2023",
      type: "Full-time",
      description:
        "As a Graduate Trainee at Tata Consultancy Services for 10 months, I worked as an IT Support Coordinator responsible for resolving end-user hardware, software, and network issues. I also supported infrastructure activities including OS installations, basic router configuration, and on-site assistance for server and networking teams.",
      achievements: [
        "Resolved 200+ hardware, software, and network issues with a high first-call resolution rate, ensuring uninterrupted operations for internal users.",
        "Supported on-ground infrastructure activities, including system setups and network configurations, improving IT response and service efficiency.",
      ],
      technologies: ["Azure AD", "HPDM", "Linux OS", "Window OS"],
    },
    {
      id: 4,
      title: "Junior Developer",
      company: "Cuvette",
      location: "Remote",
      period: "Feb 2023 - June, 2023",
      type: "Internship",
      description:
        "Joined Cuvette as a Junior Developer Intern, where I built websites for small businesses while strengthening my fundamentals in front-end and back-end development. Worked on real-world projects that helped me gain hands-on experience across the full web development lifecycle.",
      achievements: [
        "Built multiple production-ready websites for small business clients using modern web technologies.",
        "Gained practical experience in the MERN stack by developing 4 complete full-stack projects.",
        "Strengthened core skills in front-end development, API integration, and component-based architecture.",
      ],
      technologies: [
        "HTML",
        "CSS",
        "JavaScript",
        "React",
        "Nodejs",
        "MongoDB",
        "Express",
      ],
    },
  ];

  const stats = [
    {
      label: "Years of Experience",
      value: "3+",
      icon: <Calendar className="w-6 h-6" />,
    },
    {
      label: "Projects Completed",
      value: "10+",
      icon: <Briefcase className="w-6 h-6" />,
    },
    // {
    //   label: "Happy Clients",
    //   value: "25+",
    //   icon: <Award className="w-6 h-6" />,
    // },
    {
      label: "Lines of Code",
      value: "10k+",
      icon: <TrendingUp className="w-6 h-6" />,
    },
  ];

  return (
    <section id="experience" ref={sectionRef} className="py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div
          className={`text-center mb-16 transition-all duration-1000 ${
            isVisible ? "animate-fadeInUp opacity-100" : "opacity-0"
          }`}
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-poppins font-bold mb-4">
            Professional <span className="gradient-text">Journey</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            My career progression and key milestones in the world of web
            development
          </p>
        </div>

        {/* Stats Section */}
        <div
          className={`grid grid-cols-2 md:grid-cols-3 gap-6 mb-16 transition-all duration-1000 delay-200 ${
            isVisible ? "animate-fadeInUp opacity-100" : "opacity-0"
          }`}
        >
          {stats.map((stat, index) => (
            <div
              key={stat.label}
              className="text-center p-6 bg-card rounded-lg border hover:shadow-lg transition-all duration-300"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="flex justify-center mb-3 text-primary">
                {stat.icon}
              </div>
              <div className="text-2xl font-poppins font-bold text-primary mb-1">
                {stat.value}
              </div>
              <div className="text-sm text-muted-foreground">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-4 md:left-1/2 transform md:-translate-x-px top-0 bottom-0 w-0.5 bg-border"></div>

          {experiences.map((experience, index) => (
            <div
              key={experience.id}
              className={`relative mb-12 md:mb-16 transition-all duration-1000 ${
                isVisible ? "animate-fadeInUp opacity-100" : "opacity-0"
              }`}
              style={{ animationDelay: `${(index + 1) * 300}ms` }}
            >
              <div
                className={`md:flex md:items-center ${
                  index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                }`}
              >
                {/* Timeline node */}
                <div className="absolute left-4 md:left-1/2 transform -translate-x-1/2 w-4 h-4 bg-primary rounded-full border-4 border-background z-10"></div>

                {/* Content */}
                <div
                  className={`ml-12 md:ml-0 md:w-1/2 ${
                    index % 2 === 0 ? "md:pr-8" : "md:pl-8"
                  }`}
                >
                  <div className="bg-card p-6 rounded-lg border hover:shadow-lg transition-all duration-300">
                    {/* Header */}
                    <div className="mb-4">
                      <div className="flex flex-wrap items-center gap-2 mb-2">
                        <span className="px-2 py-1 bg-primary/10 text-primary text-xs rounded-full">
                          {experience.type}
                        </span>
                        <div className="flex items-center text-sm text-muted-foreground">
                          <Calendar size={14} className="mr-1" />
                          {experience.period}
                        </div>
                      </div>
                      <h3 className="text-xl font-poppins font-semibold mb-1">
                        {experience.title}
                      </h3>
                      <div className="flex items-center text-muted-foreground text-sm">
                        <Briefcase size={14} className="mr-2" />
                        {experience.company}
                        <span className="mx-2">•</span>
                        <MapPin size={14} className="mr-1" />
                        {experience.location}
                      </div>
                    </div>

                    {/* Description */}
                    <p className="text-muted-foreground mb-4 text-sm">
                      {experience.description}
                    </p>

                    {/* Achievements */}
                    <div className="mb-4">
                      <h4 className="font-semibold text-sm mb-2">
                        Key Achievements:
                      </h4>
                      <ul className="space-y-1">
                        {experience.achievements.map((achievement, i) => (
                          <li
                            key={i}
                            className="text-sm text-muted-foreground flex items-start gap-2"
                          >
                            <span className="w-1 h-1 bg-primary rounded-full mt-2 flex-shrink-0"></span>
                            {achievement}
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Technologies */}
                    <div>
                      <h4 className="font-semibold text-sm mb-2">
                        Technologies:
                      </h4>
                      <div className="flex flex-wrap gap-1">
                        {experience.technologies.map((tech) => (
                          <span
                            key={tech}
                            className="px-2 py-1 bg-muted text-muted-foreground text-xs rounded-md"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Empty space for alternating layout */}
                <div className="hidden md:block md:w-1/2"></div>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div
          className={`text-center mt-16 transition-all duration-1000 delay-800 ${
            isVisible ? "animate-fadeInUp opacity-100" : "opacity-0"
          }`}
        >
          <div className="bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 p-8 rounded-lg">
            <h3 className="text-2xl font-poppins font-semibold mb-4">
              Ready for the Next Challenge
            </h3>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
              I&apos;m always excited to take on new projects and collaborate
              with talented teams. Whether you&apos;re looking for a full-stack
              developer, technical consultant, or someone to lead your next big
              project, let&apos;s discuss how I can help bring your ideas to
              life.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={() =>
                  document
                    .getElementById("contact")
                    ?.scrollIntoView({ behavior: "smooth" })
                }
                className="px-6 py-3 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors"
              >
                Let&apos;s Work Together
              </button>
              <button
                onClick={() => window.open("/resume.pdf", "_blank")}
                className="px-6 py-3 border border-border rounded-lg hover:bg-muted transition-colors"
              >
                Download Resume
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Experience;
