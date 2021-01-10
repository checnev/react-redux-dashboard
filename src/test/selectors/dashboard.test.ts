import state from 'test/data/initialState';
import { dateRangeSelector } from 'selectors/dashboard';

describe('Dashboard Selectors', () => {
  it('dateRangeSelector() should return dateRange', () => {
    const dateRange = dateRangeSelector(state);

    expect(dateRange).toEqual({
      from: state.dashboard.from,
      to: state.dashboard.to,
    });
  });
});
