'use client';
import styles from './Carousel.module.css';
import NavCard from '../navcard/NavCard';
import { NavCardProps } from '../navcard/NavCard';

interface CarouselProps {
  children: any;
}

const Carousel = (props: CarouselProps) => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.carouselContainer}>
        {/* {props.children} */}
        {props.children.map((child: any) => {
          const navCardData: NavCardProps = {
            description: child.description,
            title: child.title,
            image: child.image,
            link: child.link,
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
