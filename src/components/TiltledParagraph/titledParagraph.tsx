'use client';

import { color } from 'framer-motion';
import styles from './titledParagraph.module.css';
import React, { useState } from 'react';

interface TitledParagraphProps {
  backgroundColor: string;
  heading: string;
  content: any[];
}

export default function TitledParagraph(props: TitledParagraphProps) {
  const backgroundColor = props.backgroundColor;
  const backgroundColorStyle: React.CSSProperties = {
    backgroundColor: backgroundColor,
  };

  const content = props.content || [];
  return (
    <>
      <div
        style={backgroundColorStyle}
        className={styles.titledParagraphContainer}
      >
        <h1>{props.heading}</h1>
        {content.map((block, i: number, array: any[]) => {
          if (i !== array.length - 1) return buildBlock(block);
          else return buildBlock(block, true);
        })}
      </div>
    </>
  );
}

function buildBlock(block: any, last: boolean = false) {
  return (
    <p className={last ? styles.noBottomMargin : ''}>
      {block.children.map((child: { marks: string[]; text: string }) => {
        if (child.marks.length > 0) {
          return child.marks.map((mark: string) => {
            switch (mark) {
              case 'strong':
                return <b>{child.text}</b>;

              case 'strike-through':
                return <s>{child.text}</s>;

              case 'em':
                return <i>{child.text}</i>;

              case 'underline':
                return <u>{child.text}</u>;

              default:
                return child.text;
            }
          });
        } else return child.text;
      })}
    </p>
  );
}
