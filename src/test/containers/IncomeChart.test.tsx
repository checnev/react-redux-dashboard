import { render, unmountComponentAtNode } from 'react-dom';
import { act } from 'react-dom/test-utils';
import pretty from 'pretty';
import IncomeChart from 'containers/IncomeChart';
import { Provider } from 'react-redux';
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import state from 'test/data/initialState';

const mockStore = configureMockStore([thunk]);

jest.mock('recharts', () => ({
  AreaChart: () => <div data-testid="AreaChart"></div>,
  Area: () => <div data-testid="area"></div>,
  Tooltip: () => <div data-testid="Tooltip"></div>,
  XAxis: () => <div data-testid="XAxis"></div>,
  YAxis: () => <div data-testid="YAxis"></div>,
  CartesianGrid: () => <div data-testid="CartesianGrid"></div>,
  ResponsiveContainer: () => <div data-testid="ResponsiveContainer"></div>,
}));

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

it('IncomeChartContainer render', () => {
  const store = mockStore(state);
  act(() => {
    render(
      <Provider store={store}>
        <IncomeChart />
      </Provider>,
      container
    );
  });

  expect(
    pretty(container.innerHTML)
  ).toMatchSnapshot();
});
