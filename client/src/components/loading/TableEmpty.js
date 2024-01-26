import PropTypes from 'prop-types';
import React from 'react';
import './../../App.css';
import { TableCell, TableRow } from '@mui/material';

const TableEmpty = ({ colSpan, text }) => {
  return (
    <TableRow>
      <TableCell colSpan={colSpan} align="center">
        {text}
      </TableCell>
    </TableRow>
  );
};

TableEmpty.propTypes = {
  colSpan: PropTypes.number,
  text: PropTypes.string
};

export default TableEmpty;
