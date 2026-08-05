import BackgroundEffects from "@/components/effects/BackgroundEffects";
import Footer from "@/components/layout/Footer";
import Navbar from "@/components/layout/Navbar";
import About from "@/components/sections/About";
import Contact from "@/components/sections/Contact";
import Expertise from "@/components/sections/Expertise";
import Hero from "@/components/sections/Hero";
import Projects from "@/components/sections/Projects";
import Skills from "@/components/sections/Skills";

export default function Home() {
  return (
    <main>
      <BackgroundEffects />
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
