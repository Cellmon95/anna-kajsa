import {defineField, defineType} from 'sanity'

export const titledParagraph = defineType({
  name: 'titledParagraph',
  type: 'object',
  title: 'Titled Paragraph',
  fields: [
    defineField({
      name: 'heading',
      type: 'string',
    }),
    defineField({
      name: 'content',
      type: 'string',
    }),
  ],
})
