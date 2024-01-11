import Image from 'next/image';
import styles from './page.module.css';
import TitledParagraph from '@/components/TiltledParagraph/titledParagraph';
import Quote from '@/components/Quote/Quote';
import { client } from '../../../sanity/lib/client';
import HeroHome from '@/components/HeroHome/heroHome';
import PageBuilder from '@/components/PageBuilder/PageBuilder';

export default async function Home({ params }: { params: { pageId: string } }) {
  const pageData = await client.fetch(
    "*[_type == 'page' && slug.current=='" + params.pageId + "'][0]"
  );

  const pageBuilderData = pageData.pageBuilder;

  return (
    <>
      <PageBuilder pageBuilderData={pageBuilderData}></PageBuilder>
    </>
  );
}

export async function generateStaticParams() {
  let pageData = [];

  try {
    pageData = await client.fetch("*[_type == 'page']");
  } catch (error) {
    console.error(error);
  }

  return pageData.map((page: any) => ({
    pageId: page.pageId,
  }));
}
