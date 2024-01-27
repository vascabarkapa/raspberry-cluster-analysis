import React from 'react';
import './../../App.css';
import { TableCell, TableRow, TableBody } from '@mui/material';
import Dots from './Dots';
import PropTypes from 'prop-types';

const TableLoading = ({ colSpan }) => {
  return (
    <TableBody>
      <TableRow>
        <TableCell colSpan={colSpan} align="center">
          <Dots />
        </TableCell>
      </TableRow>
    </TableBody>
  );
};

TableLoading.propTypes = {
  colSpan: PropTypes.number
};

export default TableLoading;
