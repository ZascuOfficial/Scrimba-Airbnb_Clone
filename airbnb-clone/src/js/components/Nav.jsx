import React from 'react';

import airbnbLogo from '../../assets/img/airbnb-logo.png';

export default function Nav() {
  return (
    <nav className="nav">
      <a
        href="https://www.airbnb.com/"
        target="_blank"
        className='airbnb-link'
      >
        <img
          src={airbnbLogo}
          alt="airbnb-logo"
          className="airbnb-logo"
        />
      </a>
    </nav>
  );
}