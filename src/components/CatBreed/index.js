import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getBreeds, selectBreed } from '../../redux/actions';

import next from '../../assets/svg/arrow_next.svg';

import './styles.css';

export default function CatBreed() {
  const dispatch = useDispatch();
  const { breeds, selected } = useSelector(state => state.breeds);

  useEffect(() => {
    dispatch(getBreeds());
  }, []);

  function setBreed(breed) {
    dispatch(selectBreed(breed));
  }

  return (
    <aside className="cat-breed-container">
      <div className="cat-breed-header">
        <h2>CAT BREEDS</h2>
      </div>
      <div className="cat-breed-body">
        {breeds.map((breed, index) => (
          <div
            key={index}
            className={
              selected === breed.id
                ? 'cat-breed-item cat-breed-item-selected'
                : 'cat-breed-item'
            }
            onClick={() => setBreed(breed.id)}>
            <div className="cat-breed-list-inner">
              <h2>{breed.name}</h2>
              <img src={next} alt="next" />
            </div>
          </div>
        ))}
      </div>
    </aside>
  );
}
