import {
  SET_FROM_DATE,
  SET_TO_DATE,
  DashboardActionTypes,
} from 'actions/dashboard';
import dashboardReducer, { DashboardState } from 'reducers/dashboard';
import moment from 'moment';
import state from 'test/data/initialState';

let dashboardState: DashboardState = Object.assign({}, state.dashboard);

describe('Dashboard reducer', () => {

  beforeEach(() => {
    dashboardState = Object.assign({}, state.dashboard);
  });

  it('SET_FROM_DATE', () => {
    const from = moment('10.12.2020', 'DD.MM.YYYY');
    const action: DashboardActionTypes = {
      type: SET_FROM_DATE,
      payload: from,
    };

    const newState = dashboardReducer(dashboardState, action);
    expect(newState.from).toBe(from);
  });

  it('SET_TO_DATE', () => {
    const to = moment('17.12.2020', 'DD.MM.YYYY');
    const action: DashboardActionTypes = {
      type: SET_TO_DATE,
      payload: to,
    };

    const newState = dashboardReducer(dashboardState, action);
    expect(newState.to).toBe(to);
  });
});
