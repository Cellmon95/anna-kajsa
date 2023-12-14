import {defineArrayMember, defineField, defineType} from 'sanity'

export const page = defineType({
  name: 'page',
  type: 'document',
  title: 'Page',
  fields: [
    defineField({name: 'title', type: 'string'}),
    defineField({
      name: 'pageBuilder',
      type: 'array',
      title: 'Page builder',
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
          name: 'navCardCarousel',
          type: 'navCardCarousel',
        }),
      ],
    }),
  ],
})
