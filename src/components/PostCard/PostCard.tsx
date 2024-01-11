import React from 'react';
import styles from './PostCard.module.css';
import { useRouter } from 'next/navigation';
import Link from 'next/link';

interface PostCardProps {
  title: string;
  description: string;
  image?: string;
}

const PostCard = (props: PostCardProps) => {
  const router = useRouter();

  return (
    <Link href={'/creative/blog-posts/brick'} className={styles.btn}>
      <h1 className={styles.title}>{props.title}</h1>
      <div className={styles.infoContainer}>
        <img className={styles.img} src={props.image} alt="post cover image" />
        <p className={styles.p}>{props.description}</p>
      </div>
    </Link>
  );
};

export default PostCard;
