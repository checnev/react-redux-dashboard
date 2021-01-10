import {
  SET_THEME_MODE,
  TOGGLE_DRAWER,
  LayoutActionTypes,
} from 'actions/layout';

export type ThemeMode = 'dark' | 'light';

export interface LayoutState {
  themeMode: ThemeMode;
  isDrawerOpen: boolean;
}

const initialState: LayoutState = {
  themeMode: 'light',
  isDrawerOpen: false,
};

const layoutReducer = (
  state = initialState,
  action: LayoutActionTypes
): LayoutState => {
  switch (action.type) {
    case SET_THEME_MODE:
      return { ...state, themeMode: action.payload };
    case TOGGLE_DRAWER:
      return { ...state, isDrawerOpen: action.payload };
    default:
      return { ...state };
  }
};

export default layoutReducer;
