// material-ui
import { Box } from '@mui/material';

// assets
import berry from 'assets/images/berry.jpg';

// ==============================|| AUTH BLUR BACK SVG ||============================== //

const AuthBackground = () => {
  return (
    <Box sx={{ position: 'fixed', filter: 'blur(0)', zIndex: -1, bottom: 0 }}>
      <img src={berry} alt="berry_background" />
    </Box>
  );
};

export default AuthBackground;
