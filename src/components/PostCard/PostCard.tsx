import React from 'react';
import styles from './PostCard.module.css';
import Link from 'next/link';
import { Url } from 'next/dist/shared/lib/router/router';
import Image from 'next/image';

interface PostCardProps {
  title: string;
  description: string;
  url?: string | Url;
  img: string;
}

const PostCard = (props: PostCardProps) => {
  const url = props.url || '/'; // fallback url to home page
  const router = useRouter();
  const trimedDescription = props.description.substring(0, 230) + '...';

  return (
    <Link href={url} className={styles.btn}>
      <h1 className={styles.title}>{props.title}</h1>
      <div className={styles.infoContainer}>
        {/* <img className={styles.img} src={props.image} alt="post cover image" /> */}
        <Image
          className={styles.img}
          src={props.img}
          alt="post cover image"
          width={200}
          height={200}
        />
        <p className={styles.p}>{props.description}</p>
        <img className={styles.img} src={props.image} alt="post cover image" />
        <p className={styles.p}>{trimedDescription}</p>
      </div>
    </Link>
  );
};

export default PostCard;
