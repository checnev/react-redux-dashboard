import React, { useEffect, useState } from 'react';
import ReviewsPage from 'components/pages/Reviews';
import ReviewsService from 'services/ReviewsService';
import type { IReview } from 'components/Review';

const ReviewsPageContainer = () => {
  const [reviews, setReviews] = useState<IReview[]>([]);
  const [isFetching, setIsFetching] = useState<boolean>(true);

  useEffect(() => {
    const fetchData = async () => {
      setIsFetching(true);
      const data = await ReviewsService.getReviews();
      setIsFetching(false);
      setReviews(data);
    };

    fetchData();
  }, []);

  return <ReviewsPage reviews={reviews} isFetching={isFetching} />;
};

export default ReviewsPageContainer;
