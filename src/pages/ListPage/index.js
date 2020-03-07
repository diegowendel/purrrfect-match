import React from 'react';
import CatFeed from '../../components/CatFeed';
import CatList from '../../components/CatList';

import './styles.css';

export default function ListPage() {
  return (
    <div className="list-page-container">
      <CatFeed />
      <CatList />
    </div>
  );
}
