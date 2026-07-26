import React, { useState } from 'react';
import { FaBars, FaTimes, FaGithub, FaLinkedin } from 'react-icons/fa';
import { HiOutlineMail } from 'react-icons/hi';
import { Link } from 'react-scroll';

const sections = ['home', 'about', 'skills', 'work', 'contact'];

const socials = [
  { label: 'GitHub', href: 'https://github.com/smaranbh7', icon: FaGithub },
  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/smaranbhattarai/', icon: FaLinkedin },
  { label: 'Email', href: 'mailto:bhsmaran@gmail.com', icon: HiOutlineMail },
];

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const closeNav = () => setNav(false);

  return (
    <>
      <div className="fixed top-0 w-full h-[72px] flex justify-between items-center px-6 sm:px-10 bg-ink/85 backdrop-blur-sm border-b border-border z-50">
        <Link to="home" smooth={true} duration={500} className="font-mono text-ivory text-sm cursor-pointer">
          smaranbh<span className="text-signal">.dev</span>
        </Link>

        <ul className="hidden md:flex items-center gap-8">
          {sections.map((section) => (
            <li key={section}>
              <Link
                to={section}
                smooth={true}
                duration={500}
                offset={section === 'home' ? 0 : -72}
                spy={true}
                activeClass="!text-signal"
                className="nav-link capitalize"
              >
                {section}
              </Link>
            </li>
          ))}
        </ul>

        <div
          onClick={() => setNav(!nav)}
          className="md:hidden z-10 text-ivory hover:text-signal transition-colors duration-300 cursor-pointer"
        >
          {!nav ? <FaBars size={22} /> : <FaTimes size={22} />}
        </div>
      </div>

      <ul
        className={
          nav
            ? 'fixed inset-0 z-40 bg-ink flex flex-col justify-center items-center gap-2'
            : 'hidden'
        }
      >
        {sections.map((section) => (
          <li key={section} className="py-4">
            <Link
              onClick={closeNav}
              to={section}
              smooth={true}
              duration={500}
              offset={section === 'home' ? 0 : -72}
              className="nav-link !text-2xl capitalize"
            >
              {section}
            </Link>
          </li>
        ))}
      </ul>

      <div className="hidden lg:flex fixed flex-col gap-5 items-center bottom-0 left-8 z-40">
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
        <div className="w-px h-24 bg-border" />
      </div>
    </>
  );
};

export default Navbar;
