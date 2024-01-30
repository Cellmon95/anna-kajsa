import { title } from 'process';
import { defineField, defineType } from 'sanity';

export const PodcastContainer = {
  name: 'PodcastContainer',
  type: 'object',
  title: 'Podcast Container',
  fields: [
    {
      name: 'innerPodcastContainer',
      type: 'string',
      title: 'custom data',
    },
  ],
};
