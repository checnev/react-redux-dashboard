import CarsService from 'services/CarsService';
import { v4 as uuid4 } from 'uuid';

import type { Moment } from 'moment';
import type { RootState } from 'store';
import type { ThunkAction } from 'redux-thunk';
import type { Car } from 'reducers/vehicles/cars';
import type { CarReports } from 'reducers/vehicles/reports';

interface ActionWithRequestId {
  requestId: string | null;
}

interface GetCarReportsStartAction extends ActionWithRequestId {
  type: typeof GET_CAR_REPORTS_START;
}

interface GetCarReportsSuccessAction extends ActionWithRequestId {
  type: typeof GET_CAR_REPORTS_SUCCESS;
  payload: CarReports;
}

interface GetCarReportsFailAction extends ActionWithRequestId {
  type: typeof GET_CAR_REPORTS_FAIL;
  payload: string;
}

export type CarReportsActionTypes = GetCarReportsStartAction | GetCarReportsSuccessAction | GetCarReportsFailAction;

export const GET_CAR_REPORTS_START = 'GET_CAR_REPORTS_START';
export const GET_CAR_REPORTS_SUCCESS = 'GET_CAR_REPORTS_SUCCESS';
export const GET_CAR_REPORTS_FAIL = 'GET_CAR_REPORTS_FAIL';

export const getCarReports = (
  cars: Car[],
  from: Moment,
  to: Moment
): ThunkAction<void, RootState, unknown, CarReportsActionTypes> => (
  async (dispatch) => {
    const requestId = uuid4();
    dispatch({
      type: GET_CAR_REPORTS_START,
      requestId,
    });
    
    try {
      const data = await CarsService.getCarReports(cars, from, to);
      dispatch({
        type: GET_CAR_REPORTS_SUCCESS,
        payload: data,
        requestId,
      });
    } catch (err) {
      dispatch({
        type: GET_CAR_REPORTS_FAIL,
        payload: err.message,
        requestId,
      });
    }
  }
);
