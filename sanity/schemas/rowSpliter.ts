import { defineArrayMember, defineField, defineType } from 'sanity';

export const rowSpliter = defineType({
  name: 'rowSpliter',
  type: 'object',
  title: 'Row Spliter',
  fields: [
    {
      name: 'name',
      type: 'string',
    },
    {
      name: 'content',
      type: 'array',
      of: [
        defineArrayMember({
          name: 'titledParagraph',
          type: 'titledParagraph',
        }),
        defineArrayMember({
          name: 'photo',
          type: 'photo',
        }),
      ],
    },
  ],
});
