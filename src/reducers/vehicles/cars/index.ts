import {
  GET_CARS_START,
  GET_CARS_SUCCESS,
  GET_CARS_FAIL,
  CarsActionTypes,
} from 'actions/vehicles/cars';

export enum CarStatus {
  Free,
  Busy,
  Repair,
}

export interface Car {
  id: number;
  stateNumber: string;
  model: string;
  status: CarStatus;
  color: string;
  imageUrl: string;
  coordinats: number[];
}

export interface CarsState {
  cars: Car[];
  isFetching: boolean;
}

const initialState: CarsState  = {
  cars: [],
  isFetching: false,
};

const carsReducer = (
  state = initialState,
  action: CarsActionTypes
): CarsState => {
  switch (action.type) {
    case GET_CARS_START:
      return { ...state, isFetching: true };
    case GET_CARS_SUCCESS: 
      return {
        ...state,
        isFetching: false,
        cars: action.payload,
      };
    case GET_CARS_FAIL:
      return {
        ...state,
        isFetching: false,
        cars: [],
      };
    default:
      return { ...state };
  }
};

export default carsReducer;
