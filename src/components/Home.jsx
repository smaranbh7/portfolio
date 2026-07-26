import React from 'react';
import { HiArrowNarrowRight } from 'react-icons/hi';
import { motion } from 'framer-motion';
import { Link } from 'react-scroll';

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.12, delayChildren: 0.1 },
  },
};

const item = {
  hidden: { opacity: 0, y: 16 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } },
};

const Home = () => {
  return (
    <div id="home" name="home" className="relative w-full min-h-screen overflow-hidden bg-ink">
      <div className="absolute inset-0 bg-grid-pattern bg-grid [mask-image:radial-gradient(ellipse_60%_60%_at_50%_0%,black,transparent)]" />

      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="relative z-10 max-w-[900px] mx-auto px-6 sm:px-8 flex flex-col justify-center min-h-screen"
      >
        <motion.div variants={item} className="flex items-center gap-2 mb-6">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-online opacity-75" />
            <span className="relative inline-flex rounded-full h-2 w-2 bg-online" />
          </span>
          <p className="eyebrow">Software Engineer @ Vitia · Cincinnati, OH</p>
        </motion.div>

        <motion.h1 variants={item} className="text-4xl sm:text-6xl font-display font-semibold text-ivory leading-[1.1]">
          Smaran Bhattarai
        </motion.h1>

        <motion.h2 variants={item} className="text-2xl sm:text-4xl font-display font-medium text-ivory-muted mt-3">
          I build backend systems and full-stack apps that ship.
        </motion.h2>

        <motion.p variants={item} className="text-ivory-muted py-6 max-w-[620px] text-base sm:text-lg leading-relaxed">
          CS senior at Northern Kentucky University. Comfortable across Java/Spring Boot,
          React, and the message queues and databases that hold it all together,
          and currently exploring cloud infrastructure and distributed systems.
        </motion.p>

        <motion.div variants={item} className="flex flex-wrap items-center gap-4">
          <Link to="work" smooth={true} duration={500} offset={-72}>
            <button className="font-mono text-sm text-ink bg-signal px-6 py-3 flex items-center gap-2 rounded hover:brightness-110 transition-all duration-300">
              View Work
              <HiArrowNarrowRight />
            </button>
          </Link>
          <Link to="contact" smooth={true} duration={500} offset={-72}>
            <button className="font-mono text-sm text-ivory border border-border px-6 py-3 rounded hover:border-signal hover:text-signal transition-all duration-300">
              Get in Touch
            </button>
          </Link>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Home;
