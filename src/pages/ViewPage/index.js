import React from 'react';
import CatInfo from '../../components/CatInfo';
import RelatedCats from '../../components/RelatedCats';

import './styles.css';

export default function ViewPage() {
  return (
    <div className="view-page-container">
      <CatInfo />
      <RelatedCats />
    </div>
  );
}
