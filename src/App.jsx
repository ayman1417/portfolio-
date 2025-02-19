import { useState } from 'react'
import { HeroUIProvider } from "@heroui/react";
import './App.css'
import Home from './sections/home/Home';
import About from './sections/about/about';
import NavBar from './components/NavBar/NavBar';
import Education from './sections/education/Education';
import Projects from './sections/projects/Projects';
import Footer from './components/footer/Footer';

function App() {

  return (
    <HeroUIProvider>
      <div className=" relative z-50">
        <NavBar />
      </div>
      <div className=" container">
        <Home />
        <div className="relative z-10">
          <About />
          <Education/>
          <Projects/>
          <Footer/>
        </div>
      </div>
    </HeroUIProvider>
  )
}

export default App
