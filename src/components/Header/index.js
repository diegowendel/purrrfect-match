import React, { useEffect, useState } from 'react';
import { useLocation, useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { toggleBreedsMenu } from '../../redux/actions';

import logo from '../../assets/svg/purrrfect_logo.svg';
import plusIcon from '../../assets/svg/plus.svg';
import searchIcon from '../../assets/svg/search.svg';

import './styles.css';

export default function Header() {
  const dispatch = useDispatch();
  const history = useHistory();
  const location = useLocation();
  const { showingBreedsMenu } = useSelector(state => state.breeds);
  const [isHome, setIsHome] = useState(true);

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

  function toggleMenu() {
    dispatch(toggleBreedsMenu());
  }

  return (
    <header className="header-container">
      {isHome && (
        <div
          className={showingBreedsMenu ? 'burger toggle' : 'burger'}
          onClick={toggleMenu}>
          <div className="line1"></div>
          <div className="line2"></div>
          <div className="line3"></div>
        </div>
      )}

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
