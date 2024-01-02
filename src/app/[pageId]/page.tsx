import styles from './page.module.css';
import TitledParagraph from '@/components/TiltledParagraph/titledParagraph';
import HeroHome from '@/components/HeroHome/heroHome';
import { getPage, getPages } from '../../../sanity/sanity-utils';

export default async function Home({ params }: { params: { pageId: string } }) {
  const pageData = await getPage(params.pageId);
  const pageBuilder: any[] = pageData.pageBuilder;

  function buildComponent(componentJson: any) {
    switch (componentJson._type) {
      case 'titledParagraph':
        return (
          <TitledParagraph
            backgroundColor="#ffffff"
            heading={componentJson.heading}
            content={componentJson.content}
          ></TitledParagraph>
        );

      case 'homePageHero':
        return <HeroHome heroParagraph={componentJson.text}></HeroHome>;

      case 'navCardCarousel':
        break;
      default:
        break;
    }
  }

  return (
    <main className={styles.main}>
      {pageBuilder.map((pageElement) => buildComponent(pageElement))}
    </main>
  );
}

export async function generateStaticParams() {
  const pageData = await getPages();

  return pageData.map((page: any) => ({
    pageId: page.pageId,
  }));
}
