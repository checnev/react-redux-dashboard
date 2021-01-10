import { render, unmountComponentAtNode } from 'react-dom';
import { act } from 'react-dom/test-utils';
import { waitFor, screen } from '@testing-library/react';
import pretty from 'pretty';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import state from 'test/data/initialState';
import CarsService from 'services/CarsService';
import { createCarReports } from 'test/utils/reports';
import cars from 'test/data/cars';
import CarPageContainer from 'containers/pages/Car';

const getCars = jest.fn().mockResolvedValue(cars);
const getCarReports = jest.fn().mockResolvedValue(
  createCarReports(cars, state.dashboard.from, state.dashboard.to)
);

CarsService.getCars = getCars;
CarsService.getCarReports = getCarReports;


jest.mock('react-router-dom', () => {
  const utils = jest.requireActual('react-router-dom');
  return {
    ...utils,
    useParams: () => ({ id: '1' }),
  };
});

jest.mock('react-yandex-maps', () => ({
  YMaps: (props: any) => <div data-testid="YMaps" {...props}></div>,
  Map: (props: any) => {
    const { defaultState, instanceRef, ...otherProps } = props;
    return <div data-testid="Map" {...otherProps}></div>
  },
  Placemark: (props: any) => <div data-testid="Placemark" {...props}></div>,
}));

jest.mock('recharts', () => ({
  AreaChart: () => <div data-testid="AreaChart"></div>,
  Area: () => <div data-testid="area"></div>,
  Tooltip: () => <div data-testid="Tooltip"></div>,
  XAxis: () => <div data-testid="XAxis"></div>,
  YAxis: () => <div data-testid="YAxis"></div>,
  CartesianGrid: () => <div data-testid="CartesianGrid"></div>,
  ResponsiveContainer: () => <div data-testid="ResponsiveContainer"></div>,
}));

jest.mock('@material-ui/core/TablePagination', () => {
  return function DummyTablePagination() {
    return <div data-testid="pagination"></div>;
  };
});


const mockStore = configureMockStore([thunk]);
let store: any = null;

let container: any = null;
beforeEach(() => {
  container = document.createElement('div');
  document.body.append(container);

  store = mockStore(state);
});

afterEach(() => {
  unmountComponentAtNode(container);
  container.remove();
  container = null;
});

describe('CarPageContainer', () => {

  const setUp = (component: React.ReactNode) => (
    <Provider store={store}>
      <Router>
        {component}
      </Router>
    </Provider>
  );

  it('CarPageContainer render', async () => {
    await act(async () => {
      render(setUp(<CarPageContainer />), container);
    });

    await waitFor(() => {
      expect(screen.queryByDisplayValue('Hyundai solaris 2014')).toBeDefined();
    });

    expect(
      pretty(container.innerHTML)
    ).toMatchSnapshot();
  });
  
});
