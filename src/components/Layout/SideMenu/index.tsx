import React from 'react';
import {
  Drawer,
  MenuList,
  MenuItem,
  ListItemIcon,
  Typography,
  Link
} from '@material-ui/core';
import { NavLink } from 'react-router-dom';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import { 
  Dashboard,
  ViewList,
  Report,
  Map,
} from '@material-ui/icons';

const useStyles = makeStyles((theme: Theme) => {
  return createStyles({
  drawer: {
    width: 240,
  },
  drawerPaper: {
    width: 240,
  },
  menuList: {
    paddingTop: 0,
    '&:active': {
      outline: 'none',
    },
  },
  menuItem: {
    padding: 0,
  },
  link: {
    display: 'flex',
    flexGrow: 1,
    alignItems: 'center',
    textDecoration: 'none',
    padding: '6px 16px',
    color: theme.palette.text.primary,
    borderLeft: '5px solid transparent',
    transition: theme.transitions.create(['all']),
    '&:hover': {
      textDecoration: 'none',
    }
  },
  activeLink: {
    backgroundColor: theme.palette.type === 'light' ? 'rgba(63, 81, 181, .15)' : 'rgba(51, 51, 51, .15)',
  }
})
});

const menuItems = [
  { icon: <Dashboard />, anchor: 'Главная панель', to: '/' },
  { icon: <ViewList />, anchor: 'Автомобили', to: '/cars' },
  { icon: <Map />, anchor: 'Карта', to: '/maps' },
  { icon: <Report />, anchor: 'Отзывы', to: '/reviews' },
];

interface SideMenuProps {
  isDrawerOpen: boolean;
  closeDrawer: () => void;
}

const SideMenu: React.FC<SideMenuProps> = ({ isDrawerOpen, closeDrawer }: SideMenuProps) => {
  const classes = useStyles();

  return (
    <Drawer
      className={classes.drawer}
      onClose={closeDrawer}
      open={isDrawerOpen}
      classes={{
        paper: classes.drawerPaper,
      }}
    >
      <nav>
        <MenuList>
          {menuItems.map((item) => (
            <MenuItem key={item.to} className={classes.menuItem}>
              <Link
                component={NavLink}
                to={item.to}
                className={classes.link}
                activeClassName={classes.activeLink}
                exact
              >
                <ListItemIcon>{item.icon}</ListItemIcon>
                <Typography variant="inherit">{item.anchor}</Typography>
              </Link>
            </MenuItem>
          ))}
        </MenuList>
      </nav>
    </Drawer>
  );
};

export default SideMenu;
