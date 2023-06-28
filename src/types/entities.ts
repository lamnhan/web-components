export const enum Types {
  Folder = 'folder',
  Photo = 'photo',
}

export interface Item {
  id: string;
  folderId: string;
  fullPath: string;
  name: string;
  type: Types;
  url?: string;
}
