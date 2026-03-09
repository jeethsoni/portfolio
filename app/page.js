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

        {/* Aurora only inside header */}
        <div className="absolute inset-0 -z-10">
          <Aurora
            colorStops={["#7cff67", "#B19EEF", "#5227FF"]}
            blend={0.5}
            amplitude={1.0}
            speed={1}
          />
        </div>

        <Header />
      </section>

      {/* REST OF SITE */}
      <div className="bg-[color:color-mix(in_oklab,var(--muted)_50%,transparent)]">

        <section id="about" className="py-36">
          <About />
        </section>

        <section id="work" className="py-36">
          <Work />
        </section>

        <section id="projects" className="py-36">
          <Projects />
        </section>

        <section id="blog" className="py-36">
          <Blog />
        </section>

        <section id="contact" className="py-36">
          <Contact />
        </section>

      </div>
    </div>
  );
}