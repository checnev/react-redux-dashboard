import { render, unmountComponentAtNode } from "react-dom";
import { act } from "react-dom/test-utils";
import pretty from 'pretty';
import DateRange from 'components/DateRange';

let container: any = null;
beforeEach(() => {
  container = document.createElement("div");
  document.body.append(container);
});

afterEach(() => {
  unmountComponentAtNode(container);
  container.remove();
  container = null;
});

it('DateRange render', () => {
  const props = {
    from: {
      label: 'From label',
      defaultValue: '01.01.1971',
      onChange: () => { },
    },
    to: {
      label: 'To label',
      defaultValue: '01.01.1971',
      onChange: () => { },
    },
  };

  act(() => {
    render(<DateRange {...props} />, container);
  });

  expect(
    pretty(container.innerHTML)
  ).toMatchSnapshot(); 
});
