import About from "./HomeComponents/About";
import Faqs from "./HomeComponents/Faqs";
import Hero from "./HomeComponents/Hero";
import Homecontact from "./HomeComponents/Homecontact";
import Homeheader from "./HomeComponents/Homeheader";
import Projects from "./HomeComponents/Projects";
import Skills from "./HomeComponents/Skills";
import "./HomeComponents/HomeComponentStyles/Home.css";

export default function Page() {
  return (
    <div className="home-wrapper">
      <Homeheader />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Faqs />
      <Homecontact />
    </div>
  );
}
