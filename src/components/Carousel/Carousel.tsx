'use client';
import { Children, ReactNode } from 'react';
import styles from './Carousel.module.css';
import NavCard from '../navcard/NavCard';
import { NavCardProps } from '../navcard/NavCard';

interface CarouselProps {
  childre: any;
}

const Carousel = (props: CarouselProps) => {
  console.log(props.childre);
  return (
    <div className={styles.wrapper}>
      <div className={styles.carouselContainer}>
        {props.childre.map((child: any) => {
          const navCardData: NavCardProps = {
            description: child.description,
            title: child.title,
            image: child.image,
            link: '/',
            linktitle: child.linkTitle,
            linkColor: child.linkCalor || '#ffffff',
          };
          return <NavCard key={child._key} {...navCardData}></NavCard>;
        })}
        {/* <div className={styles.item}>Item</div>
        <div className={styles.item}>Item</div> */}
      </div>
    </div>
  );
};

export default Carousel;
