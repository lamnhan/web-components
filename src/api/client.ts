import { http } from './http';
import { Types, Item } from '../types/entities';

function id() {
  return Math.random().toString(36).substring(2, 9).toUpperCase();
}

export function list(folderId: string, type?: Types) {
  const folderQuery = folderId === '/' ? 'fullPath=/' : `fullPath_like=\/${folderId}$`;
  const typeQuery = !type ? '' : `&type=${type}`;
  return http<Item[]>('GET', `items?${folderQuery}${typeQuery}`);
}

export function get(id: string) {
  return http<Item>('GET', `items/${id}`);
}

export function create(data: Omit<Item, 'id'>) {
  return http<Item>('POST', 'items', { ...data, id: id() });
}

export function update(id: string, data: Partial<Item>) {
  return http<Item>('PATCH', `items/${id}`, data);
}

export function remove(id: string) {
  return http<{}>('DELETE', `items/${id}`);
}

export async function removeByFolderId(folderId: string) {
  const items = await http<Item[]>('GET', `items?fullPath_like=/${folderId}`);
  return Promise.all(items.map(item => remove(item.id)));
}
