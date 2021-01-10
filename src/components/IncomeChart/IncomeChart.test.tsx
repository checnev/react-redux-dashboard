import { render, unmountComponentAtNode } from 'react-dom';
import { act } from 'react-dom/test-utils';
import pretty from 'pretty';
import IncomeChart from 'components/IncomeChart';
import type { DailyReport } from 'selectors/stats';

jest.mock('recharts', () => ({
  AreaChart: () => <div data-testid="AreaChart"></div>,
  Area: () => <div data-testid="area"></div>,
  Tooltip: () => <div data-testid="Tooltip"></div>,
  XAxis: () => <div data-testid="XAxis"></div>,
  YAxis: () => <div data-testid="YAxis"></div>,
  CartesianGrid: () => <div data-testid="CartesianGrid"></div>,
  ResponsiveContainer: () => <div data-testid="ResponsiveContainer"></div>,
}));

const reports: DailyReport[] = [
  { 
    date: "11.12.2020",
    income: 1000,
    countOfLeases: 5,
    incidents: 1,
  },
  {
    date: "12.12.2020",
    income: 2000,
    countOfLeases: 6,
    incidents: 0,
  },
  {
    date: "13.12.2020",
    income: 1000,
    countOfLeases: 5,
    incidents: 0,
  },
  {
    date: "14.12.2020",
    income: 2000,
    countOfLeases: 5,
    incidents: 0,
  },
  {
    date: "15.12.2020",
    income: 1000,
    countOfLeases: 2,
    incidents: 0,
  },
  {
    date: "16.12.2020",
    income: 5000,
    countOfLeases: 6,
    incidents: 0,
  },
];

let container: any = null;
beforeEach(() => {
  container = document.createElement("div");
  document.body.append(container);
});

afterEach(() => {
  unmountComponentAtNode(container);
  container.remove();
  container = null;
});

it('IncomeChart render', () => {
  act(() => {
    render(<IncomeChart reports={reports} />, container);
  });

  expect(
    pretty(container.innerHTML)
  ).toMatchSnapshot();
});
