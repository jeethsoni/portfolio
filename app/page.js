"use client";
import About from "./components/About";
import Header from "./components/Header";
import Work from "./components/Work";
import Projects from "./components/Projects";

export default function Home() {
  return (
    <>
      {/* Home */}
      <section id="home" className="scroll-mt-24 min-h-screen mb-36">
        <Header />
      </section>

      {/* About */}
      <section id="about" className="scroll-mt-24 mb-36">
        <About />
      </section>

      {/* If your navbar has links to these, keep placeholders
          until you build the sections, so scrolling still works */}
      <section id="work" className="scroll-mt-24 mb-36" >
        <Work />

      </section>

      <section id="projects" className="scroll-mt-24 min-h-[60vh]" >

        <Projects />
      </section>
      <section id="blog" className="scroll-mt-24 min-h-[60vh]" />
      <section id="contact" className="scroll-mt-24 min-h-[60vh]" />
    </>
  );
}
