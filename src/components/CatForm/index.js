import React from 'react';

import nextIcon from '../../assets/svg/arrow_next_white.svg';
import plusIcon from '../../assets/svg/plus_white.svg';

import './styles.css';

export default function CatForm() {
  return (
    <section className="cat-form-container">
      <div className="cat-form-inner-container">
        <h1 className="cat-form-title">ADD NEW CAT</h1>

        <form>
          <h1>Cat</h1>
          <label>Name</label>
          <input type="text" name="name" />
          <label>Age</label>
          <input type="text" name="name" />
          <label>Favorite Activity</label>
          <input type="text" name="name" />
          <label>Pet Peave</label>
          <input type="text" name="name" />

          <h1>Ownership</h1>
          <label>Location</label>
          <input type="text" name="name" />
          <label>Organization</label>
          <input type="text" name="name" />
          <label>Medical record</label>
          <div className="input-with-button">
            <input type="text" name="name" />
            <img src={plusIcon} alt="Plus icon" />
          </div>
          <button type="submit">
            NEXT
            <img src={nextIcon} alt="Next icon" />
          </button>
        </form>
      </div>
    </section>
  );
}
