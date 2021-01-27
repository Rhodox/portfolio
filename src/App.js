import React from "react";

import Title from "./components/Title/Title";
import About from "./components/About/About";
import Projects from "./components/Projects/Projects";
import Skills from "./components/Skills/Skills";
import Experience from "./components/Experience/Experience";
import Contact from "./components/Contact/Contact";

import NavMobile from "./components/Navbar/Mobile/NavMobile";

import "./style.css";

function App() {
  return (
    <>
      {/* <NavDesktop /> Fix mobile navbar first */}
      <NavMobile />
      <Title />
      <About />
      <Experience />
      <Projects />
      <Skills />
      <Contact />
    </>
  );
}

export default App;
