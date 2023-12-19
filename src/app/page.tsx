import Image from "next/image";
import styles from "./page.module.css";
import TitledParagraph from "@/components/TiltledParagraph/titledParagraph";
import Quote from "@/components/Quote/Quote";
import { client } from "../../sanity/lib/client";
import HeroHome from "@/components/HeroHome/heroHome";

export default async function Home() {
  const pageData = await fetchData();
  console.log(pageData);
  return (
    <main className={styles.main}>
      <h1></h1>
    </main>
  );
}

export async function fetchData() {
  const pageData = await client.fetch(
    "*[_type == 'page' && slug.current=='home-page']"
  );

  return pageData;
}
