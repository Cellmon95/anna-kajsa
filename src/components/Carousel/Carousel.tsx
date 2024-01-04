"use client";
import { ReactNode } from "react";
import styles from "./Carousel.module.css";
import NavCard from "../navcard/NavCard";
import { NavCardProps } from "../navcard/NavCard";

interface CarouselProps {
  childre: any;
}

const Carousel = (props: CarouselProps) => {

  return (
    <div className={styles.wrapper}>
      <div className={styles.carouselContainer}>
        {props.childre.map((child: any) => {
          const navCardData: NavCardProps = {
            description: child.description,
            title: child.title,
            image:
              "https://cdn.sanity.io/images/eac4lwcz/production/65f450854c5f22f6fa47a5922344f0f80a26da2a-2432x3648.jpg",
            link: "/",
            linktitle: "test",
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
