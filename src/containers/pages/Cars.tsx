import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getCars } from 'actions/vehicles/cars';
import { getCarReports } from 'actions/vehicles/reports';
import { carsSelector } from 'selectors/cars';
import CarsPage from 'components/pages/Cars';
import moment from 'moment';

const dateRange = {
  from: moment().add(-1, 'y'),
  to: moment(),
};

const CarsPageContainer = () => {
  const dispatch = useDispatch();
  const cars = useSelector(carsSelector);

  useEffect(() => {
    dispatch(getCars());
  }, [dispatch])

  useEffect(() => {
    if (cars.length > 0) {
      dispatch(getCarReports(cars, dateRange.from, dateRange.to));
    }
  }, [dispatch, cars]);

  return <CarsPage />;
};

export default CarsPageContainer;
