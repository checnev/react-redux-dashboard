import React from 'react';
import {
  Grid,
  Typography,
} from '@material-ui/core';
import { Skeleton } from '@material-ui/lab';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import { Helmet } from 'react-helmet';
import Review, { IReview } from 'components/Review';

interface ReviewsPageProps {
  reviews: IReview[];
  isFetching: boolean;
}

const useStyles = makeStyles((theme: Theme) => createStyles({
  root: {
    paddingTop: 40,
    paddingBottom: 40,
  },
  header: {},
  skeletonRating: {
    marginBottom: 10,
  }
}));

const ReviewsPage: React.FC<ReviewsPageProps> = ({
  reviews,
  isFetching,
}: ReviewsPageProps) => {
  const classes = useStyles();

  return (
    <>
      <Helmet title="Отзывы" />
      <Grid container className={classes.root} spacing={3}>
        <Grid item xs={12} className={classes.header}>
          <Typography variant="h4" component="h1">Отзывы</Typography>
        </Grid>
        {isFetching && Array.from({ length: 4 }).map((review, index) => (
            <Grid item xs={12} md={6} key={index}>
              <Skeleton variant="text" width={150} />
              <Skeleton variant="rect" width={100} height={15} className={classes.skeletonRating}/>
              <Skeleton variant="rect" width="100%" height={120} />
            </Grid>
          ))
        }
        {!isFetching && reviews.map((review) => (
          <Grid item xs={12} md={6} key={review.id}>
            <Review {...review} />
          </Grid>
        ))}
      </Grid>
    </>
  );
}; 

export default ReviewsPage;
