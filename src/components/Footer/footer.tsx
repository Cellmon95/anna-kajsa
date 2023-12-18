import Link from 'next/link';
import styles from './footer.module.css';

export default function Footer() {
  return (
    <>
      <footer className={styles.footer}>
        <div className={styles.collumns}>
          <Link href={'/'}>Home</Link>
          <Link href={'/'}>Consult</Link>
          <Link href={'/'}>philanthropic</Link>
          <Link href={'/'}>Creative</Link>
          <Link href={'/'}>Contact</Link>
        </div>
        <div className={styles.collumns}>
          <p>email@email.com</p> <p></p> <p>aaa</p> <p>aaa</p>
        </div>
      </footer>
    </>
  );
}
