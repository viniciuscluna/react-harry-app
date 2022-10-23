import PersonagemType from "../types/PersonagemType";

const cardStyle: React.CSSProperties = { width: '18rem' };

export default (card: PersonagemType) => (
  <div className="card col-2" style={cardStyle}>
    <img src={card.foto} className="card-img-top card-personagem" alt={card.nome} />
    <div className="card-body">
      <h5 className="card-title">{card.nome}</h5>
      <p className="card-text">{card.raca}</p>
      {/* <a href="#" className="btn btn-primary">Go somewhere</a> */}
    </div>
  </div>
)

