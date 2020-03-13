import { SELECT_CAT, SUCCESS_GET_CATS } from '../actions/actionTypes';

const initialState = {
  cats: [],
  loading: false,
  stats: undefined,
};

function getFactPercentage(fact, breed) {
  const total =
    breed.affection_level +
    breed.energy_level +
    breed.grooming +
    breed.vocalisation;
  const factLevel = breed[fact];
  return ((factLevel / total) * 100).toFixed(1);
}

function getStats(cat) {
  let stats;
  if (cat && cat.breeds[0]) {
    const breed = cat.breeds[0];
    stats = {
      breed: breed,
      affection: getFactPercentage('affection_level', breed),
      energy: getFactPercentage('energy_level', breed),
      grooming: getFactPercentage('grooming', breed),
      vocalisation: getFactPercentage('vocalisation', breed),
      url: cat.url,
    };
  } else {
    stats = {
      breed: undefined,
      affection: 0,
      energy: 0,
      grooming: 0,
      vocalisation: 0,
      url: '',
    };
  }

  return stats;
}

const catReducer = (state = initialState, action) => {
  switch (action.type) {
    case SELECT_CAT:
      let cat = action.payload.cat;
      let stats = getStats(cat);
      return { ...state, stats };
    case SUCCESS_GET_CATS:
      return {
        ...state,
        cats: action.payload.cats,
        loading: false,
      };
    default:
      return state;
  }
};

export default catReducer;
