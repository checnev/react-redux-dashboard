import CarsService from 'services/CarsService';
import moment from 'moment';
import type { Car } from 'reducers/vehicles/cars';

describe('CarsService', () => {
  it('getCars() should return promise resolved with cars', async () => {
    const cars: Car[] = await CarsService.getCars();

    expect(cars).not.toBe(null);
    expect(cars.length).toBeGreaterThan(0);
  });

  it('getCarById() should return promise resolved with car', async () => {
    const car: Car | undefined = await CarsService.getCarById('1');

    expect(car).not.toBe(null);
    expect(car).toEqual(
      expect.objectContaining({
        id: expect.any(Number),
        model: expect.any(String),
        stateNumber: expect.any(String),
        color: expect.any(String),
        status: expect.any(Number),
        imageUrl: expect.any(String),
        coordinats: [expect.any(Number), expect.any(Number)],
      })
    );
  });

  it('getCarReports() should return promise resolved with CarReports', async () => {
    const cars = await CarsService.getCars();

    const dateRange = {
      from: moment('10.12.2020', 'DD.MM.YYYY'),
      to: moment('17.10.2020', 'DD.MM.YYYY'),
    };
    const reports = await CarsService.getCarReports(cars, dateRange.from, dateRange.to);

    cars.forEach((car) => {
      expect(reports.has(car)).toBe(true);
    });
  });
});
