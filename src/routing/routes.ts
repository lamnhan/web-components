import { Item } from '../types/entities';

export function folderLink({ id }: Item) {
  return `?folderId=${id}`
}

export function photoLink({ id, folderId }: Item) {
  return `?${folderId === '/' ? '' : `folderId=${folderId}&`}photoId=${id}`
}
