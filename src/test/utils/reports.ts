import moment, { Moment } from 'moment';
import type { Car } from 'reducers/vehicles/cars';
import type { CarDailyReport, CarReports } from 'reducers/vehicles/reports';

export const createCarReports = (cars: Car[], from: Moment, to: Moment) => {
  const carsData: CarReports = new WeakMap();
  const days = Math.abs(to.diff(from, 'd'));

  cars.forEach((car) => {
    const data: CarDailyReport[] = Array.from(
      { length: days },
      (day, index) => ({
        carId: car.id,
        date: moment(from).add(index, 'd'),
        income: Math.floor(Math.abs(Math.cos(index + car.id) * 50000)),
        countOfLeases: 10 + index + car.id,
        incidents: Math.floor(index * 0.5) % car.id,
      })
    );
    carsData.set(car, data);
  });

  return carsData;
};
