'use client';
import { urlForImage } from '../../../sanity/lib/image';
import styles from './heroHome.module.css';
import type { Image } from 'sanity';

interface HeroHomeProps {
  heroParagraph: string;
  img: Image;
}

export default function HeroHome(props: HeroHomeProps) {
  //TODO: Fix not defined error at window
  const innerWidth = window.innerWidth;
  console.log(innerWidth);
  let imgWidth = 0;

  if (innerWidth < 760) {
    imgWidth = 760;
  }
  if (innerWidth < 1024) {
    imgWidth = 1024;
  }
  if (innerWidth > 1024) {
    imgWidth = 1920;
  }

  const imgUrl = urlForImage(props.img, imgWidth);

  return (
    <>
      <section
        className={styles.hero}
        style={{ backgroundImage: `url(${imgUrl})` }}
      >
        <p className={styles.heroParagraph}>{props.heroParagraph}</p>
      </section>
    </>
  );
}
