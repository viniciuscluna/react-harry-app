import axios from 'axios';
import CharacterType from '../types/CharacterType';
import PersonagemType from '../types/PersonagemType';
import { characterToCard } from '../utils/MapperUtil';

export const getPersonagens = async (): Promise<PersonagemType[]> => {
    const url: string = 'https://hp-api.herokuapp.com/api/characters';
    const result = await axios.get<CharacterType[]>(url);
    return characterToCard(result.data).filter((f: PersonagemType)  => f.foto);
}

//export const getMagias = async (): Promise<>