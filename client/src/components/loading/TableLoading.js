import React from 'react';
import './../../App.css';
import {TableCell, TableRow} from "@mui/material";
import Dots from "./Dots";

const TableLoading = ({colSpan}) => {
  return (
    <TableRow>
      <TableCell colSpan={colSpan} align="center">
        <Dots/>
      </TableCell>
    </TableRow>
  );
};

export default TableLoading;
