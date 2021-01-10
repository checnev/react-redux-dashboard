import { render, unmountComponentAtNode } from 'react-dom';
import { act } from 'react-dom/test-utils';
import pretty from 'pretty';
import Layout from 'containers/Layout';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import state from 'test/data/initialState';

const mockStore = configureMockStore([thunk]);

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

it('LayoutContainer render', () => {
  const store = mockStore(state);
  act(() => {
    render(
      <Provider store={store}>
        <Router>
          <Layout>test content</Layout>
        </Router>
      </Provider>,
      container
    );
  });

  expect(
    pretty(container.innerHTML)
  ).toMatchSnapshot();
});
