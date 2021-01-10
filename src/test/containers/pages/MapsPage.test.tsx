import { render, unmountComponentAtNode } from 'react-dom';
import { act } from 'react-dom/test-utils';
import pretty from 'pretty';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import state from 'test/data/initialState';

import MapsPageContainer from 'containers/pages/Maps';


jest.mock('react-yandex-maps', () => ({
  YMaps: (props: any) => <div data-testid="YMaps" {...props}></div>,
  Map: (props: any) => {
    const { defaultState, instanceRef, ...otherProps } = props;
    return <div data-testid="Map" {...otherProps}></div>
  },
  Placemark: (props: any) => <div data-testid="Placemark" {...props}></div>,
}));



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

describe('MapsPageContainer', () => {

  const setUp = (component: React.ReactNode) => (
    <Provider store={store}>
      <Router>
        {component}
      </Router>
    </Provider>
  );

  it('MapsPageContainer render', async () => {
    await act(async () => {
      render(setUp(<MapsPageContainer />), container);
    });

    expect(
      pretty(container.innerHTML)
    ).toMatchSnapshot();
  });

});
