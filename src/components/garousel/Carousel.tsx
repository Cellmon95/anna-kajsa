'use client';
import { ReactNode } from 'react';
import styles from './Carousel.module.css';

interface CarouselProps {
  children: ReactNode;
}

const Carousel = (props: CarouselProps) => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.carouselContainer}>
        {props.children}
        {/* <div className={styles.item}>Item</div>
        <div className={styles.item}>Item</div> */}
      </div>
    </div>
  );
};

export default Carousel;
