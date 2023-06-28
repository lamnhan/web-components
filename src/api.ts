import { PaperSize } from './types';

export async function fetchPrices(size: PaperSize) {
  const response = await fetch(`https://picsum.photos/${size}`);
}
