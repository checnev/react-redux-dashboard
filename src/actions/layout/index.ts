import type { ThemeMode } from 'reducers/layout';

interface SetThemeModeAction {
  type: typeof SET_THEME_MODE,
  payload: ThemeMode,
}

interface ToggleDrawerAction {
  type: typeof TOGGLE_DRAWER,
  payload: boolean,
}

export type LayoutActionTypes = SetThemeModeAction | ToggleDrawerAction;

export const SET_THEME_MODE = 'SET_THEME_MODE';
export const TOGGLE_DRAWER = 'TOGGLE_DRAWER';

export const setThemeMode = (themeMode: 'dark' | 'light'): SetThemeModeAction => ({
  type: SET_THEME_MODE,
  payload: themeMode,
});

export const toggleDrawer = (isOpen: boolean): ToggleDrawerAction => ({
  type: TOGGLE_DRAWER,
  payload: isOpen,
});
