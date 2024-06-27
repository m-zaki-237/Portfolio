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

  const toggleTheme = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark');
  };

  return (
    <div className={`overflow-x-hidden antialiased selection:bg-cyan-300 selection:text-cya ${theme === 'dark' ? 'bg-neutral-950 text-neutral-300' : 'bg-white text-neutral-900'}`}>
      <div className="fixed top-0 -z-10 h-full w-full">
        {theme === 'dark' ? (
          <div className="absolute top-0 z-[-2] h-screen w-screen bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]"></div>
        ) : (
          <div className="absolute top-0 z-[-2] h-screen w-screen rotate-180 transform bg-white bg-[radial-gradient(60%_120%_at_50%_50%,hsla(0,0%,100%,0)_0,rgba(252,205,238,.5)_100%)]"></div>
        )}
      </div>
      <div className='container mx-auto px-8'>
        <Cursor />
        <Navbar toggleTheme={toggleTheme} theme={theme} />
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
