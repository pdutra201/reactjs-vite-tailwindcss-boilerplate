import React from 'react'
import Nav from './nav'
import Home from './sections/Home'
import About from './sections/About'
import Experience from './sections/Expereince'
import Skills from './sections/Skills'
import Projects from './sections/Projects'
import Contact from './sections/Contact'
import './app.css'

function App() {
  return (
    <div id="root">
      <div className="bg-primary-white">
        <div className=" w-3/4 min-h-screen bg-primary-white mx-auto">
          <Nav />
          <Home />
          <About />
          <Projects />
          <Skills />
          <Experience />
          <Contact />

        </div>

      </div>

    </div>
  )
}

export default App
