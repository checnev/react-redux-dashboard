import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getCars } from 'actions/vehicles/cars';
import MapsPage from 'components/pages/Maps';
import { carsSelector } from 'selectors/cars';

const MapsPageContainer = () => {
  const dispatch = useDispatch();
  const cars = useSelector(carsSelector);

  useEffect(() => {
    dispatch(getCars());
  }, [dispatch]);

  return <MapsPage cars={cars} />;
};

export default MapsPageContainer;
