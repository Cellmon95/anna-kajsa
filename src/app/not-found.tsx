import Link from 'next/link';
import styles from './not-found.module.css';

export default function NotFound() {
  return (
    <section className={styles.notFoundSection}>
      <h2>Page Not Found</h2>
      <p>Could not find requested page</p>
      <Link href="/">Return Home</Link>
    </section>
  );
}
