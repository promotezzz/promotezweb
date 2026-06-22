import { motion } from 'framer-motion';

const stagger = 0.18;

export default function Hero() {
  return (
    <section id="hero">
      <div className="bg">
        <div className="aurora" />
        <div className="grid" />
      </div>

      <div className="orbs">
        <div className="orb" />
        <div className="orb" />
      </div>

      {/* Floating leaves */}
      <svg className="leaves" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M20 100 C20 60 50 20 90 10 C70 40 60 70 50 100 C40 110 30 110 20 100Z" fill="rgba(34,197,94,.06)" className="leaf leaf-1" />
        <path d="M180 150 C180 120 160 90 130 80 C145 100 150 120 155 150 C160 155 170 155 180 150Z" fill="rgba(16,185,129,.05)" className="leaf leaf-2" />
        <path d="M140 30 C140 10 120 -5 95 -10 C110 10 115 25 120 40 C125 42 135 40 140 30Z" fill="rgba(34,197,94,.04)" className="leaf leaf-3" />
      </svg>

      <div className="content">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <span className="tag">
            <span className="dot" />
            Rust & Python Developer
          </span>
        </motion.div>

        <h1>
          {['Building', 'things that'].map((text, i) => (
            <span key={text} className="line">
              <motion.span
                initial={{ y: '120%' }}
                animate={{ y: 0 }}
                transition={{ duration: 0.7, delay: i * stagger, ease: [0.16, 1, 0.3, 1] }}
                style={{ display: 'block' }}
              >
                {text}
              </motion.span>
            </span>
          ))}
          <span className="line">
            <motion.span
              initial={{ y: '120%' }}
              animate={{ y: 0 }}
              transition={{ duration: 0.7, delay: 2 * stagger, ease: [0.16, 1, 0.3, 1] }}
              style={{ display: 'block' }}
            >
              <span className="gradient">matter.</span>
            </motion.span>
          </span>
        </h1>

        <motion.p
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.7 }}
        >
          I build systems-level tools and data pipelines with Rust and Python.
          Performance, safety, and clean architecture — that's my stack.
        </motion.p>

        <motion.div
          className="actions"
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.85 }}
        >
          <a href="#projects" className="btn btn-primary">
            See the work
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>
          </a>
          <a href="#contact" className="btn btn-ghost">Get in touch</a>
        </motion.div>
      </div>

      <motion.div
        className="scroll-hint"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
      >
        <span>Scroll</span>
        <div className="scroll-line" />
      </motion.div>
    </section>
  );
}
