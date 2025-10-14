import Hero from "@/app/_components/custom/hero";
import About from "@/app/_components/custom/about";
import Skills from "@/app/_components/custom/skills";
import Projects from "@/app/_components/custom/projects";
import Experience from "@/app/_components/custom/experience";
import Contact from "@/app/_components/custom/contact";
import Footer from "@/app/_components/custom/footer";

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Experience />
      <Contact />
      <Footer />
    </>
  );
}
