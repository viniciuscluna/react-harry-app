import axios, { AxiosResponse } from 'axios';
import CharacterType from '../models/CharacterType';

export const getPersonagens = async (): Promise<AxiosResponse<CharacterType[], any>> => {
    const url: string = 'https://hp-api.herokuapp.com/api/characters';
    return await axios.get<CharacterType[]>(url);
}