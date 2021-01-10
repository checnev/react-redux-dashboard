import {
  GET_CAR_REPORTS_START,
  GET_CAR_REPORTS_SUCCESS,
  GET_CAR_REPORTS_FAIL,
  CarReportsActionTypes
} from 'actions/vehicles/reports';

import type { Moment } from 'moment';
import type { Car } from 'reducers/vehicles/cars';

export interface CarReport {
  income: number;
  incidents: number;
  countOfLeases: number;
}

export interface CarDailyReport extends CarReport {
  date: Moment;
  carId: number;
}

export type CarReports = WeakMap<Car, ReadonlyArray<CarDailyReport>>;

export interface ReportsState {
  reports: CarReports | null;
  isFetching: boolean;
  requestId: string | null;
}

const initialState: ReportsState = {
  reports: null,
  isFetching: false,
  requestId: null,
};

const reportsReducer = (
  state = initialState,
  action: CarReportsActionTypes
): ReportsState => {

  switch (action.type) {
    case GET_CAR_REPORTS_START:
      return { 
        ...state,
        isFetching: true,
        requestId: action.requestId,
      };
    case GET_CAR_REPORTS_SUCCESS:
      if (state.requestId !== action.requestId) return state;
      return {
        ...state,
        isFetching: false,
        reports: action.payload,
        requestId: null,
      };
    case GET_CAR_REPORTS_FAIL:
      if (state.requestId !== action.requestId) return state;
      return {
        ...state,
        isFetching: false,
        reports: null,
        requestId: null,
      };
    default:
      return { ...state };
  }
};

export default reportsReducer;
