'use client';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import styles from './navbar.module.css';

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
    <header className={styles.header}>
      <div
        className={`${styles.navWrapper} ${
          scrollDistans > 0 && burgerMenuOpen !== true
            ? styles.navWrapperActive
            : ''
        }`}
      >
        <h3>anna-kajsa</h3>
        <motion.nav
          className={styles.motionNav}
          variants={variant}
          transition={{ duration: 0.5, ease: 'easeInOut' }} // define the framer motion transition
          animate={burgerMenuOpen ? 'active' : 'inactive'} // tells framer when to transition
        >
          <div className={styles.buttonContainer}>
            <div></div>
            <button
              className={styles.iconButton}
              onClick={() => setBurgerMenuOpen(!burgerMenuOpen)}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="30"
                width="26"
                viewBox="0 0 384 512"
              >
                <path d="M376.6 84.5c11.3-13.6 9.5-33.8-4.1-45.1s-33.8-9.5-45.1 4.1L192 206 56.6 43.5C45.3 29.9 25.1 28.1 11.5 39.4S-3.9 70.9 7.4 84.5L150.3 256 7.4 427.5c-11.3 13.6-9.5 33.8 4.1 45.1s33.8 9.5 45.1-4.1L192 306 327.4 468.5c11.3 13.6 31.5 15.4 45.1 4.1s15.4-31.5 4.1-45.1L233.7 256 376.6 84.5z" />
              </svg>
            </button>
          </div>
          <Link
            className={styles.links}
            onClick={() => setBurgerMenuOpen(!burgerMenuOpen)}
            href={'/'}
          >
            Home
          </Link>
          <Link
            className={styles.links}
            onClick={() => setBurgerMenuOpen(!burgerMenuOpen)}
            href={'/About'}
          >
            consulting work
          </Link>
          <Link
            className={styles.links}
            onClick={() => setBurgerMenuOpen(!burgerMenuOpen)}
            href={'/Work'}
          >
            philanthropic work
          </Link>
          <Link
            className={`${styles.lastLink} ${styles.links}`}
            onClick={() => setBurgerMenuOpen(!burgerMenuOpen)}
            href={'/Work'}
          >
            Creative work
          </Link>
        </motion.nav>
        <button
          className={styles.iconButton}
          onClick={() => setBurgerMenuOpen(!burgerMenuOpen)}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="30"
            width="28"
            viewBox="0 0 448 512"
          >
            <path d="M0 96C0 78.3 14.3 64 32 64H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H416c17.7 0 32 14.3 32 32z" />
          </svg>
        </button>
      </div>
    </header>
  );
}
