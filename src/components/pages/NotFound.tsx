import {
  Grid,
  Typography,
} from '@material-ui/core'
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import { Helmet } from 'react-helmet';

const useStyles = makeStyles((theme: Theme) => createStyles({
  root: {
    paddingTop: 40,
    paddingBottom: 40,
  },
}));

const NotFoundPage = () => {
  const classes = useStyles();

  return (
    <>
      <Helmet title="Страница не найдена" />
      <Grid container className={classes.root} spacing={3}>
        <Grid 
          item
          xs={12}
          alignContent="center"
          alignItems="center"
        >
          <Typography 
            variant="h2"
            component="h1"
            color="primary"
            align="center"
          >
            Page Not Found.
          </Typography>
        </Grid>
      </Grid>
    </>
  );
};

export default NotFoundPage;
