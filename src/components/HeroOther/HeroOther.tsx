'use client';
import { Image } from 'sanity';
import { urlForImage } from '../../../sanity/lib/image';
import styles from './heroOther.module.css';
import { url } from 'inspector';
interface HeroHomeProps {
  image: Image;
}

export default function HeroOther(props: HeroHomeProps) {
  console.log(props.image.hotspot);
  const imgUrl = urlForImage(props.image);

  return (
    <>
      <section
        className={styles.hero}
        style={{ backgroundImage: `url(${imgUrl})` }}
      ></section>
    </>
  );
}
