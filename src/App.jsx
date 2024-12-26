import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Technologies from './components/Technologies'
import Project from './components/Project'
import Experience from './components/Experience'
import Contact from './components/Contact'
import GalleryDesign from './components/GalleryDesign'
import Education from './components/Education'

const App = () => {
  return (
    <div className="overflow-hidden text-slate-800 antialiased">
      <div className="fixed inset-0 -z-10">
        <div className="absolute top-0 z-[-2] h-screen w-screen bg-white bg-[radial-gradient(100%_50%_at_50%_0%,rgba(0,163,255,0.13)_0,rgba(0,163,255,0)_50%,rgba(0,163,255,0)_100%)]">
        </div>
      </div>
      <div className="container mx-auto px-8">
        <Navbar />
        <Hero />
        <Technologies />
        <Project />
        <GalleryDesign />
        <Experience />
        <Education />

        <Contact />
      </div>
    </div>
  )
}

export default App
