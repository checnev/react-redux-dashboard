import React, { Fragment } from 'react';
import {
  Typography,
  Grid,
} from '@material-ui/core';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';

interface Definition {
  name: string;
  value: React.ReactNode;
}

interface DefinitionListProps {
  data: Definition[];
  nameVariant?: 'h4' | 'h5' | 'h6' | 'body1' | 'body2';
  valueVariant?: 'h4' | 'h5' | 'h6' | 'body1' | 'body2';
}

const useStyles = makeStyles((theme: Theme) => createStyles({
  root: {
    marginTop: 0,
    marginBottom: 0,
  },
  ceil: {
    borderBottom: '1px solid rgba(0, 0, 0, 0.12)',
  }
}));

const DefinitionList: React.FC<DefinitionListProps> = ({
  data,
  nameVariant,
  valueVariant,
}: DefinitionListProps) => {
  const classes = useStyles();
  return (
    <Grid 
      container
      spacing={2}
      component="dl"
      className={classes.root}
    >
      {data.map((item) => (
        <Fragment key={item.name}>
          <Grid item xs={6} className={classes.ceil}>
            <Typography 
              component="dt" 
              variant={nameVariant || 'body1'}
            >
              {item.name}:
            </Typography>
          </Grid>
          <Grid item xs={6} className={classes.ceil}>
            <Typography 
              component="dd"
              variant={valueVariant || 'body1'}
            >
              {item.value}
            </Typography>
          </Grid>
        </Fragment>
      ))}
    </Grid>
  );
};

export default DefinitionList;
