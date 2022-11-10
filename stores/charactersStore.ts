import { atom } from 'recoil';
import CharacterType from '../types/api/CharacterType';


const useCharacterStore = atom<CharacterType[]>({
  key: 'characterStoreKey',
  default: []
});

export default useCharacterStore;