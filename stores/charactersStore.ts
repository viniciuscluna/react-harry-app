import create from 'zustand'
import CharacterType from '../types/api/CharacterType';
import CharacterStoreType from '../types/store/CharacterStoreType';


const useCharacterStore = create<CharacterStoreType>(
  (set, get) => ({
    personagens: [],
    getByName: (name: string) => get().personagens.find((f: CharacterType) => f.name === name),
    setPersonagens: (personagens: CharacterType[]) => set(() => ({ personagens: personagens }))
  }));

export default useCharacterStore;