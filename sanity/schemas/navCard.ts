import { defineField, defineType } from "sanity";

/*
  title: string;
  description: string;
  image?: string;
  link?: string | Url;
  linktitle?: string;

*/

export const navCard = defineType({
  name: "navCard",
  type: "object",
  title: "Nav Card",
  fields: [
    defineField({
      name: "title",
      type: "string",
    }),
    defineField({
      name: "description",
      type: "string",
    }),
    defineField({
      name: "image",
      type: "image",
    }),
    defineField({
      name: "linktitle",
      type: "string",
    }),
    defineField({
      name: "link",
      type: "url",
    }),
  ],
});
