import { createSelector } from 'reselect';
import { carsSelector, reportsSelector } from './cars';
import type { Car } from 'reducers/vehicles/cars';
import type { CarReport, CarReports } from 'reducers/vehicles/reports';

export interface DailyReport extends CarReport {
  date: string;
}

export const dailyReportsSelector = createSelector(
  carsSelector,
  reportsSelector,
  (cars: Car[], reports: CarReports | null) => {
    const dailyReports: Record<string, DailyReport> = {};
    for (let car of cars) {
      const carReports = reports?.get(car);
      if (!carReports) continue;
      carReports.forEach((report) => {
        const date = report.date.format('DD.MM.YYYY');
        let currentDate = dailyReports[date];

        dailyReports[date] = {
          date,
          income: currentDate ? currentDate.income + report.income : report.income,
          countOfLeases: currentDate ? currentDate.countOfLeases + report.countOfLeases : report.countOfLeases,
          incidents: currentDate ? currentDate.incidents + report.incidents : report.incidents,
        };
      });
    }

    return Object.values(dailyReports);
  }
);

export const summarySelector = createSelector(
  dailyReportsSelector,
  (reports: DailyReport[]) => {
    if (!reports.length) return null;

    return reports.reduce((summary: CarReport, report) => {
      summary.income += report.income;
      summary.countOfLeases += report.countOfLeases;
      summary.incidents += report.incidents;

      return summary;
    }, {
      income: 0,
      countOfLeases: 0,
      incidents: 0,
    })
  }
);
