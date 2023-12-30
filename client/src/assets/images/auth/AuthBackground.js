// material-ui
import { Box } from '@mui/material';

// assets
import cloudberry_logo from 'assets/images/logo/cloudberry_logo.png';

// ==============================|| AUTH BLUR BACK SVG ||============================== //

const AuthBackground = () => {
  return (
    <Box sx={{ position: 'absolute', filter: 'blur(18px)', zIndex: -1, bottom: 0 }}>
      <img src={cloudberry_logo} width="900rem" alt="cloudberry_logo" style={{ marginLeft: '-100px' }} />
    </Box>
  );
};

export default AuthBackground;
