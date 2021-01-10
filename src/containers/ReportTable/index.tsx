import { useSelector } from 'react-redux';
import { dailyReportsSelector } from 'selectors/stats';
import ReportTable from 'components/ReportTable';

const ReportTableContainer = () => {
  const reports = useSelector(dailyReportsSelector);

  return <ReportTable reports={reports} />
};

export default ReportTableContainer;
