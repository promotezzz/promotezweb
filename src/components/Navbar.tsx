import { useScroll, useMotionValueEvent } from 'framer-motion';
import { useRef, useState, useEffect } from 'react';

const links = [
  { href: '#about', label: 'About' },
  { href: '#skills', label: 'Skills' },
  { href: '#projects', label: 'Work' },
  { href: '#contact', label: 'Contact' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState('');
  const progressRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll();

  useMotionValueEvent(scrollYProgress, 'change', (v) => {
    setScrolled(v > 0.03);
    if (progressRef.current) {
      progressRef.current.style.transform = `scaleX(${v})`;
    }
  });

  useEffect(() => {
    const ids = ['about', 'skills', 'projects', 'contact'];
    const observer = new IntersectionObserver((entries) => {
      for (const entry of entries) {
        if (entry.isIntersecting) {
          setActive(entry.target.id);
        }
      }
    }, { threshold: 0.3, rootMargin: '-80px 0px 0px 0px' });

    ids.forEach(id => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <>
      <div id="scroll-progress" ref={progressRef} />
      <nav className={scrolled ? 'scrolled' : ''}>
        <div className="nav-inner">
          <a href="#" className="nav-logo">promotez</a>
          <div className="nav-links">
            {links.map(l => (
              <a
                key={l.href}
                href={l.href}
                className={`nav-link${active === l.href.slice(1) ? ' active' : ''}`}
              >
                {l.label}
              </a>
            ))}
          </div>
        </div>
      </nav>
    </>
  );
}
