import ReviewsService from 'services/ReviewsService';

describe('ReviewsService', () => {
  it('getReviews() should return promise resolved with reviews', async () => {
    const reviews = await ReviewsService.getReviews()

    expect(reviews.length).toBeGreaterThan(0);
  });
});
