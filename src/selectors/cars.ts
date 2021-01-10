import { createSelector } from 'reselect';
import type { RootState } from 'store';
import type { Car } from 'reducers/vehicles/cars';
import type { CarReport, CarReports } from 'reducers/vehicles/reports';

export interface CarWithReport extends Car {
  report?: CarReport;
}

export const carsSelector = (state: RootState) => state.vehicles.cars.cars;
export const reportsSelector = (state: RootState) => state.vehicles.reports.reports;

export const carWithReportsSelector = createSelector(
  carsSelector,
  reportsSelector,
  (cars: Car[], reports: CarReports | null) => {
    const carList: CarWithReport[] = [];

    for (let car of cars) {
      const carReports = reports?.get(car);
      const carData: CarWithReport = Object.assign({}, car);

      if (carReports) {
        carData.report = carReports.reduce((summary: CarReport, report) => {
          summary.income += report.income;
          summary.countOfLeases += report.countOfLeases;
          summary.incidents += report.incidents;

          return summary;
        }, {
          income: 0,
          countOfLeases: 0,
          incidents: 0,
        });
      }

      carList.push(carData);
    }

    return carList;
  }
);
