import React from "react";
import Skills from '../components/Skills'
import Hero from './partial/Hero'
import About from './partial/About'
import Projects from './partial/Projects'
import Contact from './partial/Contact'

export default function Home() {
  return (
    <>
      <Hero />
      <Skills />
      <About />
      <Projects />
      <Contact />
    </>
  );
}
