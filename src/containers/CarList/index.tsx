import { useSelector } from 'react-redux';
import { carWithReportsSelector } from 'selectors/cars';
import CarList from 'components/CarList';

const CarListContainer = () => {
  const carList = useSelector(carWithReportsSelector);
  return <CarList cars={carList} />;
}

export default CarListContainer;
