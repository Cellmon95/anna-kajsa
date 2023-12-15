import Image from "next/image";
import styles from "./page.module.css";
import TitledParagraph from "@/components/TiltledParagraph/titledParagraph";

export default function Home() {
  return (
    <main className={styles.main}>
      <TitledParagraph></TitledParagraph>
    </main>
  );
}
