import state from 'test/data/initialState';
import {
  carsSelector,
  reportsSelector,
  carWithReportsSelector,
} from 'selectors/cars';

describe('Cars Selectors', () => {
  it('carsSelector() should return cars', () => {
    const cars = carsSelector(state);

    expect(cars).toEqual(state.vehicles.cars.cars);
  });

  it('reportsSelector() should return reports for cars', () => {
    const reports = reportsSelector(state);

    expect(reports).toEqual(state.vehicles.reports.reports);
  });

  it('carWithReportsSelector() should return car with reports', () => {
    const carWithReports = carWithReportsSelector(state);

    expect(carWithReports.length).toBe(2);
    expect(carWithReports[0].report).toEqual(
      expect.objectContaining({
        income: expect.any(Number),
        countOfLeases: expect.any(Number),
        incidents: expect.any(Number),
      })
    );
  });
});
