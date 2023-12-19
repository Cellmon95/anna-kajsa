import Link from 'next/link';
import styles from './footer.module.css';

export default function Footer() {
  return (
    <>
      <footer className={styles.footer}>
        <h3 className={styles.anna}>anna-kajsa.se</h3>
        <div className={styles.colContaier}>
          <div className={styles.collumns}>
            <Link href={'/'}>Home</Link>
            <Link href={'/consult'}>Consult</Link>
            <Link href={'/philanthropy'}>philanthropic</Link>
            <Link href={'/creative'}>Creative</Link>
            <Link href={'/contact'}>Contact</Link>
          </div>
          <div className={styles.collumns}>
            <p>email@email.com</p> <p>Phone: +46 702-xxx xxx</p>{' '}
            <p>a legit Street</p>
          </div>
        </div>
      </footer>
    </>
  );
}
