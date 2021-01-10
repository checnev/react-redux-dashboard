import { render, unmountComponentAtNode } from 'react-dom';
import { act } from 'react-dom/test-utils';
import { screen, waitFor } from '@testing-library/react'
import pretty from 'pretty';
import ReviewsPageContainer from 'containers/pages/Reviews';
import ReviewsService from 'services/ReviewsService';
import moment from 'moment';

const getReviews = jest.fn().mockResolvedValue([
  {
    id: 1,
    author: 'Fake Author',
    rating: 4.5,
    text: 'Review text',
    date: moment('10.12.2020', 'DD.MM.YYYY'),
  },
]);

ReviewsService.getReviews = getReviews;

let container: any = null;
beforeEach(() => {
  container = document.createElement('div');
  document.body.append(container);
});

afterEach(() => {
  unmountComponentAtNode(container);
  container.remove();
  container = null;
});
it('ReviewsPageContainer render', async () => {
  await act(async () => {
    render(<ReviewsPageContainer />, container);
  });

  await waitFor(() => {
    expect(screen.getByText('Fake Author')).toBeDefined();
  });
  
  expect(
    pretty(container.innerHTML)
  ).toMatchSnapshot();
});
