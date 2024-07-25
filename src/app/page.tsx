// components
import { Footer, Navbar } from "@/components";

// sections
import ContactForm from "./contact-form";
import Hero from "./hero";
import Projects from "./projects";
import Skills from "./skills";
import HorizontalRow from "@/components/horizontal-row";

export default function Portfolio() {
  return (
    <>
      <Navbar />
      <Hero />
      <Skills />
      <HorizontalRow />
      <Projects />
      <HorizontalRow />
      <ContactForm />
      <Footer />
    </>
  );
}
