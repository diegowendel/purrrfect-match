import React from 'react';
import { useSelector } from 'react-redux';

import banner from '../../assets/img/banner.jpg';

import './styles.css';

export default function CatViewBanner() {
  const { stats } = useSelector(state => state.cats);

  return (
    <section className="cat-view-banner-container">
      <img src={stats ? stats.url : banner} alt="Cat banner" />
    </section>
  );
}
