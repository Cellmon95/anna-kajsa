import Image from 'next/image';
import styles from './page.module.css';
import TitledParagraph from '@/components/TiltledParagraph/titledParagraph';
import NavCard from '@/components/navcard/NavCard';
import Carousel from '@/components/carousel/Carousel';

export default function Home() {
  return (
    <main className={styles.main}>
      <TitledParagraph></TitledParagraph>
      <Carousel>
        <NavCard
          title="title"
          description="Apor är roliga husdjur och kan lära sig att spela gitarr"
          link={'/contact'}
          linktitle="Kontakta oss ->"
          image="/image/yes.jpg"
        />
        <NavCard
          title=" second title"
          description="Tigrar är roliga husdjur och kan lära sig att spela gitarr"
          link={'/contact'}
          linktitle="konsult ->"
          image="/image/perhapsjpg.jpg"
        />
        <NavCard
          title="third title"
          description="Myrslook är roliga husdjur och kan lära sig att spela gitarr"
          link={'/contact'}
          linktitle="filantropi ->"
          image="./image/first-law.jpg"
        />
      </Carousel>
    </main>
  );
}
