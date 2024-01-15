import { title } from 'process';
import { defineField, defineType } from 'sanity';

export const PostContainer = {
  name: 'PostContainer',
  type: 'object',
  title: 'Post Container',
  fields: [
    {
      name: 'innerPostContainer',
      type: 'string',
      title: 'custom data',
    },

    //This works
    // defineField({
    //   name: 'content',
    //   type: 'array',
    //   of: [{ type: 'navCardCarousel' }],
    // }),

    // This also works
    // defineField({
    //   name: 'content',
    //   type: 'array',
    //   of: [{ type: 'postCard' }],
    // }),

    //   // defineField({
    //   //   name: 'content',
    //   //   type: 'object',
    //   //   of: [{ type: 'Carousel' }],
    //   // }),
  ],
};
