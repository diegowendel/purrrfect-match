import {
  SELECT_BREED,
  ASYNC_GET_BREEDS,
  SUCCESS_GET_BREEDS,
  FAILURE_GET_BREEDS,
} from '../actions/actionTypes';

const initialState = {
  breeds: [],
  loading: false,
  selected: undefined,
};

const breedReducer = (state = initialState, action) => {
  switch (action.type) {
    case SELECT_BREED:
      return { ...state, selected: action.payload.selected };
    case ASYNC_GET_BREEDS:
      return {
        ...state,
        loading: true,
      };
    case SUCCESS_GET_BREEDS:
      return {
        breeds: action.payload.breeds,
        loading: false,
        selected: undefined,
      };
    case FAILURE_GET_BREEDS:
      return {
        breeds: [],
        loading: false,
        selected: undefined,
      };
    default:
      return state;
  }
};

export default breedReducer;
