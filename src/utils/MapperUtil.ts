import CharacterType from "../types/CharacterType";
import PersonagemType from "../types/PersonagemType";

const checkRaca = (wizard: string): string => {
    switch (wizard) {
        case "human":
            return "humano";
        case "werewolf":
            return "lobisomem";
        case "cat":
            return "gato";
        default:
            return wizard;
    }
}

export const characterToCard = (characterList: CharacterType[]): PersonagemType[] => {
    return characterList.map(character => {
        const card: PersonagemType = {
            nome: character.name,
            bruxo: character.wizard,
            foto: character.image,
            raca: checkRaca(character.species)
        };
        return card;
    });
}