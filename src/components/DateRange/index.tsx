import React from 'react';
import { TextField, TextFieldProps } from '@material-ui/core';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';

const useStyles = makeStyles((theme: Theme) => createStyles({
  root: {},
  input: {
    width: 150,
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
  },
}));

interface DateRangeProps {
  from: TextFieldProps;
  to: TextFieldProps;
}
const DateRange: React.FC<DateRangeProps> = ({ from, to }: DateRangeProps) => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <TextField
        label={from.label || 'From'}
        type="date"
        name="from"
        defaultValue={from.defaultValue}
        className={classes.input}
        onChange={from.onChange}
      />
      <TextField
        label={to.label || 'To'}
        type="date"
        name="to"
        defaultValue={to.defaultValue}
        className={classes.input}
        onChange={to.onChange}
      />
    </div>
  );
};

export default DateRange;
