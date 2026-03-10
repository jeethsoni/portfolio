"use client";
import About from "./components/About";
import Header from "./components/Header";
import Work from "./components/Work";
import Projects from "./components/Projects";
import Blog from "./components/Blog";
import Contact from "./components/Contact";
import Aurora from "./components/reactbits/backgrounds/Aurora";

export default function Home() {
  return (
    <div className="relative">

      {/* HEADER */}
      <section id="home" className="relative min-h-screen overflow-hidden">

        {/* Aurora background */}
        <div className="absolute inset-0 -z-10">
          <Aurora
            colorStops={["#7cff67", "#B19EEF", "#5227FF"]}
            blend={0.5}
            amplitude={1.0}
            speed={1}
          />
        </div>

        {/* Dark overlay */}
        <div className="absolute inset-0 bg-black/50 -z-5" />

        <Header />

      </section>

      {/* REST OF SITE */}
      <div>

        <section id="about" className="py-16 bg-muted/50">
          <About />
        </section>

        <section id="work" className="py-16 ">
          <Work />
        </section>

        <section id="projects" className="py-16 bg-muted/50">
          <Projects />
        </section>

        <section id="blog" className="py-16">
          <Blog />
        </section>

        <section id="contact" className="py-16 bg-muted/50">
          <Contact />
        </section>

      </div>
    </div>
  );
}