import moment, { Moment } from 'moment';

interface SetFromDateAction {
  type: typeof SET_FROM_DATE;
  payload: Moment;
}

interface SetToDateAction {
  type: typeof SET_TO_DATE;
  payload: Moment;
}

export type DashboardActionTypes = SetFromDateAction | SetToDateAction;

export const SET_FROM_DATE = 'SET_FROM_DATE';
export const SET_TO_DATE = 'SET_TO_DATE';

export const setFromDate = (date: string): SetFromDateAction => ({
  type: SET_FROM_DATE,
  payload: moment(date, 'YYYY-MM-DD'),
});

export const setToDate = (date: string): SetToDateAction => ({
  type: SET_TO_DATE,
  payload: moment(date, 'YYYY-MM-DD'),
});
