import { useState } from 'react';

// material-ui
import { Box, Button, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Tooltip } from '@mui/material';

// assets
import { EditOutlined, DeleteOutlined } from '@ant-design/icons';

// components
import UsersFormModal from './UsersFormModal';
import UsersDeleteModal from './UsersDeleteModal';

function createData(fullName, username, email, role) {
  return { fullName, username, email, role };
}

const rows = [
  createData('Vladimir Vujović', 'vladimir.vujovic', 'vladimir@cloudberry.com', 'Admin'),
  createData('Marko Malović', 'marko.malovic', 'marko@cloudberry.com', 'Admin'),
  createData('Milica Vuković', 'milica.vukovic', 'milica@cloudberry.com', 'Admin'),
  createData('Vasilije Čabarkapa', 'vasilije.cabarkapa', 'vasilije@cloudberry.com', 'Admin')
];

// ==============================|| USERS TABLE - HEADER CELL ||============================== //

const headCells = [
  {
    id: 'fullName',
    align: 'left',
    disablePadding: false,
    label: 'Full Name'
  },
  {
    id: 'username',
    align: 'left',
    disablePadding: true,
    label: 'Username'
  },
  {
    id: 'email',
    align: 'left',
    disablePadding: false,
    label: 'Email'
  },
  {
    id: 'role',
    align: 'left',
    disablePadding: false,
    label: 'Role'
  },
  {
    id: 'actions',
    align: 'left',
    disablePadding: false,
    label: ''
  }
];

// ==============================|| USERS TABLE - HEADER ||============================== //

function UsersTableHead() {
  return (
    <TableHead>
      <TableRow>
        {headCells.map((headCell) => (
          <TableCell key={headCell.id} align={headCell.align} padding={headCell.disablePadding ? 'none' : 'normal'}>
            {headCell.label}
          </TableCell>
        ))}
      </TableRow>
    </TableHead>
  );
}

// ==============================|| USERS TABLE ||============================== //

export default function UsersTable() {
  const [openUsersFormModal, setOpenUsersFormModal] = useState(false);
  const [openUsersDeleteModal, setOpenDeleteFormModal] = useState(false);

  const handleOpenUsersFormModal = () => {
    setOpenUsersFormModal(true);
  };

  const handleOpenUsersDeleteModal = () => {
    setOpenDeleteFormModal(true);
  };

  return (
    <Box>
      <TableContainer
        sx={{
          width: '100%',
          overflowX: 'auto',
          position: 'relative',
          display: 'block',
          maxWidth: '100%',
          '& td, & th': { whiteSpace: 'nowrap' }
        }}
      >
        <Table
          aria-labelledby="tableTitle"
          sx={{
            '& .MuiTableCell-root:first-of-type': {
              pl: 2
            },
            '& .MuiTableCell-root:last-of-type': {
              pr: 3
            }
          }}
        >
          <UsersTableHead />
          <TableBody>
            {rows.map((row) => {
              return (
                <TableRow hover role="checkbox" sx={{ '&:last-child td, &:last-child th': { border: 0 } }} tabIndex={-1} key={row.username}>
                  <TableCell align="left">{row.fullName}</TableCell>
                  <TableCell align="left">{row.username}</TableCell>
                  <TableCell align="left">{row.email}</TableCell>
                  <TableCell align="left">{row.role}</TableCell>
                  <TableCell align="right">
                    <Tooltip title="Edit User">
                      <Button variant="contained" color="primary" sx={{ mr: 2 }} onClick={handleOpenUsersFormModal}>
                        <EditOutlined />
                      </Button>
                    </Tooltip>
                    <Tooltip title="Delete User">
                      <Button variant="contained" color="error" onClick={handleOpenUsersDeleteModal}>
                        <DeleteOutlined />
                      </Button>
                    </Tooltip>
                  </TableCell>
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </TableContainer>
      {openUsersFormModal && <UsersFormModal open={openUsersFormModal} setOpen={setOpenUsersFormModal} />}
      {openUsersDeleteModal && <UsersDeleteModal open={openUsersDeleteModal} setOpen={setOpenDeleteFormModal} />}
    </Box>
  );
}
