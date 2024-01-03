'use client';

import { Image as Img } from 'sanity';
import { urlForImage } from '../../../sanity/lib/image';
import Image from 'next/image';
import { relative } from 'path';

interface PhotoProps {
  alt: string;
  img: Img;
}

export default function Photo(props: PhotoProps) {
  const imgUrl = urlForImage(props.img);

  return (
    <>
      <Image src={imgUrl} alt={props.alt} width={412} height={500}></Image>
    </>
  );
}
