"use client";

import Carousel from "../Carousel/Carousel";
import HeroHome from "../HeroHome/heroHome";
import TitledParagraph from "../TiltledParagraph/titledParagraph";

interface PageBuilderProps {
  pageBuilderData: any;
}

/**
 * Accepts pageBuilderData and builds all the Sanity schema components.
 * @returns All Sanity schema components.
 */
export default function PageBuilder(props: PageBuilderProps) {
  const pageBuilderData: any[] = props.pageBuilderData;

  return (
    <>
      <main>
        {pageBuilderData.map((pageBlockData) => buildComponent(pageBlockData))}
      </main>
    </>
  );
}

/**
 * Builds Sanity schema components from schema block data.
 * @param schemaBlocktData Json data from a Sanity schema block.
 * @returns A Sanity schema component.
 */
function buildComponent(schemaBlocktData: any) {
  switch (schemaBlocktData._type) {
    case "titledParagraph":
      return (
        <TitledParagraph
          key={schemaBlocktData._key}
          backgroundColor="#ffffff"
          heading={schemaBlocktData.heading}
          content={schemaBlocktData.content}
        ></TitledParagraph>
      );

    case "homePageHero":
      return (
        <HeroHome
          key={schemaBlocktData._key}
          heroParagraph={schemaBlocktData.text}
        ></HeroHome>
      );

    case "navCardCarousel":
      return (
        <Carousel
          key={schemaBlocktData._key}
          childre={schemaBlocktData.content}
        ></Carousel>
      );
      break;
    default:
      break;
  }
}
