import React from "react";
import styles from "./NavCard.module.css";
import Link from "next/link";
import { Url } from "next/dist/shared/lib/router/router";

export interface NavCardProps {
  title: string;
  description: string;
  image?: string;
  link?: string | Url;
  linktitle?: string;
}

const NavCard = (props: NavCardProps) => {
  console.log(props.title);
  return (
    <div className={styles.wrapper}>
      <h1 className={styles.title}>{props.title}</h1>
      <div className={styles.infoContainer}>
        <p className={styles.p}>{props.description}</p>
        <img className={styles.img} src={props.image} alt="cover image" />
        <div className={styles.linkContainer}>
          {/* TODO: Remove ts ignore */}
          {/* @ts-ignore */}
          <Link className={styles.textColor} href={props.link}>
            {props.linktitle}
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NavCard;
