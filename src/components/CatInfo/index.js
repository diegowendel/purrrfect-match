import React from 'react';
import CatViewBanner from '../CatViewBanner';
import CatViewInfo from '../CatViewInfo';

import './styles.css';

export default function CatInfo() {
  return (
    <div className="cat-info-container">
      <CatViewBanner />
      <CatViewInfo />
    </div>
  );
}
