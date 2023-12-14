import { type SchemaTypeDefinition } from "sanity";
import { page } from "./schemas/page";
import { titledParagraph } from "./schemas/titledParagraph";
import { footer } from "./schemas/footer";
import { homePageHero } from "./schemas/homePageHero";
import { navCard } from "./schemas/navCard";
import { navCardCarousel } from "./schemas/navCardCarousel";

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [
    page,
    titledParagraph,
    footer,
    homePageHero,
    navCard,
    navCardCarousel,
  ],
};
