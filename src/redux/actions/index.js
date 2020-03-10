import { ASYNC_GET_BREEDS, SELECT_BREED } from './actionTypes';

export const getBreeds = () => ({
  type: ASYNC_GET_BREEDS,
});

export const selectBreed = name => ({
  type: SELECT_BREED,
  payload: {
    selected: name,
  },
});
