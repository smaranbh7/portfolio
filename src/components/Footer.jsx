import React from 'react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { HiOutlineMail } from 'react-icons/hi';

const socials = [
  { label: 'GitHub', href: 'https://github.com/smaranbh7', icon: FaGithub },
  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/smaranbhattarai/', icon: FaLinkedin },
  { label: 'Email', href: 'mailto:bhsmaran@gmail.com', icon: HiOutlineMail },
];

const Footer = () => {
  return (
    <div className="w-full bg-ink border-t border-border py-8">
      <div className="max-w-[900px] mx-auto px-6 sm:px-8 flex flex-col items-center gap-4">
        <div className="flex items-center gap-6 lg:hidden">
          {socials.map(({ label, href, icon: Icon }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={label}
              className="text-ivory-muted hover:text-signal transition-colors duration-300"
            >
              <Icon size={18} />
            </a>
          ))}
        </div>
        <p className="font-mono text-xs text-ivory-muted">
          &copy; {new Date().getFullYear()} Smaran Bhattarai. Built with React & Tailwind.
        </p>
      </div>
    </div>
  );
};

export default Footer;
