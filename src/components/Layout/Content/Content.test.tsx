import { render, unmountComponentAtNode } from 'react-dom';
import { act } from 'react-dom/test-utils';
import pretty from 'pretty';
import Content from 'components/Layout/Content';

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

describe('Content', () => {
  const sidebar = <div>sidebar</div>;
  const content = <div>content</div>;
  it('should render with sidebar', () => {
    act(() => {
      render(<Content sidebar={sidebar}>{content}</Content>, component);
    });

    expect(
      pretty(component.innerHTML)
    ).toMatchSnapshot();
  });

  it('should render without sidebar', () => {
    act(() => {
      render(<Content>{content}</Content>, component);
    });

    expect(
      pretty(component.innerHTML)
    ).toMatchSnapshot();
  });
});
