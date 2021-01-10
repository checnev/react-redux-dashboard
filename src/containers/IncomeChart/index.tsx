import { useSelector } from 'react-redux';
import { dailyReportsSelector } from 'selectors/stats';
import IncomeChart from 'components/IncomeChart';

const IncomeChartContainer= () => {
  const incomeReports = useSelector(dailyReportsSelector);
  
  return <IncomeChart reports={incomeReports} />;
};

export default IncomeChartContainer;
