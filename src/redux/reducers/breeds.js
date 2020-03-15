import {
  ASYNC_GET_BREEDS,
  FAILURE_GET_BREEDS,
  SELECT_BREED,
  SUCCESS_GET_BREEDS,
  TOGGLE_BREEDS_MENU,
} from '../actions/actionTypes';

const initialState = {
  breeds: [],
  loading: false,
  selected: undefined,
  showingBreedsMenu: false,
};

const breedReducer = (state = initialState, action) => {
  switch (action.type) {
    case ASYNC_GET_BREEDS:
      return {
        ...state,
        loading: true,
      };
    case FAILURE_GET_BREEDS:
      return {
        ...state,
        breeds: [],
        loading: false,
        selected: undefined,
      };
    case SELECT_BREED:
      return {
        ...state,
        selected: action.payload.selected,
        showingBreedsMenu: false,
      };
    case SUCCESS_GET_BREEDS:
      return {
        ...state,
        breeds: action.payload.breeds,
        loading: false,
        selected: undefined,
      };
    case TOGGLE_BREEDS_MENU:
      return {
        ...state,
        showingBreedsMenu: !state.showingBreedsMenu,
      };
    default:
      return state;
  }
};

export default breedReducer;
