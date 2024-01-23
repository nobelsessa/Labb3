import React from 'react';
import Card from './Card';

function CardList({ cards }) {
  return (
    <div className="card-list">
      {cards.map((card, index) => (
        <Card key={index} title={card.title} content={card.content} />
      ))}
    </div>
  );
}

export default CardList;
