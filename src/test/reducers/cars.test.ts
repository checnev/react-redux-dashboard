import {
  GET_CARS_START,
  GET_CARS_SUCCESS,
  GET_CARS_FAIL,
  CarsActionTypes,
} from 'actions/vehicles/cars';
import carsReducer, { CarsState } from 'reducers/vehicles/cars';
import state from 'test/data/initialState';

let carsState: CarsState = Object.assign({}, state.vehicles.cars);

describe('Cars reducer', () => {

  beforeEach(() => {
    carsState = Object.assign({}, state.vehicles.cars);
  });

  it('GET_CARS_START', () => {
    const action: CarsActionTypes = {
      type: GET_CARS_START,
    };

    const newState = carsReducer(carsState, action);
    expect(newState.isFetching).toBe(true);
  });

  it('GET_CARS_SUCCESS', () => {
    const cars = [
      {
        id: 2,
        model: 'Honda Accord',
        stateNumber: 'A 100 AA',
        status: 0,
        color: '#000',
        imageUrl: '/images/honda.jpg',
        coordinats: [1, 1],
      }
    ];

    const action: CarsActionTypes = {
      type: GET_CARS_SUCCESS,
      payload: cars,
    };

    const newState = carsReducer(carsState, action);

    expect(newState.isFetching).toBe(false);
    expect(newState.cars).toEqual(cars);
  });

  it('GET_CARS_FAIL', () => {
    const action: CarsActionTypes = {
      type: GET_CARS_FAIL,
      payload: 'Error Message',
    };

    const newState = carsReducer(carsState, action);
    expect(newState.isFetching).toBe(false);
    expect(newState.cars.length).toBe(0);
  });
});
