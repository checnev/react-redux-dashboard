import {
  Grid,
  Typography,
  Divider,
} from '@material-ui/core';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import { Helmet } from 'react-helmet';
import CarMaps from 'components/CarMaps';

import type { Car } from 'reducers/vehicles/cars';

const useStyles = makeStyles((theme: Theme) => createStyles({
  root: {
    paddingTop: 40,
    paddingBottom: 40,
  },
  header: {},
}));

interface MapsPageProps {
  cars: Car[];
}

const MapsPage: React.FC<MapsPageProps> = ({ cars }: MapsPageProps) => {
  const classes = useStyles();

  return (
    <>
      <Helmet title="Автомобили на карте" />
      <Grid container className={classes.root} spacing={3}>
        <Grid item xs={12} className={classes.header}>
          <Typography variant="h4" component="h1">Автомобили на карте</Typography>
        </Grid>
        <Grid item xs={12}><Divider /></Grid>
        <Grid item xs={12}>
          <CarMaps cars={cars? cars : []} height={350} />
        </Grid>
      </Grid>
    </>
  );
};

export default MapsPage;
