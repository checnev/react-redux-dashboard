import { render, unmountComponentAtNode } from 'react-dom';
import { act } from 'react-dom/test-utils';
import pretty from 'pretty';
import Review, { IReview } from 'components/Review';
import moment from 'moment';

const review: IReview = {
  id: 1,
  author: 'Satoshi Nakamuto',
  date: moment('10.12.2020', 'DD.MM.YYYY'),
  rating: 4.5,
  text: 'test text',
};

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

it('Review render', () => {
  act(() => {
    render(<Review {...review} />, container);
  });

  expect(
    pretty(container.innerHTML)
  ).toMatchSnapshot();
});
