import createImageUrlBuilder from '@sanity/image-url';
import type { Image } from 'sanity';

import { dataset, projectId } from '../env';

const imageBuilder = createImageUrlBuilder({
  projectId: projectId || '',
  dataset: dataset || '',
});

export const urlForImage = (source: Image, width: number) => {
  return imageBuilder
    ?.image(source)
    .auto('format')
    .fit('crop')
    .width(width)
    .url();
};
