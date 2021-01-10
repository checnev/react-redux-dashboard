import { render, unmountComponentAtNode } from "react-dom";
import { act } from "react-dom/test-utils";
import pretty from 'pretty';
import CarList from 'components/CarList';
import { BrowserRouter as Router } from 'react-router-dom';
import type { CarWithReport } from 'selectors/cars';

const carsWithReports: CarWithReport[] = [
  {
    id: 1,
    stateNumber: 'А 100 АА',
    model: 'Hyundai solaris 2014',
    status: 0,
    color: '#fff',
    imageUrl: '/images/solaris.jpg',
    coordinats: [1, 1],
    report: {
      income: 1000,
      countOfLeases: 4,
      incidents: 0,
    },
  },
  {
    id: 2,
    stateNumber: 'А 101 АА',
    model: 'Kia Rio 2014',
    status: 1,
    color: '#ccc',
    imageUrl: '/images/rio.jpg',
    coordinats: [1, 1],
    report: {
      income: 2000,
      countOfLeases: 2,
      incidents: 1,
    },
  },
];

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

describe('CarList', () => {
  const setUp = (props: any) => (
    <Router>
      <CarList {...props} />
    </Router>
  );
  it('should render', () => {
    
    act(() => {
      render(setUp({ cars: carsWithReports }), container);
    });

    expect(
      pretty(container.innerHTML)
    ).toMatchSnapshot();
  });

  it('should render with sorted items', () => {

    act(() => {
      render(setUp({ cars: carsWithReports }), container);
    });

    const sortColumnButton = container.querySelector('th.sortColumn > span');

    act(() => {
      sortColumnButton.dispatchEvent(new MouseEvent("click", { bubbles: true }));
    });

    expect(
      pretty(container.innerHTML)
    ).toMatchSnapshot();
  });
});
