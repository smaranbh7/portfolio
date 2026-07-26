import React, { useState } from 'react';
import { motion } from 'framer-motion';

const FORM_ENDPOINT = 'https://getform.io/f/bgdymova';

const Contact = () => {
  const [status, setStatus] = useState('idle'); // idle | sending | success | error

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('sending');
    const form = e.target;
    try {
      const response = await fetch(FORM_ENDPOINT, {
        method: 'POST',
        body: new FormData(form),
        headers: { Accept: 'application/json' },
      });
      if (response.ok) {
        setStatus('success');
        form.reset();
      } else {
        setStatus('error');
      }
    } catch {
      setStatus('error');
    }
  };

  return (
    <div name="contact" className="w-full py-24 bg-ink-soft flex justify-center items-center px-6 sm:px-8">
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="max-w-[560px] w-full"
      >
        <p className="eyebrow mb-3">Contact</p>
        <h2 className="section-heading mb-3">Let's talk</h2>
        <p className="text-ivory-muted mb-8">
          Send a message below, or reach me directly at{' '}
          <a href="mailto:bhsmaran@gmail.com" className="text-signal hover:underline">
            bhsmaran@gmail.com
          </a>
          .
        </p>

        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <div>
            <label htmlFor="name" className="font-mono text-xs uppercase tracking-wide text-ivory-muted">
              Name
            </label>
            <input
              id="name"
              name="name"
              type="text"
              required
              className="mt-1.5 w-full bg-surface border border-border rounded px-3 py-2.5 text-ivory placeholder:text-ivory-muted/60 focus:outline-none focus:border-signal transition-colors duration-200"
              placeholder="Your name"
            />
          </div>
          <div>
            <label htmlFor="email" className="font-mono text-xs uppercase tracking-wide text-ivory-muted">
              Email
            </label>
            <input
              id="email"
              name="email"
              type="email"
              required
              className="mt-1.5 w-full bg-surface border border-border rounded px-3 py-2.5 text-ivory placeholder:text-ivory-muted/60 focus:outline-none focus:border-signal transition-colors duration-200"
              placeholder="you@example.com"
            />
          </div>
          <div>
            <label htmlFor="message" className="font-mono text-xs uppercase tracking-wide text-ivory-muted">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              rows="6"
              required
              className="mt-1.5 w-full bg-surface border border-border rounded px-3 py-2.5 text-ivory placeholder:text-ivory-muted/60 focus:outline-none focus:border-signal transition-colors duration-200"
              placeholder="What's on your mind?"
            />
          </div>

          <button
            type="submit"
            disabled={status === 'sending'}
            className="font-mono text-sm text-ink bg-signal px-6 py-3 rounded mt-2 hover:brightness-110 transition-all duration-300 disabled:opacity-60 disabled:cursor-not-allowed"
          >
            {status === 'sending' ? 'Sending...' : "Send message"}
          </button>

          {status === 'success' && (
            <p className="font-mono text-sm text-online">Message sent. I'll get back to you soon.</p>
          )}
          {status === 'error' && (
            <p className="font-mono text-sm text-red-400">
              Something went wrong. Email me directly at bhsmaran@gmail.com instead.
            </p>
          )}
        </form>
      </motion.div>
    </div>
  );
};

export default Contact;
