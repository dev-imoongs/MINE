import { atom } from 'recoil';

export const recentSearchesAtom = atom({
  key: 'recentSearchesState',
  default: [],
});