import React from 'react';
import CatBreed from '../../components/CatBreed';
import CatList from '../../components/CatList';

import './styles.css';

export default function ListPage() {
  return (
    <div className="list-page-container">
      <CatBreed />
      <CatList />
    </div>
  );
}
