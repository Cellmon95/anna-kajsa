import { type SchemaTypeDefinition } from 'sanity';
import { page } from './schemas/page';
import { titledParagraph } from './schemas/titledParagraph';
import { footer } from './schemas/footer';
import { homePageHero } from './schemas/homePageHero';
import { navCard } from './schemas/navCard';
import { navCardCarousel } from './schemas/navCardCarousel';
import { quote } from './schemas/quote';
import { otherPageHero } from './schemas/otherPageHero';
import { photo } from './schemas/photo';
import { postCard } from './schemas/postCard';
import blogPost from './schemas/blogPost';
import { PostContainer } from './schemas/PostContainer';
import { GeneralCarousel } from './schemas/GeneralCarousel';
import { podcastList } from './schemas/podcastList';
import { PodcastContainer } from './schemas/PodcastContainer';

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [
    page,
    titledParagraph,
    footer,
    homePageHero,
    navCard,
    navCardCarousel,
    quote,
    otherPageHero,
    photo,
    postCard,
    blogPost,
    PostContainer,
    GeneralCarousel,
    podcastList,
    PodcastContainer,
  ],
};
