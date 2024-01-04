import createImageUrlBuilder from '@sanity/image-url';
import type { Image } from 'sanity';

import { dataset, projectId } from '../env';

const imageBuilder = createImageUrlBuilder({
  projectId: projectId || '',
  dataset: dataset || '',
});

export const urlForImage = (
  source: Image,
  focalPointX: number,
  focalPointY: number
) => {
  return imageBuilder?.image(source).auto('format').fit('crop').url();
};
