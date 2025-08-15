import { useState } from 'react'
import { motion, useScroll, useSpring } from 'framer-motion'
import Contact from './Section/Contact';
import Project from './Section/Project';
import Navbar from './NavBar';
import LandingTop from './Section/LandingTop';
import About from './Section/About';
export default function App() {
  return (
    <div className="bg-gradient-to-br from-gray-900 via-black to-gray-800 text-white min-h-screen font-sans">
      <Navbar />
      <LandingTop />
      <About />
      <Project />
      <Contact />
      <Footer />
    </div>
  );
}

function Footer() {
  return (
    <footer className="text-center py-6 border-t border-gray-700 text-gray-400">
      © {new Date().getFullYear()} Reymark, Demo Test.
    </footer>
  );
}