import { useEffect, useState } from 'react';
import { updatePageTitle } from '../../utils/TitleUtils';

// material-ui
import { Box, Grid, Stack, Typography } from '@mui/material';

// project import
import MonthlyBarChart from './MonthlyBarChart';
import LoadThresholdChart from './LoadThresholdChart';
import MainCard from 'components/MainCard';
import ImageFacesChart from './ImageFacesChart';

// toast
import { toast } from 'react-toastify';

// ==============================|| DASHBOARD - DEFAULT ||============================== //

const DashboardDefault = () => {
  const [initialRender, setInitialRender] = useState(true);

  useEffect(() => {
    updatePageTitle('Cloudberry');

    if (!initialRender) {
      toast.info('Loaded latest data');
    }

    setInitialRender(false);
  }, [initialRender]);

  return (
    <Grid item xs={12} sx={{ mx: { xs: 1, md: 5 }, my: { xs: 1, md: 2 } }}>
      <Grid container rowSpacing={4.5} columnSpacing={2.75}>
        {/* row 1 */}
        <Grid item xs={12} md={12} lg={12}>
          <Grid container alignItems="center" justifyContent="space-between">
            <Grid item>
              <Typography variant="h5">Cluster Load in the last 24 hours</Typography>
            </Grid>
          </Grid>
          <MainCard content={false} sx={{ mt: 1.5 }}>
            <Box sx={{ pt: 1, pr: 2 }}>
              <LoadThresholdChart />
            </Box>
          </MainCard>
        </Grid>

        {/* row 2 */}
        <Grid item xs={12} md={7} lg={8}>
          <Grid container alignItems="center" justifyContent="space-between">
            <Grid item>
              <Typography variant="h5">The number of faces recognized in the last 24 hours</Typography>
            </Grid>
          </Grid>
          <MainCard content={false} sx={{ mt: 1.5 }}>
            <Box sx={{ pt: 1, pr: 2 }}>
              <ImageFacesChart />
            </Box>
          </MainCard>
        </Grid>
        <Grid item xs={12} md={5} lg={4}>
          <Grid container alignItems="center" justifyContent="space-between">
            <Grid item>
              <Typography variant="h5">Weekly Average</Typography>
            </Grid>
            <Grid item />
          </Grid>
          <MainCard sx={{ mt: 2 }} content={false}>
            <Box sx={{ p: 3, pb: 0 }}>
              <Stack spacing={2}>
                <Typography variant="h6" color="textSecondary">
                  This Week Statistics
                </Typography>
                <Typography variant="h3">80</Typography>
              </Stack>
            </Box>
            <MonthlyBarChart />
          </MainCard>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default DashboardDefault;
