import CarsService from 'services/CarsService';
import { push, CallHistoryMethodAction } from 'connected-react-router';

import type { RootState } from 'store';
import type { ThunkAction } from 'redux-thunk';
import type { Car } from 'reducers/vehicles/cars';

interface GetCarsStartAction {
  type: typeof GET_CARS_START;
}

interface GetCarsSuccessAction {
  type: typeof GET_CARS_SUCCESS;
  payload: Car[];
}

interface GetCarsFailAction {
  type: typeof GET_CARS_FAIL;
  payload: string;
}

export type CarsActionTypes = GetCarsStartAction 
  | GetCarsSuccessAction 
  | GetCarsFailAction
  | CallHistoryMethodAction;

export const GET_CARS_START = 'GET_CARS_START';
export const GET_CARS_SUCCESS = 'GET_CARS_SUCCESS';
export const GET_CARS_FAIL = 'GET_CARS_FAIL';

export const getCarById = (id: string): ThunkAction<void, RootState, unknown, CarsActionTypes> => (
  async (dispatch) => {
    dispatch({
      type: GET_CARS_START,
    });

    try {
      const car = await CarsService.getCarById(id);

      if (!car) throw new Error(`Car with id ${id} doesn't exist.`);

      dispatch({
        type: GET_CARS_SUCCESS,
        payload: [car],
      });
    } catch (err) {
      dispatch({
        type: GET_CARS_FAIL,
        payload: err.message,
      });

      dispatch(push('/404'));
    }
  }
);

export const getCars = (): ThunkAction<void, RootState, unknown, CarsActionTypes> => (
  async (dispatch) => {
    dispatch({
      type: GET_CARS_START,
    });

    try {
      const cars = await CarsService.getCars();
      dispatch({
        type: GET_CARS_SUCCESS,
        payload: cars,
      });
    } catch (err) {
      dispatch({
        type: GET_CARS_FAIL,
        payload: err.message,
      });
    }
  }
);
