import {createStore} from '@tinijs/store';

import {ApiResponse} from '../types/common';

export const mainStore = createStore({
  prices: [] as ApiResponse['prices'],
  selectedPaperSize: null,
  selectedCell: null as null | HTMLTableCellElement,
});
