import Image from 'next/image';
import { getBlogPost, getBlogPosts } from '../../../../../sanity/sanity-utils';
import { PortableText } from '@portabletext/react';

export async function generateStaticParams() {
  const blogPosts = await getBlogPosts();

  return blogPosts.map((blogPost) => ({
    slug: blogPost.slug,
  }));
}

export default async function BlogPostPage({
  params,
}: {
  params: { slug: string };
}) {
  const blogPost = await getBlogPost(params.slug);
  console.log(blogPost);

  return (
    <>
      <Image src={blogPost.image} alt="bricks hard" width={600} height={600} />
      <h3>{blogPost.name}</h3>
      <PortableText value={blogPost.content} />
    </>
  );
}
