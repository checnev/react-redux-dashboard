import {
  GET_CARS_START,
  GET_CARS_SUCCESS,
  CarsActionTypes,
  getCarById,
  getCars,
} from 'actions/vehicles/cars';
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import CarsService from 'services/CarsService';
import cars from 'test/data/cars';

const mockStore = configureMockStore([thunk]);

describe('Cars ActionCreator getCarById', () => {
  const mockGetCarById = jest.fn().mockImplementation((id: string) => {
    const car = cars.find((car) => car.id === parseInt(id, 10));
    return Promise.resolve(car);
  });

  CarsService.getCarById = mockGetCarById;

  afterEach(() => {
    mockGetCarById.mockClear();
  });

  it('getCarById should dispatch actions GET_CARS_START, GET_CARS_SUCCESS', async () => {
    const expectedActions: CarsActionTypes[] = [
      {
        type: GET_CARS_START,
      },
      {
        type: GET_CARS_SUCCESS,
        payload: [cars[0]],
      },
    ];

    const store = mockStore({});

    await store.dispatch<any>(getCarById('1'));
    expect(store.getActions()).toEqual(expectedActions);
  });

  it('getCarById should call CarsService.getCarById()', async () => {
    const store = mockStore({});

    await store.dispatch<any>(getCarById('1'));
    expect(mockGetCarById).toBeCalledTimes(1);
  });
});


describe('Cars ActionCreator getCars', () => {
  const mockGetCars = jest.fn().mockResolvedValue(cars);

  CarsService.getCars = mockGetCars;

  afterEach(() => {
    mockGetCars.mockClear();
  });

  it('getCars should dispatch GET_CARS_START, GET_CARS_SUCCESS', async () => {
    const expectedActions: CarsActionTypes[] = [
      {
        type: GET_CARS_START,
      },
      {
        type: GET_CARS_SUCCESS,
        payload: cars,
      },
    ];

    const store = mockStore({});
    await store.dispatch<any>(getCars());

    expect(store.getActions()).toEqual(expectedActions);
  });

  it('getCars should call CarsService.getCars()', async () => {
    const store = mockStore({});
    await store.dispatch<any>(getCars());

    expect(mockGetCars).toBeCalledTimes(1);
  });
});
