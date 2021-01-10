import {
  Grid,
  Typography,
  Divider,
} from '@material-ui/core';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import { Helmet } from 'react-helmet';
import CarList from 'containers/CarList';

const useStyles = makeStyles((theme: Theme) => createStyles({
  root: {
    paddingTop: 40,
    paddingBottom: 40,
  },
  header: {},
}));

const CarsPage = () => {
  const classes = useStyles();

  return (
    <>
      <Helmet title="Автомобили" />
      <Grid container className={classes.root} spacing={3}>
        <Grid item xs={12} className={classes.header}>
          <Typography variant="h4" component="h1">Автомобили</Typography>
        </Grid>
        <Grid item xs={12}><Divider /></Grid>
        <Grid item xs={12}>
          <CarList />
        </Grid>
      </Grid>
    </>
  );
};

export default CarsPage;
