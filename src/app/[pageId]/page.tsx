import Image from "next/image";
import styles from "./page.module.css";
import TitledParagraph from "@/components/TiltledParagraph/titledParagraph";
import Quote from "@/components/Quote/Quote";
import { client } from "../../../sanity/lib/client";
import HeroHome from "@/components/HeroHome/heroHome";
import Carousel from "@/components/Carousel/Carousel";

export default async function Home({ params }: { params: { pageId: string } }) {
  const pageData = await client.fetch(
    "*[_type == 'page' && slug.current=='" + params.pageId + "'][0]"
  );
  const pageBuilder: any[] = pageData.pageBuilder;

  function buildComponent(componentJson: any) {
    switch (componentJson._type) {
      case "titledParagraph":
        return (
          <TitledParagraph
            backgroundColor="#ffffff"
            heading={componentJson.heading}
            content={componentJson.content}
          ></TitledParagraph>
        );

      case "homePageHero":
        return <HeroHome heroParagraph={componentJson.text}></HeroHome>;

      case "navCardCarousel":
        break;
      default:
        break;
    }
  }

  return (
    <main className={styles.main}>
      {pageBuilder.map((pageElement) => buildComponent(pageElement))}
    </main>
  );
}

export async function generateStaticParams() {
  let pageData = [];

  try {
    pageData = await client.fetch("*[_type == 'page']");
  } catch (error) {
    console.error(error);
  }

  return pageData.map((page: any) => ({
    pageId: page.pageId,
  }));
}
