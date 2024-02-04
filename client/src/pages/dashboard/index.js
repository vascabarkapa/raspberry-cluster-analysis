import { useEffect, useState } from 'react';
import { updatePageTitle } from '../../utils/TitleUtils';

// material-ui
import { Box, Grid, Stack, Typography } from '@mui/material';

// project import
import AverageImageBarChart from './AverageImageBarChart';
import LoadThresholdChart from './LoadThresholdChart';
import MainCard from 'components/MainCard';
import ImageFacesChart from './ImageFacesChart';
import Dots from '../../components/loading/Dots';
import Clock from '../../components/third-party/Clock';

// toast
import { toast } from 'react-toastify';

// services
import ImageService from '../../shared/services/image-service';
import ClusterService from '../../shared/services/cluster-service';

// utils
import { getGreetingMessage } from '../../utils/GreetingMessage';
import { getCurrentDate } from '../../utils/CurrentDate';

// ==============================|| DASHBOARD - DEFAULT ||============================== //

const DashboardDefault = () => {
  const [initialRender, setInitialRender] = useState(true);
  const [isLoading, setIsLoading] = useState(false);
  const [numberOfFaces, setNumberOfFaces] = useState({});
  const [loadThreshold, setLoadThreshold] = useState({});
  const [averageImageStats, setAverageImageStats] = useState({});

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      updatePageTitle('Cloudberry');

      if (!initialRender) {
        try {
          const numberOfFacesResponse = await ImageService.getNumberOfFaces();
          setNumberOfFaces(numberOfFacesResponse?.data);

          const loadThresholdResponse = await ClusterService.getLoadThreshold();
          setLoadThreshold(loadThresholdResponse?.data);

          const averageImageStatsResponse = await ImageService.getAverageImageStats();
          setAverageImageStats(averageImageStatsResponse?.data);

          setIsLoading(false);
          toast.info('Loaded latest data');
        } catch (error) {
          console.error('Error fetching data:', error);
          setIsLoading(false);
        }
      }

      setInitialRender(false);
    };

    fetchData();

    const fetchDataInterval = setInterval(fetchData, 60000);

    return () => clearInterval(fetchDataInterval);
  }, [initialRender]);

  return !initialRender && !isLoading ? (
    <Grid item xs={12} sx={{ mx: { xs: 1, md: 5 }, my: { xs: 1, md: 2 } }}>
      <Grid container rowSpacing={4.5} columnSpacing={2.75}>
        {/* row 1 */}
        <Grid item xs={12} sm={6} sx={{ mb: 3 }}>
          <Box textAlign="left">
            <Typography variant="h2">{getGreetingMessage()}</Typography>
            <Typography>Assume command over your Raspberry Pi cluster.</Typography>
          </Box>
        </Grid>
        <Grid item xs={12} sm={6} sx={{ display: { xs: 'none', sm: 'block' } }}>
          <Box textAlign="right">
            <Typography variant="h2">
              <Clock />
            </Typography>
            <Typography>{getCurrentDate()}</Typography>
          </Box>
        </Grid>
        {/* row 2 */}
        <Grid item xs={12} md={12} lg={12}>
          <Grid container alignItems="center" justifyContent="space-between">
            <Grid item>
              <Typography variant="h5">Cluster Load in the Last 24 Hours</Typography>
            </Grid>
          </Grid>
          <MainCard content={false} sx={{ mt: 1.5 }}>
            <Box sx={{ pt: 1, pr: 2 }}>
              <LoadThresholdChart loadThreshold={loadThreshold} />
            </Box>
          </MainCard>
        </Grid>

        {/* row 1 */}
        <Grid item xs={12} md={7} lg={8}>
          <Grid container alignItems="center" justifyContent="space-between">
            <Grid item>
              <Typography variant="h5">The Number of Faces Recognized in the Last Hour</Typography>
            </Grid>
          </Grid>
          <MainCard content={false} sx={{ mt: 1.5 }}>
            <Box sx={{ pt: 1, pr: 2 }}>
              <ImageFacesChart numberOfFaces={numberOfFaces} />
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
                  Average number of faces this week:
                </Typography>
                <Typography variant="h3">{averageImageStats['total_average']} faces</Typography>
              </Stack>
            </Box>
            <AverageImageBarChart averageImageStats={averageImageStats} />
          </MainCard>
        </Grid>
      </Grid>
    </Grid>
  ) : (
    <Dots />
  );
};

export default DashboardDefault;
