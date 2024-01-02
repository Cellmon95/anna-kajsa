'use client';
import styles from './heroHome.module.css';
import type { Image } from 'sanity';

interface HeroHomeProps {
  heroParagraph: string;
}

export default function HeroHome(props: HeroHomeProps) {
  return (
    <>
      <section className={styles.hero}>
        <p className={styles.heroParagraph}>{props.heroParagraph}</p>
      </section>
    </>
  );
}
