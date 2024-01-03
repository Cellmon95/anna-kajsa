import { PortableTextBlock } from 'sanity';

export type BlogPost = {
  _type: string;
  _id: string;
  _createdAt: string;
  name: string;
  slug: string;
  image: string;
  content: PortableTextBlock[];
};
