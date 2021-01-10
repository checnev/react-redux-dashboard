import React, { useEffect } from 'react';
import { useSelector, useDispatch, shallowEqual } from 'react-redux';
import { getCars } from 'actions/vehicles/cars';
import { getCarReports } from 'actions/vehicles/reports';
import DashboardPage from 'components/pages/Dashboard';
import { dateRangeSelector } from 'selectors/dashboard';
import { carsSelector } from 'selectors/cars';

const DashboardPageContainer = () => {
  const dispatch = useDispatch();
  const dateRange = useSelector(dateRangeSelector, shallowEqual);
  const cars = useSelector(carsSelector);

  useEffect(() => {
    dispatch(getCars());
  }, [dispatch])

  useEffect(() => {
    if (cars.length > 0) {
      dispatch(getCarReports(cars, dateRange.from, dateRange.to));
    }
  }, [dispatch, cars, dateRange]);

  return <DashboardPage />;
};

export default DashboardPageContainer;
