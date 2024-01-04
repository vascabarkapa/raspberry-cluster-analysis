// material-ui
import { Box, IconButton, Link } from '@mui/material';
import { GithubOutlined } from '@ant-design/icons';

// project import
import Profile from './Profile';
import Notification from './Notification';

// ==============================|| HEADER - CONTENT ||============================== //

const HeaderContent = () => {
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
      <Profile />
    </>
  );
};

export default HeaderContent;
