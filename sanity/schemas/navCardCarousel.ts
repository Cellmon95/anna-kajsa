import { defineField, defineType } from 'sanity';

export const navCardCarousel = defineType({
  name: 'navCardCarousel',
  type: 'object',
  title: 'Nav Card Carousel',
  fields: [
    defineField({
      name: 'name',
      type: 'string',
    }),
    defineField({
      name: 'content',
      type: 'array',
      of: [{ type: 'navCard' }],
    }),
  ],
});
