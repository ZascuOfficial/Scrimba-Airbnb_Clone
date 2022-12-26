import React from 'react';

import Hero from './Hero';
import Card from './Card';

import cardsData from '../data/cardsData';

export default function Main() {
  const cardElements = cardsData.map(card => {
    return <Card
      img={card.img}
      title={card.title}
      price={card.price}
      rating={card.rating}
      reviewsCount={card.reviewsCount}
      location={card.location}
    />
  });

  return (
    <main className="main">
      <Hero />

      <div className="cards-container">
        {cardElements}
      </div>
    </main>
  );
}