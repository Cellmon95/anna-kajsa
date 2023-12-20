import Image from 'next/image';
import styles from './page.module.css';
import TitledParagraph from '@/components/TiltledParagraph/titledParagraph';
import Quote from '@/components/Quote/Quote';
import { client } from '../../sanity/lib/client';
import HeroHome from '@/components/HeroHome/heroHome';


export default async function Home() {
  const pageData = await fetchData();

  return (
    <main className={styles.main}>

      <h1>{pageData.title}</h1>
    </main>
  );
}

// TODO:: make safer
export async function fetchData() {
  let pageData = [];

  try {
    pageData = await client.fetch(
      "*[_type == 'page' && slug.current=='home-page']"
    );

    pageData = pageData.pop();
  } catch (error) {
    console.error(error);
  }

  return pageData;
}
