import { BASE_URL } from './config';

export async function http<Result>(
  method: RequestInit['method'],
  path: string,
  data: unknown = {}
) {
  const response = await fetch(`${BASE_URL}/${path}`, {
    method,
    ...(method === 'GET' ? {} : {
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data),
    })
  });
  if (!response.ok) {
    throw new Error(response.statusText);
  }
  return response.json() as Result;
}
