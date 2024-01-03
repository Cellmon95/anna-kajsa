import { defineField, defineType } from 'sanity';

export const postCard = defineType({
  name: 'postCard',
  type: 'object',
  title: 'Post Card',
  fields: [
    {
      name: 'name',
      type: 'string',
      title: 'Name',
    },
    {
      name: 'title',
      type: 'string',
      title: 'Title',
    },
    {
      name: 'description',
      type: 'string',
      title: 'Description',
    },
    {
      name: 'img',
      type: 'image',
      title: 'Img',
    },
  ],
});
