import React from 'react';
import Image from 'next/image';
import { Badge, Button } from 'reactstrap';
import CharacterType from '../types/api/characterType';
import shimmer from '../utils/shimmer';

const cardStyle: React.CSSProperties = { width: '18rem' };

const Card = (card: CharacterType) => (
  <div className="card col-2" style={cardStyle}>
    <Image
      alt={card.attributes.name}
      src={card.attributes.image ?card.attributes.image : 'https://upload.wikimedia.org/wikipedia/commons/9/99/Sample_User_Icon.png' }
      placeholder="blur"
      blurDataURL={`data:image/svg+xml;base64,${shimmer(600, 400)}`}
      width={600}
      height={400}
      className="card-img-top card-personagem"
    />
    <div className="card-body">
      <h5 className="card-title">{card.attributes.name}</h5>
      <p className="card-text">{card.attributes.species}
        {/* {card.wizard ?
          <Badge className='float-end'
            color="primary"
            pill
          >
            Bruxo
          </Badge> : <></>} */}
      </p>
      <Button outline block tag={'a'} target="_blank" href={card.attributes.wiki}>
        Veja Mais...
      </Button>
    </div>
  </div>
)

export default Card;