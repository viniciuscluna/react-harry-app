import { atom } from 'recoil';
import { recoilPersist } from 'recoil-persist';
import CharacterType from '../types/api/CharacterType';


const useCharacterStore = atom<CharacterType[]>({
  key: 'characterStoreKey',
  default: []
});

export default useCharacterStore;