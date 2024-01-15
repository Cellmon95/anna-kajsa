'use client';

import { urlForImage } from '../../../sanity/lib/image';
import Carousel from '../Carousel/Carousel';
import HeroHome from '../HeroHome/heroHome';
import HeroOther from '../HeroOther/HeroOther';
import Photo from '../Photo/Photo';
import PostCard from '../PostCard/PostCard';
import Quote from '../Quote/Quote';
import TitledParagraph from '../TiltledParagraph/titledParagraph';
import PostContainer from '../PostContainer/PostContainer';
import GeneralCarousel from '../GeneralCarousel/GeneralCarousel';

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
    case 'titledParagraph':
      return (
        <TitledParagraph
          key={schemaBlocktData._key}
          backgroundColor="#ffffff"
          heading={schemaBlocktData.heading}
          content={schemaBlocktData.content}
        ></TitledParagraph>
      );

    case 'homePageHero':
      return (
        <HeroHome
          key={schemaBlocktData._key}
          heroParagraph={schemaBlocktData.text}
        ></HeroHome>
      );
    case 'otherPageHero':
      return (
        <HeroOther
          key={schemaBlocktData._key}
          image={schemaBlocktData.backgroundImage}
        ></HeroOther>
      );

    case 'navCardCarousel':
      return (
        <Carousel
          key={schemaBlocktData._key}
          children={schemaBlocktData.content}
        ></Carousel>
      );
    case 'quote':
      return (
        <Quote
          key={schemaBlocktData._key}
          quote={schemaBlocktData.content}
          author={schemaBlocktData.author}
        ></Quote>
      );

    case 'photo':
      return (
        <Photo img={schemaBlocktData.img} alt={schemaBlocktData.name}></Photo>
      );

    case 'postCard':
      return (
        <PostCard
          key={schemaBlocktData._key}
          description={schemaBlocktData.description}
          title={schemaBlocktData.title}
          image={urlForImage(schemaBlocktData.img)}
        ></PostCard>
      );

    case 'PostContainer':
      return <PostContainer key={schemaBlocktData._key}></PostContainer>;

    case 'GeneralCarousel':
      return (
        <GeneralCarousel
          key={schemaBlocktData._key}
          children={schemaBlocktData.content}
        ></GeneralCarousel>
      );

    default:
      break;
  }
}
