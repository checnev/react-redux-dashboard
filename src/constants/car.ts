import { CarStatus } from 'reducers/vehicles/cars';

export const STATUS_AS_STRING: Record<CarStatus, string> = {
  [CarStatus.Free]: 'Свободен',
  [CarStatus.Busy]: 'Занят',
  [CarStatus.Repair]: 'В ремонте',
};
