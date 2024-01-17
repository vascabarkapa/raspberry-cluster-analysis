// material-ui
import { Grid, Typography } from '@mui/material';
import { updatePageTitle } from '../../utils/TitleUtils';

// project import
import MainCard from 'components/MainCard';
import ImageTable from './ImageTable';
import { useEffect } from 'react';

// ==============================|| IMAGE PAGE ||============================== //

const ImagePage = () => {
  useEffect(() => {
    updatePageTitle('Image - Cloudberry');
  }, []);

  return (
    <Grid item xs={12} sx={{ mx: { xs: 1, md: 5 }, my: { xs: 1, md: 2 } }}>
      <Grid container alignItems="center" justifyContent="space-between">
        <Grid item>
          <Typography variant="h3">Image Information</Typography>
        </Grid>
      </Grid>
      <MainCard sx={{ mt: 2 }} content={false}>
        <ImageTable />
      </MainCard>
    </Grid>
  );
};

export default ImagePage;
