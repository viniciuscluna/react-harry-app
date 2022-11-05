import React from "react";
import CharacterType from "../types/api/CharacterType";
import Card from "./card";

type Props = {
    cards: CharacterType[]
}

export default  ({cards}: Props) => 
{
    return (
        <div className="row d-flex justify-content-around gy-4">
            {cards && cards.map((card: CharacterType, index: number) =>
                <Card key={index} {...card} />
            )}
        </div>
    )
}
