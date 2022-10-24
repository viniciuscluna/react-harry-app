import PersonagemType from "../types/PersonagemType";
import Card from "./Card";

type Props = {
    cards: PersonagemType[]
}

export default  ({cards}: Props) => 
{
    return (
        <div className="row d-flex justify-content-around gy-4">
            {cards && cards.map((card: PersonagemType, index: number) =>
                <Card key={index} {...card} />
            )}
        </div>
    )
}
