import React from 'react';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import {
  AppBar,
  Toolbar,
  Typography,
  IconButton,
} from '@material-ui/core';
import {
  Menu as MenuIcon,
  Brightness4,
  Brightness7,
} from '@material-ui/icons';


const useStyles = makeStyles((theme: Theme) => createStyles({
  root: {
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
  iconChangeTheme: {},
}));

interface HeaderProps {
  openDrawer?: () => void;
  changeTheme?: () => void;
  themeMode: 'dark' | 'light';
}

const Header: React.FC<HeaderProps> = React.memo(
  ({ openDrawer, changeTheme, themeMode }: HeaderProps) => {
  const classes = useStyles();

  return (
    <AppBar position="relative" className={classes.root}>
      <Toolbar>
        <IconButton
          edge="start"
          className={classes.menuButton}
          color="inherit"
          aria-label="menu"
          onClick={openDrawer}
        >
          <MenuIcon />
        </IconButton>
        <Typography variant="h6" className={classes.title}>
          CarShare
        </Typography>
        <IconButton
          aria-label="change theme"
          onClick={changeTheme}
          color="inherit"
        >
          {themeMode === 'light' ? <Brightness4 /> : <Brightness7 />}
        </IconButton>
      </Toolbar>
    </AppBar>
  );
}
);

export default Header;
