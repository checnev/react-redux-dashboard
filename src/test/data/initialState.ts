import moment from 'moment';
import cars from 'test/data/cars';
import { RootState } from 'store';
import type { CarReports, CarDailyReport } from 'reducers/vehicles/reports';

const from = moment('10.12.2020', 'DD.MM.YYYY');
const to = moment('17.12.2020', 'DD.MM.YYYY')

const reports: CarReports = new WeakMap();
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
  reports.set(car, data);
});

const state: RootState = {
  router: {
    location: {
      pathname: '',
      search: '',
      state: '',
      hash: '',
    },
    action: 'POP',
  },
  layout: {
    themeMode: 'light',
    isDrawerOpen: false,
  },
  dashboard: {
    from,
    to,
  },
  vehicles: {
    cars: {
      cars,
      isFetching: false,
    },
    reports: {
      reports,
      isFetching: false,
      requestId: null,
    }
  } 
};

export default state;
