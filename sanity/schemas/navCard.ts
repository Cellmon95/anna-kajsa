import { defineField, defineType } from 'sanity';

/*
  title: string;
  description: string;
  image?: string;
  link?: string | Url;
  linktitle?: string;

*/

export const navCard = defineType({
  name: 'navCard',
  type: 'object',
  title: 'Nav Card',
  fields: [
    defineField({
      name: 'title',
      type: 'string',
    }),
    defineField({
      name: 'description',
      type: 'text',
    }),
    defineField({
      name: 'image',
      type: 'image',
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: 'linkTitle',
      type: 'string',
    }),
    defineField({
      name: 'link',
      type: 'url',
      validation: (rule) => rule.uri({ allowRelative: true }),
    }),
    defineField({
      name: 'linkCalor',
      type: 'string',
    }),
  ],
});
