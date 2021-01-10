import React, { useEffect } from 'react';
import { useSelector, useDispatch, shallowEqual } from 'react-redux';
import { useParams } from 'react-router-dom';
import { getCarById } from 'actions/vehicles/cars';
import { getCarReports } from 'actions/vehicles/reports';
import { dateRangeSelector } from 'selectors/dashboard';
import CarPage from 'components/pages/Car';

import type { RootState } from 'store';

const CarPageContainer = () => {
  const { id } = useParams<{ id: string }>();
  const dispatch = useDispatch();
  const dateRange = useSelector(dateRangeSelector, shallowEqual);
  const car = useSelector((state: RootState) => state.vehicles.cars.cars.find((car) => String(car.id) === id));

  useEffect(() => {
    if (!car) {
      dispatch(
        getCarById(id)
      );
    }
  }, [id, dispatch, car]);

  useEffect(() => {
    if (car) {
      dispatch(
        getCarReports([car], dateRange.from, dateRange.to)
      );
    }
  }, [car, dateRange, dispatch]);

  return <CarPage car={car} />;
};

export default CarPageContainer;
