import type { Car } from 'reducers/vehicles/cars';

const cars: Car[] = [
  {
    id: 1,
    stateNumber: 'A 100 AA',
    model: 'Hyundai solaris 2014',
    status: 0,
    color: '#fff',
    imageUrl: '/images/solaris.jpg',
    coordinats: [1, 1],
  },
  {
    id: 2,
    stateNumber: 'А 101 АА',
    model: 'Kia Rio 2014',
    status: 1,
    color: '#ccc',
    imageUrl: '/images/rio.jpg',
    coordinats: [1, 1],
  },
];

export default cars;
