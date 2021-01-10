import React from 'react';
import clsx from 'clsx';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import {
  Typography,
  Divider,
  Grid,
  Paper,
} from '@material-ui/core';
import { Helmet } from 'react-helmet';
import DateRange from 'containers/DateRange';
import IncomeChart from 'containers/IncomeChart';
import Summary from 'containers/Summary';
import CarList from 'containers/CarList';

const useStyles = makeStyles((theme: Theme) => createStyles({
  root: {
    paddingTop: 40,
    paddingBottom: 40,
  },
  header: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'flex-end',
    paddingBottom: 20,
    '@media screen and (max-width: 400px)': {
      flexWrap: 'wrap',
      justifyContent: 'center',
    }
  },
  h1: {
    width: '50%',
    '@media screen and (max-width: 720px)': {
      width: '100%',
    },
  },
  dateRange: {
    '@media screen and (max-width: 720px)': {
      flexBasis: '20%',
    },
    '@media screen and (max-width: 400px)': {
      flexBasis: '100%',
    }
  },
  paper: {
    padding: theme.spacing(2),
  },
  incomeTitle: {
    display: 'flex',
    flexGrow: 1,
  },
  summary: {
    height: '100%',
  }
}));

const DashboardPage = () => {
  const classes = useStyles();
  return (
    <>
      <Helmet title="Панель управления" />
      <Grid container className={classes.root} spacing={3}>
        <Grid item xs={12} className={classes.header}>
          <Typography 
            variant="h4"
            component="h1"
            className={classes.h1}
          >
            Панель управления
          </Typography>
          <div className={classes.dateRange}>
            <DateRange />
          </div>
        </Grid>
        <Grid item xs={12}><Divider /></Grid>
        <Grid item xs={12} md={8} lg={9}>
          <Paper className={classes.paper}>
            <IncomeChart />
          </Paper>
        </Grid>
        <Grid item xs={12} md={4} lg={3}>
          <Paper className={clsx(classes.paper, classes.summary)}>
            <Summary />
          </Paper>
        </Grid>
        <Grid item xs={12}>
          <CarList />
        </Grid>
      </Grid>
    </>
  );
};

export default DashboardPage;
