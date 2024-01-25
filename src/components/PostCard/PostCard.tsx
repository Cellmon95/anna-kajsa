import React from 'react';
import styles from './PostCard.module.css';
import { useRouter } from 'next/navigation';
import Link from 'next/link';

interface PostCardProps {
  title: string;
  description: string;
  url: string;
  image?: string;
}

const PostCard = (props: PostCardProps) => {
  const router = useRouter();
  const trimedDescription = props.description.substring(0, 230) + '...';

  return (
    <Link href={props.url} className={styles.btn}>
      <h1 className={styles.title}>{props.title}</h1>
      <div className={styles.infoContainer}>
        <img className={styles.img} src={props.image} alt="post cover image" />
        <p className={styles.p}>{trimedDescription}</p>
      </div>
    </Link>
  );
};

export default PostCard;
