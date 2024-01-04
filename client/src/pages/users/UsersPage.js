import { useEffect, useState } from 'react';

// material-ui
import { Button, Grid, Typography } from '@mui/material';
import { updatePageTitle } from '../../utils/TitleUtils';

// project import
import MainCard from 'components/MainCard';
import UsersTable from './UsersTable';

// assets
import { UserAddOutlined } from '@ant-design/icons';

// components
import UsersFormModal from './UsersFormModal';

// ==============================|| USERS PAGE ||============================== //

const UsersPage = () => {
  const [openUsersFormModal, setOpenUsersFormModal] = useState(false);

  useEffect(() => {
    updatePageTitle('Users - Cloudberry');
  }, []);

  const handleOpen = () => {
    setOpenUsersFormModal(true);
  };

  return (
    <>
      <Grid item xs={12} sx={{ mx: 5, my: 2 }}>
        <Grid container alignItems="center" justifyContent="space-between">
          <Grid container alignItems="center" justifyContent="space-between">
            <Grid item>
              <Typography variant="h3">Users</Typography>
            </Grid>
            <Grid item>
              <Button variant="contained" color="primary" onClick={handleOpen}>
                <UserAddOutlined />
                <Typography sx={{ ml: 1 }}>Add User</Typography>
              </Button>
            </Grid>
          </Grid>
        </Grid>
        <MainCard sx={{ mt: 2 }} content={false}>
          <UsersTable />
        </MainCard>
      </Grid>
      {openUsersFormModal && <UsersFormModal open={openUsersFormModal} setOpen={setOpenUsersFormModal} />}
    </>
  );
};

export default UsersPage;
