import React from 'react';

import next from '../../assets/arrow_next.svg';

import './styles.css';

export default function CatFeed() {
  return (
    <aside className="cat-feed-container">
      <div className="cat-feed-header">
        <h2>CAT FEED</h2>
      </div>
      <div className="cat-feed-list">
        <h2>How to find the purrrfect pet</h2>
        <img src={next} alt="next" />
      </div>
      <div className="cat-feed-list">
        <h2>What to do with your new cat</h2>
        <img src={next} alt="next" />
      </div>
      <div className="cat-feed-list">
        <h2>How to patty-train your cat</h2>
        <img src={next} alt="next" />
      </div>
    </aside>
  );
}
