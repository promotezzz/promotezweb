import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';
import './App.css';

function CornerLeaves() {
  return (
    <div className="corner-leaves">
      <svg className="corner-leaf corner-leaf-tl" viewBox="0 0 600 700" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M50 500 C30 400 40 280 100 180 C160 80 260 30 380 20 C340 80 310 150 290 230 C270 310 260 400 270 480 C200 460 130 470 80 510 Z" fill="rgba(34,197,94,0.08)" stroke="rgba(34,197,94,0.15)" strokeWidth="1"/>
        <path d="M120 440 C100 360 110 270 160 190 C210 110 290 70 380 50" stroke="rgba(34,197,94,0.12)" strokeWidth="1.5" fill="none"/>
        <path d="M150 400 C140 340 150 270 190 210 C230 150 290 110 360 90" stroke="rgba(34,197,94,0.08)" strokeWidth="1" fill="none"/>
        <path d="M200 460 C180 390 185 310 220 240 C255 170 310 120 370 100" stroke="rgba(34,197,94,0.06)" strokeWidth="0.8" fill="none"/>
      </svg>
      <svg className="corner-leaf corner-leaf-tr" viewBox="0 0 600 600" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M550 480 C570 380 560 260 500 160 C440 60 340 20 220 10 C260 70 290 140 310 220 C330 300 340 390 330 470 C400 440 470 450 520 490 Z" fill="rgba(16,185,129,0.08)" stroke="rgba(16,185,129,0.15)" strokeWidth="1"/>
        <path d="M480 440 C500 360 490 270 440 190 C390 110 310 70 220 50" stroke="rgba(16,185,129,0.12)" strokeWidth="1.5" fill="none"/>
        <path d="M450 400 C460 340 450 270 410 210 C370 150 310 110 240 90" stroke="rgba(16,185,129,0.08)" strokeWidth="1" fill="none"/>
      </svg>
      <svg className="corner-leaf corner-leaf-bl" viewBox="0 0 500 500" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M50 100 C30 180 40 280 100 350 C160 420 240 460 340 470 C300 420 270 350 250 280 C230 210 220 140 230 80 C180 100 120 100 80 90 Z" fill="rgba(34,197,94,0.08)" stroke="rgba(34,197,94,0.15)" strokeWidth="1"/>
        <path d="M120 130 C100 200 110 280 160 340 C210 400 290 430 360 440" stroke="rgba(34,197,94,0.12)" strokeWidth="1.5" fill="none"/>
      </svg>
      <svg className="corner-leaf corner-leaf-br" viewBox="0 0 500 500" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M450 100 C470 180 460 280 400 350 C340 420 260 460 160 470 C200 420 230 350 250 280 C270 210 280 140 270 80 C320 100 380 100 420 90 Z" fill="rgba(16,185,129,0.08)" stroke="rgba(16,185,129,0.15)" strokeWidth="1"/>
        <path d="M380 130 C400 200 390 280 340 340 C290 400 210 430 140 440" stroke="rgba(16,185,129,0.12)" strokeWidth="1.5" fill="none"/>
      </svg>
    </div>
  );
}

function App() {
  return (
    <>
      <div className="grain" />
      <CornerLeaves />
      <Navbar />
      <Hero />
      <About />
      <Projects />
      <Contact />
    </>
  );
}

export default App;
