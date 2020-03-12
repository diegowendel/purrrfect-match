import React from 'react';
import { useSelector } from 'react-redux';

import banner from '../../assets/img/banner.jpg';

import './styles.css';

export default function CatViewBanner() {
  const { selected } = useSelector(state => state.cats);

  return (
    <section className="cat-view-banner-container">
      <img src={selected ? selected.url : banner} alt="Cat banner" />
    </section>
  );
}
