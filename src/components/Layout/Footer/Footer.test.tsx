import { render, unmountComponentAtNode } from 'react-dom';
import { act } from 'react-dom/test-utils';
import pretty from 'pretty';
import Footer from 'components/Layout/Footer';

let component: any = null;
beforeEach(() => {
  component = document.createElement('div');
  document.body.append(component);
});

afterEach(() => {
  unmountComponentAtNode(component);
  component.remove();
  component = null;
});

describe('Footer', () => {
  it('should render', () => {
    act(() => {
      render(<Footer/>, component);
    });

    expect(
      pretty(component.innerHTML)
    ).toMatchSnapshot();
  });
});
