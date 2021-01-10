import moment, { Moment } from 'moment';
import type { Car } from 'reducers/vehicles/cars';
import type { CarDailyReport, CarReports } from 'reducers/vehicles/reports';


class CarsService {
  private static cars: Car[] = [
    {
      id: 1,
      stateNumber: 'С 012 РС',
      model: 'Hyndai Solaris (2014)',
      status: 0,
      color: '#d76830',
      imageUrl: '/images/cars/hyundai-solaris-2014.jpg',
      coordinats: [56.835832, 60.615666],
    },
    {
      id: 2,
      stateNumber: 'М 123 ВС',
      model: 'Kia Rio (2014)',
      status: 1,
      color: '#808483',
      imageUrl: '/images/cars/kia-rio-2014.jpg',
      coordinats: [56.816553, 60.564730],
    },
    {
      id: 3,
      stateNumber: 'О 684 РТ',
      model: 'Ford Mondeo (2018)',
      status: 2,
      color: '#655c57',
      imageUrl: '/images/cars/ford-mondeo-2018.jpg',
      coordinats: [56.831751, 60.562233],
    },
  ];

  public static getCarById(id: string): Promise<Car | undefined> {

    return new Promise((resolve) => {
      setTimeout(() => {
        const car = CarsService.cars.find((car) => String(car.id) === id);
        resolve(car);
      }, 2500);
    });
  }
  public static getCars(): Promise<Car[]> {
    return new Promise((resolve) => {
      setTimeout(() => resolve(CarsService.cars), 2500);
    });
  }

  public static getCarReports(cars: Car[], from: Moment, to: Moment): Promise<CarReports> {
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

    return new Promise((resolve) => {
      setTimeout(() => resolve(carsData), 2500);
    });
  }
}

export default CarsService;
