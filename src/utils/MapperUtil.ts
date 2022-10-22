import CharacterType from "../models/CharacterType";
import CardType from "../types/CardType";

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

export const characterToCard = (characterList: CharacterType[]): CardType[] => {
    return characterList.map(character => {
        const card: CardType = {
            nome: character.name,
            bruxo: character.wizard,
            foto: character.image,
            raca: checkRaca(character.species)
        };
        return card;
    });
}