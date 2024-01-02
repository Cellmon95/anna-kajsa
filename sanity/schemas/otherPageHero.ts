import { defineField, defineType } from 'sanity';

export const otherPageHero = defineType({
  name: 'otherPageHero',
  type: 'object',
  title: 'Other Page Hero',
  fields: [
    defineField({
      name: 'name',
      type: 'string',
    }),
    defineField({
      name: 'backgroundImage',
      title: 'Background Image',
      type: 'image',
    }),
  ],
});
