import PropTypes from 'prop-types';
import React from 'react';
import './../../App.css';
import { Pagination, TableCell, TableFooter, TableRow, Grid } from '@mui/material';

const TablePagination = ({ colSpan, totalItems, pageSize, totalPages, currentPage, handlePageChange }) => {
  return (
    <TableFooter>
      <TableRow>
        <TableCell colSpan={colSpan}>
          <Grid container justifyContent="space-between" alignItems="center">
            <Grid item>
              Show {pageSize * (currentPage - 1) + 1} - {Math.min(pageSize * currentPage, totalItems)} of {totalItems}
            </Grid>
            <Grid item>
              <Pagination count={totalPages} page={currentPage} onChange={handlePageChange} />
            </Grid>
          </Grid>
        </TableCell>
      </TableRow>
    </TableFooter>
  );
};

TablePagination.propTypes = {
  colSpan: PropTypes.number,
  totalItems: PropTypes.number,
  pageSize: PropTypes.number,
  totalPages: PropTypes.number,
  currentPage: PropTypes.number,
  handlePageChange: PropTypes.func
};

export default TablePagination;
