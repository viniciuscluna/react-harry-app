import Link from 'next/link';
import React from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import { Badge, Button } from 'reactstrap';
import CharacterType from '../types/api/characterType';

const cardStyle: React.CSSProperties = { width: '18rem' };

const Card = (card: CharacterType) => (
  <div className="card col-2" style={cardStyle}>
    <LazyLoadImage
      alt={card.name}
      src={card.image}
      effect="blur"
      className="card-img-top card-personagem"
    />
    <div className="card-body">
      <h5 className="card-title">{card.name}</h5>
      <p className="card-text">{card.species}
        {card.wizard ?
          <Badge className='float-end'
            color="primary"
            pill
          >
            Bruxo
          </Badge> : <></>}
      </p>
      <Button outline block tag={Link} href={`/personagens/${card.name}`}>
        Veja Mais...
      </Button>
    </div>
  </div>
)

export default Card;