import Navbar from "@/components/layout/Navbar";
import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Expertise from "@/components/sections/Expertise";
import Projects from "@/components/sections/Projects";
import Skills from "@/components/sections/Skills";
import Contact from "@/components/sections/Contact";
import Footer from "@/components/layout/Footer";

export default function Home() {
  return (
    <main>
      <div className="background-grid" />
      <div className="background-glow background-glow-one" />
      <div className="background-glow background-glow-two" />

      <Navbar />
      <Hero />
      <About />
      <Expertise />
      <Projects />
      <Skills />
      <Contact />
      <Footer />
    </main>
  );
}