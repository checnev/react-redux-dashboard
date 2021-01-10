import { 
  setFromDate,
  setToDate,
  SET_FROM_DATE,
  SET_TO_DATE,
} from 'actions/dashboard';
import thunk from 'redux-thunk';
import configureMockStore from 'redux-mock-store';

const mockStore = configureMockStore([thunk]);

describe('Dashboard ActionCreators', () => {
  it('setFromDate() should dispatch SET_FROM_DATE', () => {
    const store = mockStore({});
    store.dispatch<any>(setFromDate('2020-12-10'));

    const [action] = store.getActions();

    expect(action.type).toBe(SET_FROM_DATE);
    expect(action.payload.format('DD.MM.YYYY')).toBe('10.12.2020');
  });

  it('setToDate() should dispatch SET_TO_DATE', () => {
    const store = mockStore({});
    store.dispatch<any>(setToDate('2020-12-17'));

    const [action] = store.getActions();

    expect(action.type).toBe(SET_TO_DATE);
    expect(action.payload.format('DD.MM.YYYY')).toBe('17.12.2020');
  });
});
