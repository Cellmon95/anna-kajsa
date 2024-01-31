import { ReactNode } from 'react';
import styles from './GeneralCarousel.module.css';
import NavCard from '../navcard/NavCard';
import { NavCardProps } from '../navcard/NavCard';

interface GeneralCarouselProps {
  children: any;
}

const GeneralCarousel = (props: GeneralCarouselProps) => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.carouselContainer}>{props.children}</div>
    </div>
  );
};

export default GeneralCarousel;
