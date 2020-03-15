import React from 'react';

import banner from '../../assets/img/banner.jpg';

import './styles.css';

const bannerStyle = {
  background: `linear-gradient(rgba(3, 0, 250, 0.4), rgba(3, 0, 250, 0.4)), url(${banner}) center center`,
  borderRadius: '5px',
  width: '100%',
  height: '100%',
  minHeight: '40vh',
  /* Center the image */
  backgroundPosition: 'center',
  /* Do not repeat the image */
  backgroundRepeat: 'no-repeat',
  /* Resize the background image to cover the entire container */
  backgroundSize: 'cover',
};

export default function CatFormBanner() {
  return (
    <section className="cat-form-banner-container">
      <div className="bannerStyle" style={bannerStyle}>
        <h1>Help Make a Purrrfect Match.</h1>
      </div>
    </section>
  );
}
