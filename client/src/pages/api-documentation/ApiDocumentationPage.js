// material-ui
import { Grid, Typography } from '@mui/material';
import { updatePageTitle } from '../../utils/TitleUtils';
import { useEffect } from 'react';

// project import
import MainCard from 'components/MainCard';

// ==============================|| API DOCUMENTATION PAGE ||============================== //

const ApiDocumentationPage = () => {
  useEffect(() => {
    updatePageTitle('API Documentation - Cloudberry');
  }, []);

  return (
    <Grid item xs={12} sx={{ mx: { xs: 1, md: 5 }, my: { xs: 1, md: 2 } }}>
      <Grid container alignItems="center" justifyContent="space-between">
        <Grid item>
          <Typography variant="h3">API Documentation</Typography>
        </Grid>
      </Grid>
      <MainCard sx={{ mt: 2, p: 2 }} content={false}>
        <Typography variant="h6">Coming soon...</Typography>
      </MainCard>
    </Grid>
  );
};

export default ApiDocumentationPage;
