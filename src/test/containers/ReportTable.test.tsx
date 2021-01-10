import { render, unmountComponentAtNode } from 'react-dom';
import { act } from 'react-dom/test-utils';
import pretty from 'pretty';
import ReportTable from 'containers/ReportTable';
import { Provider } from 'react-redux';
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import state from 'test/data/initialState';

const mockStore = configureMockStore([thunk]);

jest.mock('@material-ui/core/TablePagination', () => {
  return function DummyTablePagination() {
    return <div data-testid="pagination"></div>;
  };
});

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

it('ReportTableContainer render', () => {
  const store = mockStore(state);
  act(() => {
    render(
      <Provider store={store}>
        <ReportTable />
      </Provider>,
      container
    );
  });

  expect(
    pretty(container.innerHTML)
  ).toMatchSnapshot();
});
