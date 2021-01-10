import {
  GET_CAR_REPORTS_START,
  GET_CAR_REPORTS_SUCCESS,
  getCarReports,
} from 'actions/vehicles/reports';
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import CarsService from 'services/CarsService';
import cars from 'test/data/cars';
import { createCarReports } from 'test/utils/reports';
import moment from 'moment';

const mockStore = configureMockStore([thunk]);
const dateRange = {
  from: moment('10.12.2020', 'DD.MM.YYYY'),
  to: moment('17.12.2020', 'DD.MM.YYYY'),
};

describe('Reports ActionCreator getCarReports', () => {
  const mockGetCarReports = jest.fn().mockImplementation(createCarReports);

  CarsService.getCarReports = mockGetCarReports;

  afterEach(() => {
    mockGetCarReports.mockClear();
  });

  it('getCarReports should dispatch actions GET_CAR_REPORTS_START, GET_CAR_REPORTS_SUCCESS', async () => {

    const store = mockStore({});
    await store.dispatch<any>(getCarReports(cars, dateRange.from, dateRange.to));

    const actions = store.getActions();

    expect(actions.length).toBe(2);
    expect(actions[0].type).toBe(GET_CAR_REPORTS_START);
    expect(actions[1].type).toBe(GET_CAR_REPORTS_SUCCESS);
  });

  it('getCarReports should call CarsService.getCarReports()', async () => {
    const store = mockStore({});
    await store.dispatch<any>(getCarReports(cars, dateRange.from, dateRange.to));

    expect(mockGetCarReports).toBeCalledTimes(1);
  });
});
