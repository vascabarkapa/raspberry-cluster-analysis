import { useEffect, useState } from 'react';

// material-ui
import { Box, Button, Grid, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Tooltip, Typography } from '@mui/material';

// assets
import { EditOutlined, DeleteOutlined, UserAddOutlined } from '@ant-design/icons';

// services
import UserService from '../../shared/services/user-service';

// components
import UsersFormModal from './UsersFormModal';
import UsersDeleteModal from './UsersDeleteModal';
import TableLoading from '../../components/loading/TableLoading';
import TableEmpty from '../../components/loading/TableEmpty';
import MainCard from '../../components/MainCard';

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
  const [initialRender, setInitialRender] = useState(true);
  const [trigger, setTrigger] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [users, setUsers] = useState([]);
  const [userToForm, setUserToForm] = useState(null);
  const [userToDelete, setUserToDelete] = useState(null);
  const [openUsersFormModal, setOpenUsersFormModal] = useState(false);
  const [openUsersDeleteModal, setOpenDeleteFormModal] = useState(false);

  useEffect(() => {
    setIsLoading(true);

    if (!initialRender) {
      UserService.getUsers().then((response) => {
        if (response) {
          setUsers(response?.data);
          setIsLoading(false);
          setTrigger(false);
        }
      });
    }

    setInitialRender(false);
  }, [initialRender, trigger]);

  function handleOpenUsersFormModal(type = 'add', user = null) {
    setUserToForm(null);
    setInitialRender(true);

    if (type === 'edit') {
      setUserToForm(user);
    }

    setOpenUsersFormModal(true);
  }

  function handleOpenUsersDeleteModal(user) {
    setUserToDelete(user);
    setOpenDeleteFormModal(true);
  }

  return (
    <>
      <Grid container alignItems="center" justifyContent="space-between">
        <Grid container alignItems="center" justifyContent="space-between">
          <Grid item>
            <Typography variant="h3">Users</Typography>
          </Grid>
          <Grid item>
            <Button variant="contained" color="primary" onClick={handleOpenUsersFormModal}>
              <UserAddOutlined />
              <Typography sx={{ ml: 1 }}>Add User</Typography>
            </Button>
          </Grid>
        </Grid>
      </Grid>
      <MainCard sx={{ mt: 2 }} content={false}>
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
              {isLoading ? (
                <TableLoading colSpan={8} />
              ) : (
                <TableBody>
                  {users && users?.length > 0 ? (
                    users.map((user) => {
                      return (
                        <TableRow hover sx={{ '&:last-child td, &:last-child th': { border: 0 } }} key={user._id}>
                          <TableCell align="left">
                            {user.first_name}&nbsp;{user.last_name}
                          </TableCell>
                          <TableCell align="left">{user.username}</TableCell>
                          <TableCell align="left">{user.email}</TableCell>
                          <TableCell align="left">{user.role}</TableCell>
                          <TableCell align="right">
                            <Tooltip title="Edit User">
                              <Button
                                variant="contained"
                                color="primary"
                                sx={{ mr: 2 }}
                                onClick={() => handleOpenUsersFormModal('edit', user)}
                              >
                                <EditOutlined />
                              </Button>
                            </Tooltip>
                            <Tooltip title="Delete User">
                              <Button variant="contained" color="error" onClick={() => handleOpenUsersDeleteModal(user)}>
                                <DeleteOutlined />
                              </Button>
                            </Tooltip>
                          </TableCell>
                        </TableRow>
                      );
                    })
                  ) : (
                    <TableEmpty colSpan={8} text={'No Image information'} />
                  )}
                </TableBody>
              )}
            </Table>
          </TableContainer>
          {openUsersFormModal && (
            <UsersFormModal open={openUsersFormModal} setOpen={setOpenUsersFormModal} user={userToForm} setTrigger={setTrigger} />
          )}
          {openUsersDeleteModal && (
            <UsersDeleteModal open={openUsersDeleteModal} setOpen={setOpenDeleteFormModal} user={userToDelete} setTrigger={setTrigger} />
          )}
        </Box>
      </MainCard>
    </>
  );
}
