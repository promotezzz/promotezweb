import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { ExternalLink } from 'lucide-react';

const projects = [
  {
    title: 'promotez-core',
    desc: 'A high-performance Rust CLI toolkit for bulk file operations, cache cleaning, and system management. Built with Tauri for cross-platform reach.',
    tags: ['Rust', 'Tauri', 'CLI', 'Systems'],
    color: '#22c55e',
    github: '#', demo: '#',
  },
  {
    title: 'DataWeave',
    desc: 'A Python data pipeline framework for ETL, transformation, and visualization. Designed for speed with async I/O and NumPy under the hood.',
    tags: ['Python', 'Async', 'NumPy', 'ETL'],
    color: '#10b981',
    github: '#', demo: '#',
  },
  {
    title: 'Oxide Serve',
    desc: 'A lightweight HTTP server written in Rust with zero dependencies. Handles static file serving, routing, and WebSocket upgrades.',
    tags: ['Rust', 'HTTP', 'WebSocket', 'No-deps'],
    color: '#34d399',
    github: '#', demo: '#',
  },
  {
    title: 'PyRaft',
    desc: 'A Python implementation of the Raft consensus protocol. Used for learning distributed systems — includes election, replication, and fault tolerance.',
    tags: ['Python', 'Distributed', 'Consensus', 'Education'],
    color: '#6ee7b7',
    github: '#', demo: '#',
  },
];

function Card({ project, i }: { project: typeof projects[0]; i: number }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-60px' });

  return (
    <motion.div
      ref={ref}
      className="project"
      initial={{ opacity: 0, y: 40 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.45, delay: i * 0.08, ease: [0.16, 1, 0.3, 1] }}
    >
      <div className="project-accent" style={{ background: `linear-gradient(90deg, ${project.color}, transparent)` }} />
      <div className="project-num">0{i + 1}</div>
      <h3>{project.title}</h3>
      <div className="project-desc">{project.desc}</div>
      <div className="project-tags">
        {project.tags.map(t => (
          <span key={t} className="project-tag">{t}</span>
        ))}
      </div>
      <div className="project-links">
        <a href={project.github} className="project-link">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"/></svg> Source
        </a>
        <a href={project.demo} className="project-link">
          <ExternalLink size={14} /> Live
        </a>
      </div>
    </motion.div>
  );
}

export default function Projects() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section id="projects">
      <div className="section-inner" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        >
          <div className="eyebrow"><svg className="leaf-accent" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M12 2C12 2 6 6 4 12C2 18 8 22 12 22C16 22 22 18 20 12C18 6 12 2 12 2Z" fill="rgba(34,197,94,.3)"/></svg>Projects</div>
          <h2>What I've<br /><span style={{ color: 'var(--text-dim)' }}>built.</span></h2>
        </motion.div>

        <div className="projects">
          {projects.map((p, i) => (
            <Card key={p.title} project={p} i={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
