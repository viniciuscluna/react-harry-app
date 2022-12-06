export default interface SpellType {
    id: string;
    attributes: SpellTypeAttribute; 
}

export interface SpellTypeAttribute {
    name: string;
    slug: string;
    effect: string;
}

export interface SpellTypeData {
    data: SpellType[];
}