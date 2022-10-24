import CharacterType from "../types/CharacterType";
import MagiaType from "../types/MagiaType";
import PersonagemType from "../types/PersonagemType";
import SpellType from "../types/SpellType";

const checkRaca = (wizard: string): string => {
    switch (wizard) {
        case "human":
            return "Humano";
        case "werewolf":
            return "Lobisomem";
        case "half-giant":
            return "Meio-Gigante";
        case "cat":
            return "Gato";
        default:
            return wizard;
    }
}

export const characterToPersonagem = (characterList: CharacterType[]): PersonagemType[] => {
    return characterList.map(character => {
        const personagem: PersonagemType = {
            nome: character.name,
            bruxo: character.wizard,
            foto: character.image,
            raca: checkRaca(character.species)
        };
        return personagem;
    });
}

export const spellToMagia = (spellList: SpellType[]): MagiaType[] => {
    return spellList.map(spell => {
        const magia: MagiaType = {
            nome: spell.name,
            descricao: spell.description
        };
        return magia;
    })
}