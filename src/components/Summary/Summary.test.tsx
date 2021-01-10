import { render, unmountComponentAtNode } from 'react-dom';
import { act } from 'react-dom/test-utils';
import pretty from 'pretty';
import { BrowserRouter as Router } from 'react-router-dom';
import Summary from 'components/Summary';

const summaryData = {
  income: 2000,
  countOfLeases: 20,
  incidents: 3,
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

it('Summary render', () => {
  act(() => {
    render(<Router><Summary data={summaryData} /></Router>, container);
  });

  expect(
    pretty(container.innerHTML)
  ).toMatchSnapshot();
});
