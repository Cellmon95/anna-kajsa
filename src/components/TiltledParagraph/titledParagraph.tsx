'use client';

import { color } from 'framer-motion';

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
      <div style={backgroundColorStyle}>
        <h1>{props.heading}</h1>
        <p>{props.content}</p>
      </div>
    </>
  );
}
