export default interface CharacterType {
    id: string;
    attributes: CharacterTypeAttributes;
}

interface CharacterTypeAttributes {
    slug: string;
    name: string;
    born: string;
    gender: string;
    image: string;
    wiki: string;
    species: string;
}

export interface CharacterTypeData {
    data: CharacterType[]
}
