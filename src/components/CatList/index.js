import React from 'react';

import './styles.css';

function CatItem({ cat }) {
  return (
    <li>
      <div className="cat-avatar">
        <img src={cat.url} alt="Cat" />
      </div>
      <h3>Fluffy Jenkins</h3>
      <span>
        <b>Age:</b> 3 years
      </span>
      <span>
        <b>Favorite activity:</b> Eating
      </span>
      <span>
        <b>Pet peave:</b> Hairballs
      </span>
    </li>
  );
}

export default function CatList() {
  return (
    <main className="cat-list-container">
      <div className="cat-list-header">
        <h2>CAT LIST</h2>
      </div>
      <div className="cat-list-body">
        <ul>
          {/* {data.map((cat, index) => (
            <CatItem key={index} cat={cat} />
          ))} */}
        </ul>
      </div>
    </main>
  );
}
