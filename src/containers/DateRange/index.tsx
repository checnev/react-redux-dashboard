import { useDispatch, useSelector, shallowEqual } from 'react-redux';
import { setFromDate, setToDate } from 'actions/dashboard';
import { dateRangeSelector } from 'selectors/dashboard';
import DateRange from 'components/DateRange';


const DateRangeContainer = () => {
  const dispatch = useDispatch();
  const dateRange = useSelector(dateRangeSelector, shallowEqual);

  const changeDate = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.name === 'from') {
      dispatch(setFromDate(event.target.value));
    } else {
      dispatch(setToDate(event.target.value));
    }
  };

  return <DateRange 
    from={{
      defaultValue: dateRange.from.format('YYYY-MM-DD'),
      onChange: changeDate,
    }}
    to={{
      defaultValue: dateRange.to.format('YYYY-MM-DD'),
      onChange: changeDate,
    }}
  />;
};

export default DateRangeContainer;
