'use client';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';

export default function Navbar() {
  const [burgerMenuOpen, setBurgerMenuOpen] = useState(false);
  const [scrollDistans, setScrollDistans] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollDistans(window.scrollY);
    };
    window.addEventListener('scroll', handleScroll);
  }, []);

  const variant = {
    // define the direction of the framer motion transition
    active: { x: '0%' },
    inactive: {
      x: '100%',
    },
  };

  return (
    <header className="">
      <div className={`  ${scrollDistans > 0 ? '' : ''}`}>
        <h3 className="">Styrbjörn</h3>
        <motion.nav
          className=""
          variants={variant}
          transition={{ duration: 0.5, ease: 'easeInOut' }} // define the framer motion transition
          animate={burgerMenuOpen ? 'active' : 'inactive'} // tells framer when to transition
        >
          <div className="">
            <div></div>
            <button
              className=""
              onClick={() => setBurgerMenuOpen(!burgerMenuOpen)}
            >
              close
            </button>
          </div>
          <Link onClick={() => setBurgerMenuOpen(!burgerMenuOpen)} href={'/'}>
            Home
          </Link>
          <Link
            onClick={() => setBurgerMenuOpen(!burgerMenuOpen)}
            href={'/About'}
          >
            About
          </Link>
          <Link
            onClick={() => setBurgerMenuOpen(!burgerMenuOpen)}
            href={'/Work'}
          >
            Work
          </Link>
        </motion.nav>
        <button className="" onClick={() => setBurgerMenuOpen(!burgerMenuOpen)}>
          open
        </button>
      </div>
    </header>
  );
}
