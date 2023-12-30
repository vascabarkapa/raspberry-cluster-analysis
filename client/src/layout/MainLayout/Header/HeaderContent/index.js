// material-ui
import { Box, IconButton, Link, useMediaQuery } from '@mui/material';
import { GithubOutlined } from '@ant-design/icons';

// project import
import Profile from './Profile';
import Notification from './Notification';
import MobileSection from './MobileSection';

// ==============================|| HEADER - CONTENT ||============================== //

const HeaderContent = () => {
  const matchesXs = useMediaQuery((theme) => theme.breakpoints.down('md'));

  return (
    <>
      <Box sx={{ width: '100%', ml: 1 }} />

      <IconButton
        component={Link}
        href="https://github.com/vascabarkapa/raspberry-cluster-analysis"
        target="_blank"
        disableRipple
        color="secondary"
        title="See Source Code"
        sx={{ color: 'text.primary', bgcolor: 'grey.100' }}
      >
        <GithubOutlined />
      </IconButton>

      <Notification />
      {!matchesXs && <Profile />}
      {matchesXs && <MobileSection />}
    </>
  );
};

export default HeaderContent;
