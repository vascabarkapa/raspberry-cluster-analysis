import React from 'react';
import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';

// material-ui
import { Box, Button, Grid, Typography } from '@mui/material';

// assets
import { isAuthenticated } from '../../utils/UserAuthenticated';
import cloudberry_logo from 'assets/images/logo/cloudberry_logo.png';
import AnimateButton from '../../components/@extended/AnimateButton';

// ==============================|| ERROR PAGE ||============================== //

const ErrorPage = ({ code, message }) => {
  let UNAUTHORIZED = 401;
  const navigate = useNavigate();

  const handleBackToDashboard = () => {
    if (code === UNAUTHORIZED) {
      localStorage.removeItem('access_token');
      localStorage.removeItem('current_user');
      window.location.href = '/login';
    } else {
      navigate('/');
    }
  };

  return (
    <Grid container justifyContent="center" alignItems="center" style={{ height: '80vh' }}>
      <Grid item xs={12} align="center">
        <Box display="flex" flexDirection="row" alignItems="center" justifyContent="center">
          <Typography variant="h1" sx={{ mr: 1 }}>
            {code}
          </Typography>
          <img src={cloudberry_logo} alt="cloudberry_logo" width={50} />
          <Typography variant="h1" sx={{ ml: 1 }}>
            {message}
          </Typography>
        </Box>
        <Box mt={2} display="flex" justifyContent="center" alignItems="center">
          <AnimateButton>
            <Button fullWidth size="large" variant="contained" color="primary" onClick={handleBackToDashboard}>
              {code === UNAUTHORIZED ? 'Go to Login' : isAuthenticated() ? 'Back to Dashboard' : 'Return Home'}
            </Button>
          </AnimateButton>
        </Box>
      </Grid>
    </Grid>
  );
};

ErrorPage.propTypes = {
  code: PropTypes.number,
  message: PropTypes.string
};

export default ErrorPage;
