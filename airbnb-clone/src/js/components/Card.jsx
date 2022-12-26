import React from 'react';

import star from '../../assets/img/star.png';

export default function Card(props) {
  return (
    <div className="card">
      <img
        src={props.img}
        alt="card-image"
        className="card-image"
      />

      <div className="card-stats">
        <img
          src={star}
          alt="star-img"
          className="star-img"
        />

        <p>
          {props.rating} <span className="gray">({props.reviewsCount}) • {props.location}</span>
        </p>
      </div>

      <p>{props.title}</p>
      <p>
        <span className="bold">From ${props.price}</span> / person
      </p>
    </div>
  );
}