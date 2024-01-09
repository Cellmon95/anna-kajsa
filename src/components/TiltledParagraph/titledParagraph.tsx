'use client';

import { color } from 'framer-motion';
import styles from './titledParagraph.module.css';

interface TitledParagraphProps {
  backgroundColor: string;
  heading: string;
  content: string;
}

export default function TitledParagraph(props: TitledParagraphProps) {
  const backgroundColor = props.backgroundColor;
  const backgroundColorStyle: React.CSSProperties = {
    backgroundColor: backgroundColor,
  };
  return (
    <>
      <div
        style={backgroundColorStyle}
        className={styles.titledParagraphContainer}
      >
        <h1>{props.heading}</h1>
        <p>{props.content}</p>
      </div>
    </>
  );
}
