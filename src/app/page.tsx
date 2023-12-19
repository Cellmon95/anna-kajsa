import Image from 'next/image';
import styles from './page.module.css';
import TitledParagraph from '@/components/TiltledParagraph/titledParagraph';
import Quote from '@/components/Quote/Quote';
import { client } from '../../sanity/lib/client';

export default function Home() {
  return (
    <main className={styles.main}>
      <Quote></Quote>
    </main>
  );
}
