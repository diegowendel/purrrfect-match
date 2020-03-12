import { combineReducers } from 'redux';

import breeds from './breeds';
import cats from './cats';

export default combineReducers({ breeds, cats });
