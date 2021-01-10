import { render, unmountComponentAtNode } from "react-dom";
import { act } from "react-dom/test-utils";
import pretty from 'pretty';
import DefinitionList from 'components/common/DefinitionList';

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


it('DefinitionList render', () => {
  const data = [
    {
      name: 'Name 1',
      value: 'Value 1'
    },
    {
      name: 'Name 2',
      value: 'Value 2',
    }
  ];

  act(() => {
    render(<DefinitionList data={data} />, container);
  });

  expect(
    pretty(container.innerHTML)
  ).toMatchSnapshot();
});
