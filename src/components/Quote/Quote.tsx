"use client";
import styles from "./quote.module.css";

export default function Quote() {
  return (
    <>
      <div className={styles.quoteWrapper}>
        <p className={styles.quote}>  
        </p>
        <p className={styles.author}>
        Bernard M. Baruch
        </p>
    </div>
    </>
  );
}
