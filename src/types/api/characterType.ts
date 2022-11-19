export default interface CharacterType {
    name: string;
    species: string;
    image: string;
    gender: string;
    house: string;
    wizard: boolean;
    yearOfBirth: number;
    dateOfBirth: Date;
    wand: WandType;
    hogwartsStudent: boolean;
    hogwartsStaff: boolean;

    actor: string;
}

export interface WandType {
    wood: string;
    core: string;
    length: number;
}