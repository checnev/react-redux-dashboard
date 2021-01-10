import moment, { Moment } from 'moment';
import { 
  SET_FROM_DATE,
  SET_TO_DATE,
  DashboardActionTypes,
} from 'actions/dashboard';

export interface DashboardState {
  from: Moment;
  to: Moment;
}

const initialState: DashboardState = {
  from: moment().add(-7, 'd'),
  to: moment(),
};

const dashboardReducer = (
  state = initialState,
  action: DashboardActionTypes
): DashboardState => {
  switch(action.type) {
    case SET_FROM_DATE:
      return { ...state, from: action.payload };
    case SET_TO_DATE:
      return { ...state, to: action.payload };
    default: 
      return { ...state };
  }
};

export default dashboardReducer;
