import React, { useState, useEffect } from 'react';
import './App.css';
import About from './components/About';
import Cursor from './components/Cursor';
import Hero from './components/Hero';
import Navbar from './components/Navbar';
import Technologies from './components/Technologies';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Contact from './components/Contact';

function App() {
  const [theme, setTheme] = useState('dark');

  useEffect(() => {
    document.documentElement.classList.add(theme);
    return () => {
      document.documentElement.classList.remove(theme);
    };
  }, [theme]);

  const handleMoonClick = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark');
  };

  return (
    <div className={`overflow-x-hidden antialiased selection:bg-cyan-300 selection:text-cya ${theme === 'dark' ? 'bg-neutral-950 text-neutral-300' : 'bg-white text-neutral-900'}`}>
      <div className='container mx-auto px-8'>
        <Cursor />
        <Navbar handleMoonClick={handleMoonClick} theme={theme} />
        <Hero />
        <About />
        <Technologies />
        <Experience />
        <Projects />
        <Skills />
        <Contact />
      </div>
    </div>
  );
}

export default App;
