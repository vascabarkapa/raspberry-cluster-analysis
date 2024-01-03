// material-ui
import { Grid, Typography } from '@mui/material';
import { updatePageTitle } from '../../utils/TitleUtils';

// project import
import MainCard from 'components/MainCard';
import UsersTable from './UsersTable';
import { useEffect } from 'react';

// ==============================|| USERS PAGE ||============================== //

const UsersPage = () => {
  useEffect(() => {
    updatePageTitle('Users - Cloudberry');
  }, []);

  return (
    <Grid item xs={12} sx={{ mx: 5, my: 2 }}>
      <Grid container alignItems="center" justifyContent="space-between">
        <Grid item>
          <Typography variant="h3">Users</Typography>
        </Grid>
      </Grid>
      <MainCard sx={{ mt: 2 }} content={false}>
        <UsersTable />
      </MainCard>
    </Grid>
  );
};

export default UsersPage;
