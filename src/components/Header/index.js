import React, { useEffect, useState } from 'react';
import { useLocation, useHistory } from 'react-router-dom';

import logo from '../../assets/svg/purrrfect_logo.svg';
import plusIcon from '../../assets/svg/plus.svg';
import searchIcon from '../../assets/svg/search.svg';

import './styles.css';

export default function Header() {
  let history = useHistory();
  let location = useLocation();
  let [isHome, setIsHome] = useState(true);

  useEffect(() => {
    if (location.pathname === '/') {
      setIsHome(true);
    } else {
      setIsHome(false);
    }
  }, [location]);

  function navigateToHome() {
    history.push('/');
  }

  function navigateToFormPage() {
    history.push('/create');
  }

  return (
    <header className="header-container">
      <img
        className="header-logo"
        src={logo}
        alt="Purrrfect Logo"
        onClick={navigateToHome}
      />
      {isHome && (
        <div className="header-content-right">
          <div className="search-bar">
            <img src={searchIcon} alt="Search icon" />
            <input
              type="text"
              placeholder="Search cats"
              value={''}
              onChange={() => console.log('')}
            />
          </div>
          <button type="button" onClick={navigateToFormPage}>
            <img src={plusIcon} alt="Plus icon" />
            ADD NEW CAT
          </button>
        </div>
      )}
    </header>
  );
}
