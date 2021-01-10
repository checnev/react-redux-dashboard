import { render, unmountComponentAtNode } from 'react-dom';
import { act } from 'react-dom/test-utils';
import pretty from 'pretty';
import Header from 'components/Layout/Header';

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

const openDrawer = jest.fn();
const changeTheme = jest.fn();

describe('Header Layout', () => {
  const setUp = (props: any) => <Header {...props} />;

  it('should render render light theme', () => {
    act(() => {
      render(setUp({ openDrawer, changeTheme, themeMode: 'light'}), component);
    });

    expect(
      pretty(component.innerHTML)
    ).toMatchSnapshot();
  });

  it('should render render dark theme', () => {
    act(() => {
      render(setUp({ openDrawer, changeTheme, themeMode: 'dark' }), component);
    });

    expect(
      pretty(component.innerHTML)
    ).toMatchSnapshot();
  });

  it('should call changeTheme()', () => {
    act(() => {
      render(setUp({ openDrawer, changeTheme, themeMode: 'light' }), component);
    });

    component.querySelector('[aria-label="change theme"]').dispatchEvent(
      new MouseEvent("click", { bubbles: true })
    );

    expect(changeTheme).toHaveBeenCalledTimes(1);
  });

  it('should call openDrawer()', () => {
    act(() => {
      render(setUp({ openDrawer, changeTheme, themeMode: 'light' }), component);
    });

    component.querySelector('[aria-label="menu"]').dispatchEvent(
      new MouseEvent("click", { bubbles: true })
    );

    expect(openDrawer).toHaveBeenCalledTimes(1);
  });
});
