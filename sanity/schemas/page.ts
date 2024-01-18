import { defineArrayMember, defineField, defineType } from 'sanity';

export const page = defineType({
  name: 'page',
  type: 'document',
  title: 'Page',
  fields: [
    defineField({ name: 'title', type: 'string' }),
    defineField({ name: 'slug', type: 'slug', options: { source: 'title' } }),
    defineField({
      name: 'pageBuilder',
      type: 'array',
      title: 'Page Content',
      of: [
        defineArrayMember({
          name: 'titledParagraph',
          type: 'titledParagraph',
        }),
        defineArrayMember({
          name: 'homePageHero',
          type: 'homePageHero',
        }),
        defineArrayMember({
          name: 'otherPageHero',
          type: 'otherPageHero',
        }),
        defineArrayMember({
          name: 'navCardCarousel',
          type: 'navCardCarousel',
        }),
        defineArrayMember({
          name: 'quote',
          type: 'quote',
        }),
        defineArrayMember({
          name: 'photo',
          type: 'photo',
        }),
        defineArrayMember({
          name: 'postCard',
          type: 'postCard',
        }),
        defineArrayMember({
          name: 'PostContainer',
          type: 'PostContainer',
        }),
        defineArrayMember({
          name: 'GeneralCarousel',
          type: 'GeneralCarousel',
        }),
        defineArrayMember({
          name: 'podcastList',
          type: 'podcastList',
        }),
      ],
    }),
  ],
});
