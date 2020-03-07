import React from 'react';
import logo from '../../assets/purrrfect_logo.svg';

import './styles.css';

export default function Header() {
  return (
    <header className="header-container">
      <img src={logo} alt="Purrrfect Logo" />
      <div className="header-content-right">
        <div>Search cats</div>
        <div>Add new Cat</div>
      </div>
    </header>
  );
}
