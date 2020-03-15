import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getBreeds, getCatsByBreed, selectBreed } from '../../redux/actions';

import cat from '../../assets/svg/cat_loading.svg';
import next from '../../assets/svg/arrow_next.svg';

import './styles.css';

export default function CatBreed() {
  const dispatch = useDispatch();
  const { breeds, loading, selected, showingBreedsMenu } = useSelector(
    state => state.breeds
  );

  useEffect(() => {
    dispatch(getBreeds());
  }, []);

  useEffect(() => {
    if (selected) {
      dispatch(getCatsByBreed(selected));
    }
  }, [selected]);

  function setBreed(breed) {
    dispatch(selectBreed(breed));
  }

  return (
    <aside
      className={
        showingBreedsMenu
          ? 'cat-breed-container-showing'
          : 'cat-breed-container'
      }>
      <div className="cat-breed-header">
        <h2>CAT BREEDS</h2>
      </div>
      <div className="cat-breed-body">
        {loading ? (
          <div className="cat-breed-body-loader">
            <img src={cat} alt="loading" />
          </div>
        ) : (
          /* Here, we avoid using the index as key for mapped elements.
           * Index as keys may cause bugs in some situations and it is
           * considered an anti-pattern on ReactJS.
           */
          breeds.map(breed => (
            <div
              key={breed.id}
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
          ))
        )}
      </div>
    </aside>
  );
}
