import { createStore } from './store';
import { Item } from '../types/entities';

export const store = createStore({
  currentFolderId: '/',
  currentFolder: null as null | Item,
  folders: [] as Item[],
  photos: [] as Item[],
  breadcrumbs: [] as Item[],
})
