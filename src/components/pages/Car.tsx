import React from 'react';
import clsx from 'clsx';
import {
  Grid,
  Typography,
  Divider,
  Paper,
} from '@material-ui/core';
import { Skeleton } from '@material-ui/lab';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import { STATUS_AS_STRING } from 'constants/car';
import { Helmet } from 'react-helmet';
import DefinitionList from 'components/common/DefinitionList';
import ColorCircle from 'components/common/ColorCircle';
import CarMaps from 'components/CarMaps';
import IncomeChart from 'containers/IncomeChart';
import Summary from 'containers/Summary';
import DateRange from 'containers/DateRange';
import ReportTable from 'containers/ReportTable';

import type { Car } from 'reducers/vehicles/cars';


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
  carImage: {
    width: '100%',
    height: 'auto',
  },
  paper: {
    padding: theme.spacing(2),
  },
  summary: {
    height: '100%',
  },
  map: {
    marginTop: theme.spacing(2),
  }
}));

interface CarPageProps {
  car?: Car;
}

const CarPage: React.FC<CarPageProps> = ({ car }: CarPageProps) => {
  const classes = useStyles();
  return (
    <>
      <Helmet title={car? car.model : 'Автомобиль детально'} />
      <Grid container className={classes.root} spacing={3}>
        <Grid item xs={12} className={classes.header}>
          <Typography variant="h4" component="h1" color="primary" className={classes.h1}>
            {car ? car.model : <Skeleton variant="text" width={100} />}
          </Typography>
          <div className={classes.dateRange}>
            <DateRange />
          </div>
        </Grid>
        <Grid item xs={12}><Divider /></Grid>
        <Grid item xs={12} sm={6}>
          <Paper className={classes.paper}>
            {car? <img src={car.imageUrl} alt={car.model} className={classes.carImage} />
              : <Skeleton variant="rect" width="100%" height={450} />}
          </Paper>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Paper className={classes.paper}>
            <DefinitionList
              data={[
                {
                  name: 'Модель',
                  value: car? car.model : <Skeleton variant="text" />,
                },
                {
                  name: 'Гос. Номер',
                  value: car? car.stateNumber : <Skeleton variant="text" />,
                },
                {
                  name: 'Цвет',
                  value: car ? <ColorCircle color={car.color} width={30} /> : <Skeleton variant="text" />,
                },
                {
                  name: 'Статус',
                  value: car ? STATUS_AS_STRING[car.status] : <Skeleton variant="text" />,
                }
              ]}
            />
            <div className={classes.map}>
              <CarMaps cars={car? [car] : []} />
            </div>
          </Paper>
        </Grid>
        <Grid item xs={12} sm={8} lg={9}>
          <Paper className={classes.paper}>
            <IncomeChart />
          </Paper>
        </Grid>
        <Grid item xs={12} sm={4} lg={3}>
          <Paper className={clsx(classes.paper, classes.summary)}>
            <Summary />
          </Paper>
        </Grid>
        <Grid item xs={12}>
          <ReportTable />
        </Grid>
      </Grid>
    </>
  );
}

export default CarPage;
