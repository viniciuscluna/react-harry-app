import CharacterType from "../api/CharacterType";

export default interface CharacterStore {
    personagens: CharacterType[];
    setPersonagens: (personagens: CharacterType[]) => void;
    getByName: (name: string) => CharacterType | undefined;
}
