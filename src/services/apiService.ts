import axios from 'axios';
import CharacterType from '../types/CharacterType';
import MagiaType from '../types/MagiaType';
import PersonagemType from '../types/PersonagemType';
import SpellType from '../types/SpellType';
import { characterToPersonagem, spellToMagia } from '../utils/mapper';

export const getPersonagens = async (): Promise<PersonagemType[]> => {
    const url: string = 'https://hp-api.herokuapp.com/api/characters';
    const result = await axios.get<CharacterType[]>(url);
    return characterToPersonagem(result.data).filter((f: PersonagemType)  => f.foto);
}

export const getMagias = async (): Promise<MagiaType[]> => {
    const url: string = 'https://hp-api.herokuapp.com/api/spells';
    const result = await axios.get<SpellType[]>(url);
    return spellToMagia(result.data);
} 