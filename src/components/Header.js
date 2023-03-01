import React from 'react';
import klogo from '../assets/klogo.png';

function Header() {
  return (
    <div>
    <header className="d-flex flex-wrap justify-content-center py-3 mb-4 border-bottom">
      <a href="/" className="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-dark text-decoration-none">
        <img className="bi me-2" width="40" height="32" src={klogo} alt="fun icon" />
        <span className="fs-4">Fun game</span>
      </a>
    </header>
  </div>
  );
}

export default Header;