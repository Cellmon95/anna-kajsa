"use client";

import { color } from "framer-motion";

interface TitledParagraphProps {
  backgroundColor: string;
}

export default function TitledParagraph(
  this: any,
  props: TitledParagraphProps
) {
  const backgroundColor = props.backgroundColor;
  const backgroundColorStyle: React.CSSProperties = {
    backgroundColor: backgroundColor,
  };
  return (
    <>
      <div style={backgroundColorStyle}>
        <h1>My Work</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </p>
      </div>
    </>
  );
}
