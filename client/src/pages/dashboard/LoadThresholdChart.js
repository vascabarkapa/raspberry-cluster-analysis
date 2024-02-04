import PropTypes from 'prop-types';
import { useState, useEffect } from 'react';

// material-ui
import { useTheme } from '@mui/material/styles';

// third-party
import ReactApexChart from 'react-apexcharts';

// chart options
const areaChartOptions = {
  chart: {
    height: 450,
    type: 'area',
    toolbar: {
      show: false
    }
  },
  dataLabels: {
    enabled: false
  },
  stroke: {
    curve: 'smooth',
    width: 2
  },
  grid: {
    strokeDashArray: 0
  }
};

// ==============================|| LOAD THRESHOLD CHART ||============================== //

const LoadThresholdChart = ({ loadThreshold }) => {
  const theme = useTheme();

  const { primary, secondary } = theme.palette.text;
  const line = theme.palette.divider;

  const [options, setOptions] = useState(areaChartOptions);

  useEffect(() => {
    setOptions((prevState) => ({
      ...prevState,
      colors: [theme.palette.success.light, theme.palette.primary[700]],
      xaxis: {
        categories: loadThreshold['datetime'],
        labels: {
          style: {
            colors: secondary
          }
        },
        axisBorder: {
          show: true,
          color: line
        },
        tickAmount: 11
      },
      yaxis: {
        labels: {
          style: {
            colors: secondary
          }
        }
      },
      grid: {
        borderColor: line
      },
      tooltip: {
        theme: 'light'
      }
    }));
  }, [primary, secondary, line, theme]);

  const [series, setSeries] = useState([
    {
      name: 'Load Threshold',
      data: [70, 70, 70, 70, 70, 70, 70]
    },
    {
      name: 'Cluster Load',
      data: [0, 43, 14, 56, 24, 105, 68]
    }
  ]);

  useEffect(() => {
    setSeries([
      {
        name: 'Load Threshold',
        data: loadThreshold['load_threshold']
      },
      {
        name: 'Cluster Load',
        data: loadThreshold['load']
      }
    ]);
  }, []);

  return <ReactApexChart options={options} series={series} type="area" height={450} />;
};

LoadThresholdChart.propTypes = {
  loadThreshold: PropTypes.object
};

export default LoadThresholdChart;
