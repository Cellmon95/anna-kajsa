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
  const imgUrl = urlForImage(
    props.image,
    props.image.hotspot?.x || 0,
    props.image.hotspot?.y || 0
  );

  return (
    <>
      <section
        className={styles.hero}
        style={{ backgroundImage: `url(${imgUrl})` }}
      ></section>
    </>
  );
}
