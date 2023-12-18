"use client"

import Image from "next/image";
import styles from "./page.module.css";
import TitledParagraph from "@/components/TiltledParagraph/titledParagraph";
import Quote from "@/components/Quote/Quote";
import {client} from "../../sanity/lib/client";
import HeroHome from "@/components/HeroHome/heroHome";

export default function Home() {
  async function fetch() {
    const data = await client.fetch("*[_type == 'page' && title=='Home Page']");
    console.log(data);
  }

  fetch();

  return (
    <main className={styles.main}>
      <Quote></Quote>
      <HeroHome></HeroHome>
      <TitledParagraph backgroundColor="#ffffff"></TitledParagraph>
    </main>
  );
}
