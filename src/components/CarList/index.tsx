import React, { useState, useMemo } from 'react';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableSortLabel,
  TableHead,
  TableRow,
  Paper,
  Link,
} from '@material-ui/core';
import { Link as LinkRoute } from 'react-router-dom';
import { Skeleton } from '@material-ui/lab';
import { STATUS_AS_STRING } from 'constants/car';
import type { CarReport } from 'reducers/vehicles/reports';
import type { CarWithReport } from 'selectors/cars';

const useStyles = makeStyles((theme: Theme) => createStyles({
  root: {}
}));

interface CarListProps {
  cars: CarWithReport[];
}

type SortKey = keyof CarReport;

export const compareReports = (
  a: CarWithReport,
  b: CarWithReport,
  sortKey: SortKey
): number => {
  if (a.report && b.report) {
    return a.report[sortKey] - b.report[sortKey];
  }
  
  return a.report? 1 : -1;
};

export const stableSort = (
  array: CarWithReport[],
  comparator: (a: CarWithReport, b: CarWithReport, sortKey: SortKey) => number,
  sortKey: SortKey,
  sortKind: 'asc' | 'desc',
) => {
  return array.slice().sort((a, b) => {
    if (sortKind === 'asc') {
      return comparator(a, b, sortKey);
    }
    return -comparator(a, b, sortKey);
  });
}

const sortFields: { name: SortKey, label: string }[] = [
  {
    name: 'countOfLeases',
    label: 'Кол-во Аренд',
  },
  {
    name: 'income',
    label: 'Доход',
  },
  {
    name: 'incidents',
    label: 'Происшествий',
  },
];

const CarList: React.FC<CarListProps> = ({ cars }: CarListProps) => {
  const classes  = useStyles();
  const [sortKey, setSortKey] = useState<SortKey | null>(null);
  const [sortKind, setSortKind] = useState<'asc' | 'desc'>('asc');
  const sortedCars = useMemo(() => {
    if (!sortKey) return cars;

    return stableSort(cars, compareReports, sortKey, sortKind)
  }, [cars, sortKey, sortKind]);

  const changeSort = (field: SortKey) => () => {
    if (sortKey === field) {
      setSortKind(sortKind === 'asc'? 'desc' : 'asc');
    } else {
      setSortKey(field);
    }
  };

  return (
    <TableContainer component={Paper}>
      <Table className={classes.root} aria-label="car list table">
        <TableHead>
          <TableRow>
            <TableCell>Гос. Номер</TableCell>
            <TableCell align="center">Марка, Модель</TableCell>
            {sortFields.map((field) => (
              <TableCell align="center" key={field.name} className="sortColumn">
                <TableSortLabel
                  onClick={changeSort(field.name)}
                  direction={sortKind}
                  active={sortKey === field.name}
                >
                  {field.label}
                </TableSortLabel>
              </TableCell>
            ))}
            <TableCell align="center">Статус</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {sortedCars && sortedCars.map((car) => (
            <TableRow key={car.id}>
              <TableCell component="th" scope="row">{car.stateNumber}</TableCell>
              <TableCell align="center">
                <Link component={LinkRoute} to={`/cars/${car.id}`} color="primary">{car.model}</Link>
              </TableCell>
              <TableCell align="center">
                {!car.report && <Skeleton />}
                {car.report && car.report.countOfLeases}
              </TableCell>
              <TableCell align="center">
                {!car.report && <Skeleton />}
                {car.report && car.report.income}
              </TableCell>
              <TableCell align="center">
                {!car.report && <Skeleton />}
                {car.report && car.report.incidents}
              </TableCell>
              <TableCell align="center">{STATUS_AS_STRING[car.status]}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default CarList;
