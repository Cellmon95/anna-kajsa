import { groq } from 'next-sanity';
import { client } from './lib/client';
import { Page } from './types/pageType';
import { BlogPost } from './types/blogPostType';

export async function getPages(): Promise<Page[]> {
  return client.fetch(groq`*[_type == "page"]`);
}

export async function getPage(slug: string): Promise<Page> {
  return client.fetch(groq`*[_type == "page" && slug.current == $slug][0]`, {
    slug,
  });
}

export async function getBlogPosts(): Promise<BlogPost[]> {
  return client.fetch(groq`*[_type == 'blogPost']{
    name,
    _id,
    _createdAt,
    "slug": slug.current,
    "image": image.asset->url,
    content
  }`);
}

export async function getBlogPost(slug: string): Promise<BlogPost> {
  return client.fetch(
    groq`*[_type == 'blogPost' && slug.current == $slug][0]{
      name,
      _id,
      _createdAt,
      "slug": slug.current,
      "image": image.asset->url,
      content
    }`,
    { slug }
  );
}
