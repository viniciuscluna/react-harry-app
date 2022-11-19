import React from "react";
import CharacterType from "../types/api/characterType";
import Card from "./card";

type Props = {
    cards: CharacterType[]
}

const CardList = ({cards}: Props) => 
{
    return (
        <div className="row d-flex justify-content-around gy-4">
            {cards && cards.map((card: CharacterType, index: number) =>
                <Card key={index} {...card} />
            )}
        </div>
    )
}

export default CardList;
