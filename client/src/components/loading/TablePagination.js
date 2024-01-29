import PropTypes from 'prop-types';
import React from 'react';
import './../../App.css';
import { Pagination, TableCell, TableFooter, TableRow } from '@mui/material';

const TablePagination = ({ colSpan, totalPages, currentPage, handlePageChange }) => {
  return (
    <TableFooter>
      <TableRow>
        <TableCell align="right" colSpan={colSpan}>
          <Pagination count={totalPages} page={currentPage} onChange={handlePageChange} />
        </TableCell>
      </TableRow>
    </TableFooter>
  );
};

TablePagination.propTypes = {
  colSpan: PropTypes.number,
  totalPages: PropTypes.number,
  currentPage: PropTypes.number,
  handlePageChange: PropTypes.func
};

export default TablePagination;
