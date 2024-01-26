import React from 'react';
import './../../App.css';
import { TableCell, TableRow } from '@mui/material';
import Dots from './Dots';
import PropTypes from 'prop-types';

const TableLoading = ({ colSpan }) => {
  return (
    <TableRow>
      <TableCell colSpan={colSpan} align="center">
        <Dots />
      </TableCell>
    </TableRow>
  );
};

TableLoading.propTypes = {
  colSpan: PropTypes.number
};

export default TableLoading;
