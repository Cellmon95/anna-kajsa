import { defineField, defineType } from 'sanity';

export const podcastList = defineType({
  name: 'podcastList',
  type: 'object',
  title: 'podcastList',
  fields: [
    {
      name: 'name',
      type: 'string',
      title: 'Name',
    },
  ],
});
