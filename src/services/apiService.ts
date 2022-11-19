import axios from 'axios';
import CharacterType from '../types/api/characterType';
import SpellType from '../types/api/spellType';

export const getPersonagens = async (): Promise<CharacterType[]> => {
    const url = 'https://hp-api.herokuapp.com/api/characters';
    const result = await axios.get<CharacterType[]>(url);
    return result.data;
}

export const getMagias = async (): Promise<SpellType[]> => {
    const url = 'https://hp-api.herokuapp.com/api/spells';
    const result = await axios.get<SpellType[]>(url);
    return result.data;
}

export const fetchPersonagensByHouse = async (house?: string): Promise<CharacterType[]> => {
    if(!house) return [];
    const url = `https://hp-api.herokuapp.com/api/characters/house/${house}`;
    return (await axios.get<CharacterType[]>(url)).data;
}