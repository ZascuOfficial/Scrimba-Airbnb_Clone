import React from 'react';

import photoGrid from '../../assets/img/photo-grid.png';

export default function Hero() {
  return (
    <section className="hero">
      <img
        src={photoGrid}
        alt="photo-grid"
        className="photo-grid"
      />

      <h1 id="title">Online Experiences</h1>
      <p id="intro">
        Join unique interactive activities led by one-of-a-kind hosts—all without leaving home.
      </p>
    </section>
  );
}