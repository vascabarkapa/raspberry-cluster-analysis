// material-ui
import { Grid, Typography } from '@mui/material';
import { updatePageTitle } from '../../utils/TitleUtils';
import { useEffect } from 'react';

// project import
import MainCard from 'components/MainCard';
import ClusterTable from './ClusterTable';

// ==============================|| CLUSTER PAGE ||============================== //

const ClusterPage = () => {
  useEffect(() => {
    updatePageTitle('Cluster - Cloudberry');
  }, []);

  return (
    <Grid item xs={12} sx={{ mx: { xs: 1, md: 5 }, my: { xs: 1, md: 2 } }}>
      <Grid container alignItems="center" justifyContent="space-between">
        <Grid item>
          <Typography variant="h3">Cluster Information</Typography>
        </Grid>
      </Grid>
      <MainCard sx={{ mt: 2 }} content={false}>
        <ClusterTable />
      </MainCard>
    </Grid>
  );
};

export default ClusterPage;
