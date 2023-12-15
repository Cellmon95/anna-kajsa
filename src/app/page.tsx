import Image from "next/image";
import styles from "./page.module.css";
import TitledParagraph from "@/components/TiltledParagraph/titledParagraph";
import HeroHome from "@/components/HeroHome/heroHome";

export default function Home() {
  return (
    <main className={styles.main}>
      <HeroHome></HeroHome>
      <TitledParagraph backgroundColor="#ffffff"></TitledParagraph>
    </main>
  );
}
