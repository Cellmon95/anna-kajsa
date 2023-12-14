import {defineField, defineType} from 'sanity'

export const navCard = defineType({
  name: 'navCard',
  type: 'object',
  title: 'Nav Card',
  fields: [
    defineField({
      name: 'content',
      type: 'string',
    }),
  ],
})
