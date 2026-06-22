import { motion, useInView } from 'framer-motion';
import { useRef, useEffect, useState } from 'react';

const stats = [
  { value: 5, suffix: '+', label: 'Years coding' },
  { value: 20, suffix: '+', label: 'Projects built' },
  { value: 15, suffix: '+', label: 'Technologies' },
];

function Counter({ end, suffix = '' }: { end: number; suffix?: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true });
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!inView) return;
    let frame: number;
    const start = performance.now();
    const duration = 1200;
    const go = (now: number) => {
      const t = Math.min((now - start) / duration, 1);
      // ease-out quad
      const eased = 1 - (1 - t) * (1 - t);
      setCount(Math.round(eased * end));
      if (t < 1) frame = requestAnimationFrame(go);
    };
    frame = requestAnimationFrame(go);
    return () => cancelAnimationFrame(frame);
  }, [inView, end]);

  return <div ref={ref} className="stat-num">{count}{suffix}</div>;
}

function SlideUp({ children, delay = 0 }: { children: React.ReactNode; delay?: number }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-60px' });
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay, ease: [0.16, 1, 0.3, 1] }}
    >
      {children}
    </motion.div>
  );
}

export default function About() {
  return (
    <section id="about">
      <div className="section-inner">
        <SlideUp><div className="eyebrow"><svg className="leaf-accent" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M12 2C12 2 6 6 4 12C2 18 8 22 12 22C16 22 22 18 20 12C18 6 12 2 12 2Z" fill="rgba(34,197,94,.3)"/></svg>About</div></SlideUp>
        <SlideUp delay={0.08}>
          <h2>I build with<br /><span style={{ color: 'var(--text-dim)' }}>Rust & Python.</span></h2>
        </SlideUp>
        <SlideUp delay={0.15}>
          <p>
            I'm a systems developer who lives in Rust and breathes Python.
            From CLI tools and Tauri desktop apps to data pipelines and
            embedded scripting — I write code that's fast, safe, and ship-ready.
          </p>
        </SlideUp>

        <motion.div
          className="stats"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          {stats.map((s, i) => (
            <SlideUp key={s.label} delay={0.25 + i * 0.08}>
              <div className="stat">
                <Counter end={s.value} suffix={s.suffix} />
                <div className="stat-label">{s.label}</div>
              </div>
            </SlideUp>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
