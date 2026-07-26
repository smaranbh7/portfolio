import React from 'react';
import { motion } from 'framer-motion';
import myPhoto from '../assets/myPhoto.png';

const spec = [
  {
    label: 'Role',
    value: 'Software Engineer, Vitia (Full-time)',
  },
  {
    label: 'Education',
    value:
      "B.S. Computer Science, Northern Kentucky University (minor in Mathematics & Information Technology), Class of 2026",
  },
  {
    label: 'Focus',
    value: 'Full-stack development, cloud platforms, and microservice architecture',
  },
  {
    label: 'Core stack',
    value: 'Java, Python, JavaScript',
  },
  {
    label: 'Based in',
    value: 'Cincinnati, OH',
  },
  {
    label: 'Off duty',
    value: 'Soccer, guitar, and side projects',
  },
];

const About = () => {
  return (
    <div name="about" className="w-full py-24 bg-ink">
      <div className="max-w-[900px] mx-auto px-6 sm:px-8">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-12"
        >
          <p className="eyebrow mb-3">About</p>
          <h2 className="section-heading">A quick spec sheet</h2>
        </motion.div>

        <div className="grid md:grid-cols-[340px_1fr] gap-10 items-stretch">
          <div className="w-full max-w-[340px] h-full mx-auto md:mx-0">
            <motion.img
              initial={{ opacity: 0, x: -16 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              src={myPhoto}
              alt="Smaran Bhattarai"
              className="rounded-lg w-full h-full object-contain border border-border"
            />
          </div>

          <motion.dl
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="border-t border-border"
          >
            {spec.map(({ label, value }) => (
              <div
                key={label}
                className="grid grid-cols-[110px_1fr] sm:grid-cols-[140px_1fr] gap-4 py-4 border-b border-border"
              >
                <dt className="font-mono text-xs uppercase tracking-wide text-signal pt-0.5">
                  {label}
                </dt>
                <dd className="text-ivory-muted leading-relaxed">{value}</dd>
              </div>
            ))}
          </motion.dl>
        </div>
      </div>
    </div>
  );
};

export default About;
