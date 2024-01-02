import { defineField, defineType } from 'sanity';

export const footer = defineType({
  name: 'footer',
  type: 'document',
  title: 'Footer',
  fields: [
    defineField({
      name: 'email',
      type: 'string',
    }),
    defineField({
      name: 'address',
      type: 'string',
    }),
    defineField({
      name: 'phone',
      type: 'string',
    }),
  ],
});
