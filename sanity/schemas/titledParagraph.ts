import { defineField, defineType } from 'sanity';

export const titledParagraph = defineType({
  name: 'titledParagraph',
  type: 'object',
  title: 'Titled Paragraph',
  fields: [
    {
      name: 'name',
      title: 'Name',
      type: 'string',
    },
    defineField({
      name: 'heading',
      title: 'Heading',
      type: 'string',
    }),
    {
      name: 'content',
      title: 'Content',
      type: 'array',
      of: [
        {
          type: 'block',
          styles: [],
          lists: [],
          marks: {
            decorators: [
              { title: 'Strong', value: 'strong' },
              { title: 'Italic', value: 'em' },
            ],
          },
        },
      ],
    },
    defineField({
      name: 'backgroundColor',
      type: 'color',
    }),
  ],
});
