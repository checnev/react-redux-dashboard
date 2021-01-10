import { render, unmountComponentAtNode} from 'react-dom';
import { act } from 'react-dom/test-utils';
import pretty from 'pretty';
import ReportTable from 'components/ReportTable';
import type { DailyReport } from 'selectors/stats';

jest.mock('@material-ui/core/TablePagination', () => {
  return function DummyTablePagination() {
    return <div data-testid="pagination"></div>;
  };
});

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
  container = document.createElement('div');
  document.body.append(container);
});

afterEach(() => {
  unmountComponentAtNode(container);
  container.remove();
  container = null;
});

it('ReportTable render', () => {
  act(() => {
    render(<ReportTable reports={reports} />, container);
  });

  expect(
    pretty(container.innerHTML)
  ).toMatchSnapshot();
});
