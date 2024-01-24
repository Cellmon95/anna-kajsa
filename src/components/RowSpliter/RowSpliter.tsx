import Photo from '../Photo/Photo';
import TitledParagraph from '../TiltledParagraph/titledParagraph';
import styles from './RowSpliter.module.css';

export interface RowSpliterProps {
  contentBlockData: any;
}

export default function RowSpliter(props: RowSpliterProps) {
  return (
    <>
      <div className={styles.rowSpliter}>
        {props.contentBlockData.map((block: any) => {
          return buildComponent(block);
        })}
      </div>
    </>
  );
}

function buildComponent(block: any) {
  switch (block._type) {
    case 'titledParagraph':
      return (
        <TitledParagraph
          key={block._key}
          backgroundColor={block}
          heading={block.heading}
          content={block.content}
        ></TitledParagraph>
      );

    case 'photo':
      return <Photo alt={block.name} img={block.img}></Photo>;

    default:
      break;
  }
}
