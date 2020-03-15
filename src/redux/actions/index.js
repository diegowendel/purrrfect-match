import {
  ASYNC_GET_BREEDS,
  ASYNC_GET_CATS,
  SELECT_BREED,
  SELECT_CAT,
  TOGGLE_BREEDS_MENU,
} from './actionTypes';

export const getBreeds = () => ({
  type: ASYNC_GET_BREEDS,
});

export const getCatsByBreed = breedId => ({
  type: ASYNC_GET_CATS,
  payload: {
    breed: breedId,
  },
});

export const selectBreed = name => ({
  type: SELECT_BREED,
  payload: {
    selected: name,
  },
});

export const selectCat = cat => ({
  type: SELECT_CAT,
  payload: {
    cat,
  },
});

export const toggleBreedsMenu = () => ({
  type: TOGGLE_BREEDS_MENU,
});
