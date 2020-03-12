import React from 'react';

import './styles.css';

export default function ProgressBar({ level, personalityTrait }) {
  return (
    <div>
      <p className="progress-bar-label">{personalityTrait}</p>
      <div className="progress-bar">
        <div
          style={{
            width: `${20 * level}%`,
            height: '1.4rem',
            borderRadius: '1.4rem',
            background: '#5d5bf5',
          }}></div>
      </div>
    </div>
  );
}
