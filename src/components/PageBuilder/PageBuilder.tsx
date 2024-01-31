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
import PodcastList from '../PodcastList/PodcastList';
import { PodcastContainer } from '../PodcastContainer/PodcastContainer';
import RowSpliter from '../RowSpliter/RowSpliter';


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
        {pageBuilderData.map((schemaBlockData) =>
          buildComponent(schemaBlockData)
        )}
      </main>
    </>
  );
}

/**
 * Builds Sanity schema components from schema block data.
 * @param schemaBlockData Json data from a Sanity schema block.
 * @returns A Sanity schema component.
 */
function buildComponent(schemaBlockData: any) {
  switch (schemaBlockData._type) {
    case 'titledParagraph':
      //make sure backgroundColor have a value
      let backgroundColor = '';
      if (schemaBlockData.backgroundColor !== undefined) {
        backgroundColor = schemaBlockData.backgroundColor.hex || '#ffffff';
      } else {
        backgroundColor = '#ffffff';
      }

      return (
        <TitledParagraph
          key={schemaBlockData._key}
          backgroundColor={backgroundColor}
          heading={schemaBlockData.heading}
          content={schemaBlockData.content}
        ></TitledParagraph>
      );

    case 'homePageHero':
      return (
        <HeroHome
          key={schemaBlockData._key}
          heroParagraph={schemaBlockData.text}
          img={schemaBlockData.backgroundImage}
        ></HeroHome>
      );
    case 'otherPageHero':
      return (
        <HeroOther
          key={schemaBlockData._key}
          image={schemaBlockData.backgroundImage}
        ></HeroOther>
      );

    case 'navCardCarousel':
      return (
        <Carousel
          key={schemaBlockData._key}
          children={schemaBlockData.content}
        ></Carousel>
      );
    case 'quote':
      return (
        <Quote
          key={schemaBlockData._key}
          quote={schemaBlockData.content}
          author={schemaBlockData.author}
        ></Quote>
      );

    case 'photo':
      return (
        <Photo img={schemaBlockData.img} alt={schemaBlockData.name}></Photo>
      );

    case 'postCard':
      return (
        <PostCard
          key={schemaBlockData._key}
          description={schemaBlockData.description}
          title={schemaBlockData.title}
          image={urlForImage(schemaBlockData.img, 200)}
          url={'/'}
        ></PostCard>
      );

    case 'PostContainer':
      return <PostContainer key={schemaBlockData._key}></PostContainer>;

    case 'GeneralCarousel':
      return (
        <GeneralCarousel
          key={schemaBlockData._key}
          children={schemaBlockData.content}
        ></GeneralCarousel>
      );

    case 'podcastList':
      return <PodcastList key={schemaBlockData._key}></PodcastList>;

    case 'PodcastContainer':
      return <PodcastContainer key={schemaBlockData._key}></PodcastContainer>;

    case 'rowSpliter':
      return (
        <RowSpliter
          key={schemaBlockData._key}
          contentBlockData={schemaBlockData.content}
        ></RowSpliter>
      );
    default:
      break;
  }
}
