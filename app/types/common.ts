import configs from '../configs/development';

export type AppConfigs = typeof configs;

export interface Price {
  business_day: number;
  price: number;
  quantity: number;
}

export interface ApiResponse {
  paper_size: string;
  prices: Price[][];
}
