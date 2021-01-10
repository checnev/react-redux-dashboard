import React from 'react';
import {
  AreaChart,
  Tooltip,
  XAxis,
  YAxis,
  CartesianGrid,
  Area,
  ResponsiveContainer,
} from 'recharts';
import { Typography } from '@material-ui/core';
import { makeStyles, createStyles, Theme, useTheme } from '@material-ui/core/styles';
import { Skeleton } from '@material-ui/lab';

import type { DailyReport } from 'selectors/stats';

const useStyles = makeStyles((theme: Theme) => createStyles({
  root: {
    overflow: 'hidden',
  },
  title: {
    display: 'flex',
    flexGrow: 1,
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: theme.spacing(1),
  },
  titleDate: {
    fontSize: '.75rem',
  }
}));

interface IncomeChartProps {
  reports: DailyReport[];
}

const IncomeChart: React.FC<IncomeChartProps> = ({ 
  reports,
} : IncomeChartProps) => {
  const classes = useStyles();
  const theme = useTheme();
  return (
    <div className={classes.root}>
      <div className={classes.title}>
        <Typography
          color="primary"
          variant="h6"
          component="h2"
        >
          Доход
        </Typography>
        <Typography
          align="right"
          color="textSecondary"
          className={classes.titleDate}
        >
          {!reports.length && <Skeleton variant="text" width={50} />}
          {reports.length > 0 && (
            <span>
              {reports[0].date} - {reports[reports.length - 1].date}
            </span>
          )}
        </Typography>
      </div>
      {!reports.length && <Skeleton variant="rect" width="100%" height={200} />}
      {reports.length > 0 && (
        <ResponsiveContainer width="100%" height={200}>
          <AreaChart 
            data={reports as object[]}
            margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
          >
            <XAxis dataKey="date" />
            <YAxis
              label={{ 
                value: 'Доход ₽',
                angle: -90,
                position: 'insideLeft',
                fill: theme.palette.text.secondary,
              }}
            />
            <CartesianGrid strokeDasharray="3 3" />
            <Tooltip labelStyle={{color: 'rgba(0, 0, 0, .87)'}}/>
            <Area type="monotone" dataKey="income" name="Доход" fill="none" stroke="#8884d8" strokeWidth="2" />
            <Area type="monotone" dataKey="countOfLeases" name="Кол-во Аренд" fill="none" stroke="#03f442" strokeWidth="0" />
            <Area type="monotone" dataKey="incidents" fill="none" name="Происшествий" stroke="#f44336" strokeWidth="0" />
          </AreaChart>
        </ResponsiveContainer>
      )}
    </div>
  );
};

export default IncomeChart;
