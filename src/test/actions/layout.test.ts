import {
  setThemeMode,
  toggleDrawer,
  SET_THEME_MODE,
  TOGGLE_DRAWER,
} from 'actions/layout';
import thunk from 'redux-thunk';
import configureMockStore from 'redux-mock-store';

const mockStore = configureMockStore([thunk]);

describe('Layout ActionCreators', () => {
  it('setThemeMode() should dispatch SET_THEME_MODE with themeMode = dark', () => {
    const store = mockStore({});
    store.dispatch<any>(setThemeMode('dark'));

    const [action] = store.getActions();
    expect(action.type).toBe(SET_THEME_MODE);
    expect(action.payload).toBe('dark');
  });

  it('toggleDrawer() should dispatch TOGGLE_DRAWER with isDrawerOpen = true', () => {
    const isOpenDrawer = true;

    const store = mockStore({});
    store.dispatch<any>(toggleDrawer(isOpenDrawer));

    const [action] = store.getActions();
    expect(action.type).toBe(TOGGLE_DRAWER);
    expect(action.payload).toBe(isOpenDrawer);
  });
});
