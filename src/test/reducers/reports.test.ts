import {
  GET_CAR_REPORTS_START,
  GET_CAR_REPORTS_SUCCESS,
  GET_CAR_REPORTS_FAIL,
  CarReportsActionTypes
} from 'actions/vehicles/reports';
import reportsReducer, { ReportsState } from 'reducers/vehicles/reports';
import state from 'test/data/initialState';
import moment from 'moment';
import { createCarReports } from 'test/utils/reports';

let reportsState: ReportsState = Object.assign({}, state.vehicles.reports);

const dateRange = {
  from: moment('10.12.2020', 'DD.MM.YYYY'),
  to: moment('17.12.2020', 'DD.MM.YYYY'),
};
const cars = state.vehicles.cars.cars;
const reports = createCarReports(cars, dateRange.from, dateRange.to);

describe('Reports Reducer', () => {
  beforeEach(() => {
    reportsState = Object.assign({}, state.vehicles.reports);
  });

  it('GET_CAR_REPORTS_START', () => {
    const action: CarReportsActionTypes = {
      type: GET_CAR_REPORTS_START,
      requestId: 'firstRequest',
    };

    const newState = reportsReducer(reportsState, action);
    expect(newState.isFetching).toBe(true);
    expect(newState.requestId).toBe('firstRequest');
  });

  it('GET_CAR_REPORTS_SUCCESS', () => {
    const requestId = 'firstRequest';

    reportsState.requestId = requestId;
    const action: CarReportsActionTypes = {
      type: GET_CAR_REPORTS_SUCCESS,
      payload: reports,
      requestId,
    };

    const newState = reportsReducer(reportsState, action);
    expect(newState.isFetching).toBe(false);
    expect(newState.requestId).toBe(null);

    cars.forEach((car) => {
      expect(newState.reports?.has(car)).toBe(true);
    });
  });

  it('GET_CAR_REPORTS_FAIL', () => {
    const requestId = 'firstRequest';

    reportsState.requestId = requestId;
    const action: CarReportsActionTypes = {
      type: GET_CAR_REPORTS_FAIL,
      payload: 'Error Message',
      requestId,
    };

    const newState = reportsReducer(reportsState, action);
    expect(newState.isFetching).toBe(false);
    expect(newState.requestId).toBe(null);
    expect(newState.reports).toBe(null);
  });

  it('GET_CAR_REPORTS_SUCCESS should return same state', () => {
    reportsState.requestId = 'firstRequest';
    const action: CarReportsActionTypes = {
      type: GET_CAR_REPORTS_SUCCESS,
      payload: reports,
      requestId: 'secondRequest',
    };

    const newState = reportsReducer(reportsState, action);
    expect(newState).toEqual(reportsState);
  });
});
