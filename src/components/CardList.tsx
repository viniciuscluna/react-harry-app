import CardListType from "../types/CardListType";
import CardType from "../types/CardType";
import Card from "./Card";

export default (type: CardListType) => 
{
    return (
        <div className="row">
            {type.cards && type.cards.map((card: CardType, index: number) =>
                <Card key={index} {...card} />
            )}
        </div>
    )
}
