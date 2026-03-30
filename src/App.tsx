import { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Footer from './components/Footer';
import ScrollIndicators from './components/ScrollIndicators';

export default function App() {
  const [theme, setTheme] = useState<'light' | 'dark'>('dark');

  useEffect(() => {
    // Force dark mode for this specific immersive design
    document.documentElement.classList.add('dark');
  }, []);

  const toggleTheme = () => {
    // Theme toggle disabled for this specific high-motion immersive design
    // but kept the state for potential future use
  };

  return (
    <div className="min-h-screen bg-[#0d0a0d] text-white selection:bg-purple-500 selection:text-white transition-colors duration-500 overflow-x-hidden">
      <Navbar theme={theme} toggleTheme={toggleTheme} />
      <ScrollIndicators />
      <main className="relative">
        <Hero />
        <div className="relative">
          <About />
          <Skills />
          <Projects />
        </div>
      </main>
      <Footer />
    </div>
  );
}
