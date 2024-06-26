import './App.css';
import About from './components/About';
import Cursor from './components/Cursor';
import Hero from './components/Hero';
import Navbar from './components/Navbar';
import Technologies from './components/Technologies'
import Skills from './components/Skills';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Contact from './components/Contact';

function App() {
  return (
    <div className="overflow-x-hidden text-neutral-300 antialiased selection:bg-cyan-300 selection:text-cya">
    <div className="fixed top-0 -z-10 h-full w-full">
    <div className="absolute top-0 z-[-2] h-screen w-screen bg-neutral-950 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]">
    </div>
    </div>
    <div className='container mx-auto px-8'>
    <Cursor/>
    <Navbar/>
    <Hero/>
    <About/>
    <Technologies/>
    <Experience/>
    <Projects/>
    <Skills/>
    <Contact/>
    </div>
    </div>
  );
}

export default App;