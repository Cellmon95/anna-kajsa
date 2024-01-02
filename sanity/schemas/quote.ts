import { defineField, defineType } from 'sanity';

export const quote = defineType({
  name: 'quote',
  type: 'object',
  title: 'Quote',
  fields: [
    {
      name: 'content',
      type: 'string',
      title: 'Content',
    },
    {
      name: 'author',
      type: 'string',
      title: 'Author',
    },
  ],
});
