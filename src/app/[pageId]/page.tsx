<<<<<<< HEAD
import Image from "next/image";
import styles from "./page.module.css";
import TitledParagraph from "@/components/TiltledParagraph/titledParagraph";
import Quote from "@/components/Quote/Quote";
import { client } from "../../../sanity/lib/client";
import HeroHome from "@/components/HeroHome/heroHome";
import Carousel from "@/components/carousel/Carousel";
import PageBuilder from "@/components/PageBuilder/PageBuilder";

export default async function Home({ params }: { params: { pageId: string } }) {
  const pageData = await client.fetch(
    "*[_type == 'page' && slug.current=='" + params.pageId + "'][0]"
  );

  const pageBuilderData = pageData.pageBuilder;
=======
import styles from './page.module.css';
import TitledParagraph from '@/components/TiltledParagraph/titledParagraph';
import HeroHome from '@/components/HeroHome/heroHome';
import { getPage, getPages } from '../../../sanity/sanity-utils';

export default async function Home({ params }: { params: { pageId: string } }) {
  const pageData = await getPage(params.pageId);
  const pageBuilder: any[] = pageData.pageBuilder;

  function buildComponent(componentJson: any) {
    switch (componentJson._type) {
      case 'titledParagraph':
        return (
          <TitledParagraph
            backgroundColor="#ffffff"
            heading={componentJson.heading}
            content={componentJson.content}
          ></TitledParagraph>
        );

      case 'homePageHero':
        return <HeroHome heroParagraph={componentJson.text}></HeroHome>;

      case 'navCardCarousel':
        break;
      default:
        break;
    }
  }
>>>>>>> main

  return (
    <>
      <PageBuilder pageBuilderData={pageBuilderData}></PageBuilder>
    </>
  );
}

export async function generateStaticParams() {
  const pageData = await getPages();

  return pageData.map((page: any) => ({
    pageId: page.pageId,
  }));
}
