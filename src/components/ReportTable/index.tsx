import React, { useState } from 'react';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TablePagination,
  TableHead,
  TableRow,
  Paper,
} from '@material-ui/core';
import type { DailyReport } from 'selectors/stats';

interface ReportTableProps {
  reports: DailyReport[];
}

const useStyles = makeStyles((theme: Theme) => createStyles({
  root: {},
}));

const ReportTable: React.FC<ReportTableProps> = ({ reports }: ReportTableProps) => {
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(20);

  const handleChangePage = (event: unknown, newPage: number) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event: React.ChangeEvent<HTMLInputElement>) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const classes = useStyles();
  return (
    <Paper className={classes.root}>
      <TableContainer>
        <Table className={classes.root} aria-label="car list table">
          <TableHead>
            <TableRow>
              <TableCell>Дата</TableCell>
              <TableCell align="center">Доход</TableCell>
              <TableCell align="center">Кол-во Аренд</TableCell>
              <TableCell align="center">Происшествий</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {reports.length > 0 && reports.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
            .map((report) => (
              <TableRow key={report.date}>
                <TableCell component="th" scope="row">{report.date}</TableCell>
                <TableCell align="center">{report.income}</TableCell>
                <TableCell align="center">{report.countOfLeases}</TableCell>
                <TableCell align="center">{report.incidents}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        rowsPerPageOptions={[20, 50, 100]}
        component="div"
        count={reports.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onChangePage={handleChangePage}
        onChangeRowsPerPage={handleChangeRowsPerPage}
      />
      </Paper>
  );
};

export default ReportTable;
