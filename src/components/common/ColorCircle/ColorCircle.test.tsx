import { render, unmountComponentAtNode } from 'react-dom';
import { act }  from 'react-dom/test-utils';
import pretty from 'pretty';
import ColorCircle from 'components/common/ColorCircle';

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

it('ColorCiclre render', () => {
  act(() => {
    render(<ColorCircle width={15} height={15} color="#000"/>, container);
  });

  expect(
    pretty(container.innerHTML)
  ).toMatchSnapshot();
});
