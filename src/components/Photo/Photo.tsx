'use client';

import { Image as Img } from 'sanity';
import { urlForImage } from '../../../sanity/lib/image';
import Image from 'next/image';
import style from './Photo.module.css';

interface PhotoProps {
  alt: string;
  img: Img;
}

export default function Photo(props: PhotoProps) {
  const imgUrl = urlForImage(props.img, 1920);
  return (
    <>
      <div className={style.photoContainer}>
        <Image
          src={imgUrl}
          alt={props.alt}
          height={500}
          width={1920}
          style={{
            width: '100%',
            maxWidth: '800px',
            height: 'auto',
          }}
        ></Image>
      </div>
    </>
  );
}
