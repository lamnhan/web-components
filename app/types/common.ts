import configs from '../configs/development';

export type AppConfigs = typeof configs;

export const enum PaperSizes {
  A4 = 'a4',
  A5 = 'a5',
  B4 = 'b4',
  B5 = 'b5',
}

export interface Price {
  business_day: number;
  price: number;
  quantity: number;
}
