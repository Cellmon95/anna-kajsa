import React from 'react';
import styles from './NavCard.module.css';
import Link from 'next/link';
import { Url } from 'next/dist/shared/lib/router/router';
import { urlForImage } from '../../../sanity/lib/image';
import { Image } from 'sanity';

export interface NavCardProps {
  title: string;
  description: string;
  image: Image;
  link?: string | Url;
  linktitle?: string;
  linkColor: string;
}

const NavCard = (props: NavCardProps) => {
  const imageUrl = urlForImage(props.image, 400);

  const linkContainerColor: React.CSSProperties = {
    backgroundColor: props.linkColor,
  };

  return (
    <Link className={styles.textColor} href={props.link || '/'}>
      <div className={styles.wrapper}>
        <h1 className={styles.title}>{props.title}</h1>
        <div className={styles.infoContainer}>
          <p className={styles.p}>{props.description}</p>
          <img className={styles.img} src={imageUrl} alt={props.title} />
          <div className={styles.linkContainer} style={linkContainerColor}>
            <span>{props.linktitle}</span>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default NavCard;
