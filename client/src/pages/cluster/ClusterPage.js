// material-ui
import { Grid, Typography } from '@mui/material';

// project import
import MainCard from 'components/MainCard';
import ClusterTable from './ClusterTable';

// ==============================|| CLUSTER PAGE ||============================== //

const ClusterPage = () => (
  <Grid item xs={12} sx={{ mx: 5, my: 2 }}>
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

export default ClusterPage;
