'use client';
import React from 'react';
import styles from './PostCard.module.css';
import { useRouter } from 'next/navigation';

interface PostCardProps {
  title: string;
  description: string;
  image?: string;
}

const PostCard = (props: PostCardProps) => {
  const router = useRouter();

  return (
    <button
      onClick={() => {
        // will probably change to something like [page]/[post]
        router.push('/consult');
      }}
      className={styles.btn}
    >
      <h1 className={styles.title}>{props.title}</h1>
      <div className={styles.infoContainer}>
        <img className={styles.img} src={props.image} alt="post cover image" />
        <p className={styles.p}>{props.description}</p>
      </div>
    </button>
  );
};

export default PostCard;
