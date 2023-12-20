import Image from "next/image";
import styles from "./page.module.css";
import TitledParagraph from "@/components/TiltledParagraph/titledParagraph";
import Quote from "@/components/Quote/Quote";
import { client } from "../../sanity/lib/client";
import HeroHome from "@/components/HeroHome/heroHome";
import Carousel from "@/components/carousel/Carousel";

export default async function Home() {
  const pageData = await fetchData();
  const pageBuilder: any[] = pageData.pageBuilder;

  function buildComponent(componentJson: any) {
    switch (componentJson._type) {
      case "titledParagraph":
        return <TitledParagraph backgroundColor="#ffffff"></TitledParagraph>;
        break;

      default:
        break;
    }
  }

  return (
    <main className={styles.main}>
      {pageBuilder.map((pageElement) => (
        <h1>{pageElement._type}</h1>
      ))}
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
