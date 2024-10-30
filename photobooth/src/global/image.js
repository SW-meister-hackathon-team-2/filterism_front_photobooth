import { atom } from 'recoil';
import { recoilPersist } from 'recoil-persist';
const { persistAtom } = recoilPersist();

export const imageState = atom({
  key: 'imageState',
  default: [],
  effects_UNSTABLE: [persistAtom],
});
export const selectedImageState = atom({
  key: 'selectedImageState',
  default: [],
  effects_UNSTABLE: [persistAtom],
});
