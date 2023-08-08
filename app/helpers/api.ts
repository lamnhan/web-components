import config from '../configs/development';
import {PaperSizes} from '../consts/common';
import {ApiResponse} from '../types/common';

export function getPrices(paperSize: PaperSizes) {
  return http<ApiResponse>(`${config.baseEndpoint}${paperSize}`, {
    method: 'GET',
  });
}

async function http<Result>(
  input: RequestInfo,
  requestInit?: RequestInit,
  responseType: 'text' | 'json' | 'file' = 'json'
): Promise<Result> {
  const response = await fetch(input, {
    ...requestInit,
    ...(requestInit?.method === 'GET'
      ? {}
      : {
          headers: {'Content-Type': 'application/json'},
        }),
  });
  if (!response.ok) throw new Error('Fetch failed!');
  return responseType === 'file'
    ? response.arrayBuffer()
    : responseType === 'text'
    ? response.text()
    : response.json();
}
