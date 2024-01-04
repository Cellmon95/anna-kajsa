import Image from 'next/image';
import { getBlogPost, getBlogPosts } from '../../../../../sanity/sanity-utils';
import { PortableText } from '@portabletext/react';
import styles from './page.module.css';

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

  return (
    <>
      <Image
        className={styles.hero}
        src={blogPost.image}
        alt={blogPost.alt}
        width={1920}
        height={1080}
      />
      <div className={styles.contentContainer}>
        <h2>{blogPost.name}</h2>
        <PortableText value={blogPost.content} />
      </div>
    </>
  );
}
