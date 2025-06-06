import { Hero } from "@/components/layout/header";
import Skills from "@/components/layout/skills"
import Project from "@/components/layout/project";
import Contact from "@/components/layout/contact";
export default function Home() {
  return (
    <>
      <Hero />
      <Skills/>
      <Project />
      <Contact /> 
    </>
  );
}
