import {
  SET_THEME_MODE,
  TOGGLE_DRAWER,
  LayoutActionTypes,
} from 'actions/layout';
import layoutReducer, { LayoutState } from 'reducers/layout';
import state from 'test/data/initialState';

let layoutState: LayoutState = Object.assign({}, state.layout);

describe('Layout reducer', () => {
  beforeEach(() => {
    layoutState = Object.assign({}, state.layout);
  });

  it('SET_THEME_MODE', () => {
    const action: LayoutActionTypes = {
      type: SET_THEME_MODE,
      payload: 'dark',
    };

    const newState = layoutReducer(layoutState, action);
    expect(newState.themeMode).toBe('dark');
  });

  it('TOGGLE_DRAWER', () => {
    const isDrawerOpen = true;
    const action: LayoutActionTypes = {
      type: TOGGLE_DRAWER,
      payload: isDrawerOpen,
    };

    const newState = layoutReducer(layoutState, action);
    expect(newState.isDrawerOpen).toBe(true);
  });
});
