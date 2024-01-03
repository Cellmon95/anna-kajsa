import { defineField, defineType } from 'sanity';

export const photo = defineType({
  name: 'photo',
  type: 'object',
  title: 'Photo',
  fields: [
    {
      name: 'name',
      type: 'string',
      title: 'Name',
    },
    {
      name: 'img',
      type: 'image',
      title: 'Img',
    },
  ],
});
