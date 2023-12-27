import { groq } from 'next-sanity';
import { client } from './lib/client';
import { Page } from './types/pageType';

export async function getPages(): Promise<Page[]> {
  return client.fetch(groq`*[_type == "page"]`);
}

export async function getPage(slug: string): Promise<Page> {
  return client.fetch(groq`*[_type == "page" && slug.current == $slug][0]`, {
    slug,
  });
}
