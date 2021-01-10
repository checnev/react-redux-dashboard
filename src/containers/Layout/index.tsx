import React, { useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import {
  CssBaseline,
  ThemeProvider,
  createMuiTheme,
} from '@material-ui/core';
import { Helmet } from 'react-helmet';

import Header from 'components/Layout/Header';
import SideMenu from 'components/Layout/SideMenu';
import Content from 'components/Layout/Content';
import Footer from 'components/Layout/Footer';

import { toggleDrawer, setThemeMode} from 'actions/layout';
import type { RootState } from 'store';

const useStyles = makeStyles((theme: Theme) => createStyles({
  root: {
    display: 'flex',
    flexDirection: 'column',
    minHeight: '100vh',
  },
}));

interface LayoutProps {
  children: React.ReactNode;
  sidebar?: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children, sidebar }: LayoutProps) => {
  const classes = useStyles();
  const dispatch = useDispatch();

  const isDrawerOpen = useSelector((state: RootState) => state.layout.isDrawerOpen);
  const themeMode = useSelector((state: RootState) => state.layout.themeMode);

  const openDrawer = useCallback(() => dispatch(toggleDrawer(true)), [dispatch]);
  const closeDrawer = useCallback(() => dispatch(toggleDrawer(false)), [dispatch]);
  const changeTheme = useCallback(() => {
    dispatch(
      setThemeMode(themeMode === 'dark'? 'light' : 'dark')
    );
  }, [dispatch, themeMode]);

  const theme = createMuiTheme({
    palette: {
      type: themeMode,
    },
  });

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Helmet htmlAttributes={{ lang: 'ru' }} />
      <div className={classes.root}>
        <Header
          openDrawer={openDrawer}
          changeTheme={changeTheme}
          themeMode={themeMode}
        />
        <SideMenu 
          isDrawerOpen={isDrawerOpen}
          closeDrawer={closeDrawer}
        />
        <Content sidebar={sidebar}>{children}</Content>
        <Footer />
      </div>
    </ThemeProvider>
  );
};

export default Layout;
