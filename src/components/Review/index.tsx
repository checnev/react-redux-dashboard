import React from 'react';
import {
  Grid,
  Typography,
  Divider,
  Paper,
} from '@material-ui/core';
import { Rating } from '@material-ui/lab';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import type { Moment } from 'moment';

export interface IReview {
  id: number;
  author: string;
  date: Moment;
  rating: number;
  text: string;
}

const useStyles = makeStyles((theme: Theme) => createStyles({
  root: {},
  paper: {
    padding: theme.spacing(2),
  },
  header: {},
  author: {},
  date: {},
  divider: {
    marginTop: -12,
    marginBottom: -12,
  }
}));

const Review: React.FC<IReview> = ({ id, author, date, rating, text } : IReview) => {
  const classes = useStyles();

  return (
    <Paper className={classes.paper}>
      <Grid container className={classes.root} spacing={3}>
        <Grid item xs={12} sm={6}>
          <Typography className={classes.author} variant="h5" component="h4">{author}</Typography>
          <div>
            <Rating name="rating" value={rating} precision={0.5} readOnly size="small" />
          </div>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Typography
            className={classes.date}
            color="textSecondary"
            align="right"
          >
            {date.format('DD.MM.YYYY')}
          </Typography>
        </Grid>
        <Grid item xs={12} className={classes.divider}><Divider /></Grid>
        <Grid item xs={12}>
          <Typography color="textSecondary" dangerouslySetInnerHTML={{ __html: text}} />
        </Grid>
      </Grid>
    </Paper>
  );
}

export default Review;
