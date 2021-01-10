import { combineReducers } from 'redux';
import carsReducer from './cars';
import reportsReducer from './reports';

export default combineReducers({
  cars: carsReducer,
  reports: reportsReducer,
});
