import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router'
import layout from 'reducers/layout';
import dashboard from 'reducers/dashboard';
import vehicles from 'reducers/vehicles';

const createRootReducer = (history: any) => combineReducers({
  router: connectRouter(history),
  layout,
  dashboard,
  vehicles,
});

export default createRootReducer;
