import { render, unmountComponentAtNode } from 'react-dom';
import { act } from 'react-dom/test-utils';
import pretty from 'pretty';
import CarMaps from 'components/CarMaps';
import cars from 'test/data/cars';

jest.mock('react-yandex-maps', () => ({
  YMaps: (props: any) => <div data-testid="YMaps" {...props}></div>,
  Map: (props: any) => {
    const { defaultState, instanceRef, ...otherProps } = props;
    return <div data-testid="Map" {...otherProps}></div>
  },
  Placemark: (props: any) => <div data-testid="Placemark" {...props}></div>,
}));

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

it('CarMaps render', () => {
  act(() => {
    render(<CarMaps cars={cars} />, container);
  });

  expect(
    pretty(container.innerHTML)
  ).toMatchSnapshot();
});
