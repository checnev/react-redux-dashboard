import React from 'react';
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

interface ErrorPageProps {
  error: Error;
}

const ErrorPage: React.FC<ErrorPageProps> = ({ error }: ErrorPageProps) => {
  const classes = useStyles();

  return (
    <>
      <Helmet title="Ошибка" />
      <Grid container className={classes.root} spacing={3}>
        <Grid
          item
          xs={12}
          alignContent="center"
          alignItems="center"
        >
          <Typography
            variant="h4"
            component="h1"
            color="primary"
            align="center"
          >
            {error.message}
          </Typography>
        </Grid>
      </Grid>
    </>
  );
};

export default ErrorPage;
