import { useSelector } from 'react-redux';
import Summary from 'components/Summary';
import { summarySelector } from 'selectors/stats';

const SummaryContainer = () => {
  const data = useSelector(summarySelector);

  return <Summary data={data} />
};

export default SummaryContainer;
