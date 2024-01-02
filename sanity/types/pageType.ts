import { HomePageHero } from './homePageHeroType';
import { NavCardCarousel } from './navCardCarouselType';
import { TitledParagraph } from './titledParagraphType';

export type Page = {
  _type: string;
  id: string;
  title: string;
  slug: { _type: string; current: string };
  pageBuilder: [TitledParagraph, HomePageHero, NavCardCarousel];
};
