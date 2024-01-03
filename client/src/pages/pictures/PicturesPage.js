// material-ui
import { Grid, Typography } from '@mui/material';

// project import
import MainCard from 'components/MainCard';
import PicturesTable from './PicturesTable';

// ==============================|| PICTURES PAGE ||============================== //

const PicturesPage = () => (
  <Grid item xs={12} sx={{ mx: 5, my: 2 }}>
    <Grid container alignItems="center" justifyContent="space-between">
      <Grid item>
        <Typography variant="h3">Pictures Information</Typography>
      </Grid>
    </Grid>
    <MainCard sx={{ mt: 2 }} content={false}>
      <PicturesTable />
    </MainCard>
  </Grid>
);

export default PicturesPage;
