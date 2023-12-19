"use client";
import styles from "./quote.module.css";

export default function Quote() {
  return (
    <>
      <div className={styles.quoteWrapper}>
        <p className={styles.quote}>
          “Be who you are and say what you feel, because those who mind
          don&#39;t matter, and those who matter don&#39;t mind.”
        </p>
        <p className={styles.author}>Bernard M. Baruch</p>
      </div>
    </>
  );
}
