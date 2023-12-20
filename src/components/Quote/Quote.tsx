'use client';
import styles from './quote.module.css';

interface QuoteProps {
  quote: string;
  author: string;
}

export default function Quote(props: QuoteProps) {
  return (
    <>
      <div className={styles.quoteWrapper}>
        <p className={styles.quote}>{props.quote}</p>
        <p className={styles.author}>{props.author}</p>
      </div>
    </>
  );
}
