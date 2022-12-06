import axios from 'axios';
import CharacterType, { CharacterTypeData } from '../types/api/characterType';
import SpellType, { SpellTypeData } from '../types/api/spellType';


const getPotterInstance = () => {
    const baseUrl = 'https://api.potterdb.com'
    return axios.create({
        baseURL: baseUrl
    })
}

export const getPersonagens = async (page: number = 1, name?: string): Promise<CharacterType[]> => {
    const axiosInstance = getPotterInstance();
    const path = `/v1/characters?page[number=${page}]&page[size=20]&filter[name_cont_any]=${name ? name : ''}`;
    const result = await axiosInstance.get<CharacterTypeData>(path);
    return result.data.data;
}


export const getMagias = async (page: number = 1): Promise<SpellType[]> => {
    const axiosInstance = getPotterInstance();
    const path = `/v1/spells?page[number=${page}]&page[size=50]`;
    const result = await axiosInstance.get<SpellTypeData>(path);
    return result.data.data;
}

export const fetchPersonagensByHouse = async (house?: string): Promise<CharacterType[]> => {
    if (!house) return [];
    const url = `https://hp-api.herokuapp.com/api/characters/house/${house}`;
    return (await axios.get<CharacterType[]>(url)).data;
}