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
  const imageUrl = urlForImage(props.image);

  const linkContainerColor: React.CSSProperties = {
    backgroundColor: props.linkColor,
  };

  return (
    <div className={styles.wrapper}>
      <h1 className={styles.title}>{props.title}</h1>
      <div className={styles.infoContainer}>
        <p className={styles.p}>{props.description}</p>
        <img className={styles.img} src={imageUrl} alt={props.title} />
        <div className={styles.linkContainer} style={linkContainerColor}>
          {/* TODO: Remove ts ignore */}
          {/* @ts-ignore */}
          <Link className={styles.textColor} href={props.link}>
            {props.linktitle}
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NavCard;
