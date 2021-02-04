import React from "react";

import Title from "./components/Title/Title";
import About from "./components/About/About";
import Projects from "./components/Projects/Projects";
import Skills from "./components/Skills/Skills";
import Experience from "./components/Experience/Experience";
import Contact from "./components/Contact/Contact";

import NavMobile from "./components/Navbar/Mobile/NavMobile";
import NavDesktop from "./components/Navbar/Desktop/NavDesktop";

import "./style.css";

function App() {
  return (
    <>
      <NavDesktop />
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
