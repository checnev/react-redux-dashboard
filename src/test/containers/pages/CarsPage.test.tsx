import { render, unmountComponentAtNode } from 'react-dom';
import { act } from 'react-dom/test-utils';
import { waitFor, screen } from '@testing-library/react';
import pretty from 'pretty';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import state from 'test/data/initialState';
import CarsPageContainer from 'containers/pages/Cars';
import CarsService from 'services/CarsService';
import cars from 'test/data/cars';
import { createCarReports } from 'test/utils/reports';

const getCars = jest.fn().mockResolvedValue(cars);
const getCarReports = jest.fn().mockResolvedValue(
  createCarReports(cars, state.dashboard.from, state.dashboard.to)
);

CarsService.getCars = getCars;
CarsService.getCarReports = getCarReports;

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

describe('CarsPageContainer', () => {

  const setUp = (component: React.ReactNode) => (
    <Provider store={store}>
      <Router>
        {component}
      </Router>
    </Provider>
  );

  it('CarsPageContainer render', async () => {
    await act(async () => {
      render(setUp(<CarsPageContainer />), container);
    });

    await waitFor(() => {
      // 210149 - income for kia rio
      expect(screen.getByText('210149')).toBeDefined();
    });

    expect(
      pretty(container.innerHTML)
    ).toMatchSnapshot();
  });

});
