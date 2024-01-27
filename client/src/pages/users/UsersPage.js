import { useEffect } from 'react';

// material-ui
import { Grid } from '@mui/material';
import { updatePageTitle } from '../../utils/TitleUtils';

// project import
import UsersTable from './UsersTable';

// ==============================|| USERS PAGE ||============================== //

const UsersPage = () => {
  useEffect(() => {
    updatePageTitle('Users - Cloudberry');
  }, []);

  return (
    <>
      <Grid item xs={12} sx={{ mx: { xs: 1, md: 5 }, my: { xs: 1, md: 2 } }}>
        <UsersTable />
      </Grid>
    </>
  );
};

export default UsersPage;
