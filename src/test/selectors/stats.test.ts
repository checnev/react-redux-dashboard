import state from 'test/data/initialState';
import { dailyReportsSelector, summarySelector } from 'selectors/stats';

describe('Stats Selectors', () => {
  it('dailyReportsSelector should return reports group by date', () => {
    const reports = dailyReportsSelector(state);

    expect(reports.length).toBe(7);
    
    reports.forEach((dailyReport) => {
      expect(dailyReport).toEqual(
        expect.objectContaining({
          date: expect.any(String),
          income: expect.any(Number),
          countOfLeases: expect.any(Number),
          incidents: expect.any(Number),
        })
      );
    });
  });

  it('summarySelector() should return summary of reports', () => {
    const summary = summarySelector(state);

    expect(summary).not.toBe(null);

    expect(summary?.income).toBeGreaterThan(0);
    expect(summary?.countOfLeases).toBeGreaterThan(0);
    expect(summary?.incidents).toBe(3);

    expect(summary).toEqual(
      expect.objectContaining({
        income: expect.any(Number),
        countOfLeases: expect.any(Number),
        incidents: expect.any(Number),
      })
    );
  });
});
