"use client";
import About from "./components/About";
import Header from "./components/Header";
import Work from "./components/Work";
import Projects from "./components/Projects";
import Blog from "./components/Blog";
import Contact from "./components/Contact";

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
      {/* Work */}
      <section id="work" className="scroll-mt-24 mb-36" >
        <Work />
      </section>
      {/* Projects */}
      <section id="projects" className="scroll-mt-24 mb-36">
        <Projects />
      </section>
      {/* Blog */}
      <section id="blog" className="scroll-mt-24 mb-36">
        <Blog />
      </section>
      {/* Contact */}
      <section id="contact" className="scroll-mt-24">
        <Contact />
      </section>
    </>
  );
}
