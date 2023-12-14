import {defineField, defineType} from 'sanity'

export const homePageHero = defineType({
  name: 'homePageHero',
  type: 'object',
  title: 'Home Page Hero',
  fields: [
    defineField({
      name: 'backgroundImage',
      type: 'image',
    }),
    defineField({
      name: 'text',
      type: 'string',
    }),
  ],
})
