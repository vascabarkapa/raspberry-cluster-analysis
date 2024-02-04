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

// ==============================|| IMAGE FACES CHART ||============================== //

const ImageFacesChart = ({ numberOfFaces }) => {
  const theme = useTheme();

  const { primary, secondary } = theme.palette.text;
  const line = theme.palette.divider;

  const [options, setOptions] = useState(areaChartOptions);

  useEffect(() => {
    setOptions((prevState) => ({
      ...prevState,
      colors: [theme.palette.primary.main, theme.palette.primary[700]],
      xaxis: {
        categories: numberOfFaces['datetime'],
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
  }, [primary, secondary, line, theme, numberOfFaces]);

  const [series, setSeries] = useState([
    {
      name: 'Number of Faces',
      data: []
    }
  ]);

  useEffect(() => {
    setSeries([
      {
        name: 'Number of Faces',
        data: numberOfFaces['data']
      }
    ]);
  }, [numberOfFaces]);

  return <ReactApexChart options={options} series={series} type="area" height={450} />;
};

ImageFacesChart.propTypes = {
  numberOfFaces: PropTypes.object
};

export default ImageFacesChart;
