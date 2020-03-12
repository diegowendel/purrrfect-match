import React from 'react';

import './styles.css';

export default function CatFact({ color, factName, factPercentage }) {
  return (
    <div className="cat-fact-container">
      <div
        style={{
          width: '1em',
          height: '1em',
          background: color,
        }}></div>
      <span>
        {factName}: {factPercentage}%
      </span>
    </div>
  );
}
