import { render, unmountComponentAtNode } from 'react-dom';
import { act } from 'react-dom/test-utils';
import pretty from 'pretty';
import SideMenu from 'components/Layout/SideMenu';

import { AppBar } from '@material-ui/core';
import { BrowserRouter as Router } from 'react-router-dom';

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

const closeDrawer = jest.fn();

describe('SideMenu', () => {
  const setUp = (props: any) => (
    <Router>
      <AppBar>
        <SideMenu {...props} />
      </AppBar>
    </Router>
  );

  it('drawer should be close', () => {
    act(() => {
      render(setUp({ isDrawerOpen: false, closeDrawer }), component);
    });

    expect(document.querySelector('.MuiDrawer-root')).toBeNull();
  });

  it('drawer should be open', () => {
    act(() => {
      render(setUp({ isDrawerOpen: true, closeDrawer }), component);
    });

    expect(
      pretty(document.querySelector('.MuiDrawer-root')!.innerHTML)
    ).toMatchSnapshot();
  });
});
