import {
  Typography,
  Link,
} from '@material-ui/core';
import { Link as LinkRoute } from 'react-router-dom';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import { Skeleton } from '@material-ui/lab';
import DefinitionList from 'components/common/DefinitionList';
import type { CarReport } from 'reducers/vehicles/reports';

interface SummaryProps {
  data: CarReport | null;
}

const useStyles = makeStyles((theme: Theme) => createStyles({
  root: {
    display: 'flex',
    flexDirection: 'column',
    'height': '100%',
  },
  title: {
    marginBottom: theme.spacing(1),
  },
  definitionList: {
    flex: 1,
  },
  bottomLink: {
  },
}));

const Summary: React.FC<SummaryProps> = ({ data }: SummaryProps) => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Typography
        color="primary"
        variant="h6"
        component="h2"
        className={classes.title}
      >
        Сводка
      </Typography>
      <div className={classes.definitionList}>
        <DefinitionList 
          data={[
            {
              name: 'Доход',
              value: data ? data.income : <Skeleton variant="text" />,
            },
            {
              name: 'Кол-во Аренд',
              value: data ? data.countOfLeases : <Skeleton variant="text" />,
            },
            {
              name: 'Происшествий',
              value: data ? data.incidents : <Skeleton variant="text" />,
            }
          ]}
        />
      </div>
      <div className={classes.bottomLink}>
        <Link component={LinkRoute} to="/reviews" color="primary">Отзывы</Link>
      </div>
    </div>
  );
};

export default Summary;
