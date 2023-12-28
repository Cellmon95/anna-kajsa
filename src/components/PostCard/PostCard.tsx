'use client';
import React from 'react';
import styles from './PostCard.module.css';

interface PostCardProps {
  title: string;
  description: string;
  image?: string;
  link?: string;
}

const PostCard = (props: PostCardProps) => {
  return (
    <button className={styles.btn}>
      <h1 className={styles.title}>{props.title}</h1>
      <div className={styles.infoContainer}>
        <img className={styles.img} src={props.image} alt="post cover image" />
        <p className={styles.p}>{props.description}</p>
      </div>
    </button>
  );
};

export default PostCard;
