import PropTypes from 'prop-types';

// material-ui
import { useTheme } from '@mui/material/styles';
import { Stack } from '@mui/material';

// project import
import DrawerHeaderStyled from './DrawerHeaderStyled';
import cloudberry from 'assets/images/logo/cloudberry.png';

// ==============================|| DRAWER HEADER ||============================== //

const DrawerHeader = ({ open }) => {
  const theme = useTheme();

  return (
    // only available in paid version
    <DrawerHeaderStyled theme={theme} open={open}>
      <Stack direction="row" spacing={1} alignItems="center">
        <img src={cloudberry} width={210} alt="cloudberry_logo" />
      </Stack>
    </DrawerHeaderStyled>
  );
};

DrawerHeader.propTypes = {
  open: PropTypes.bool
};

export default DrawerHeader;
