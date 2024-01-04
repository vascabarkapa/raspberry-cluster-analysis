import PropTypes from 'prop-types';
import { useState } from 'react';
import UsersFormModal from '../../../../../pages/users/UsersFormModal';
import UsersDetailsModal from '../../../../../pages/users/UsersDetailsModal';

// material-ui
import { useTheme } from '@mui/material/styles';
import { List, ListItemButton, ListItemIcon, ListItemText } from '@mui/material';

// assets
import { EditOutlined, LogoutOutlined, UserOutlined } from '@ant-design/icons';

// ==============================|| HEADER PROFILE - PROFILE TAB ||============================== //

const ProfileTab = ({ handleLogout }) => {
  const theme = useTheme();
  const [openUsersFormModal, setOpenUsersFormModal] = useState(false);
  const [openUsersDetailsModal, setOpenDetailsFormModal] = useState(false);

  return (
    <List component="nav" sx={{ p: 0, '& .MuiListItemIcon-root': { minWidth: 32, color: theme.palette.grey[500] } }}>
      <ListItemButton onClick={() => setOpenUsersFormModal(true)}>
        <ListItemIcon>
          <EditOutlined />
        </ListItemIcon>
        <ListItemText primary="Edit Profile" />
      </ListItemButton>
      {openUsersFormModal && <UsersFormModal open={openUsersFormModal} setOpen={setOpenUsersFormModal} />}
      <ListItemButton onClick={() => setOpenDetailsFormModal(true)}>
        <ListItemIcon>
          <UserOutlined />
        </ListItemIcon>
        <ListItemText primary="View Profile" />
      </ListItemButton>
      {openUsersDetailsModal && <UsersDetailsModal open={openUsersDetailsModal} setOpen={setOpenDetailsFormModal} />}
      <ListItemButton onClick={handleLogout}>
        <ListItemIcon>
          <LogoutOutlined />
        </ListItemIcon>
        <ListItemText primary="Logout" />
      </ListItemButton>
    </List>
  );
};

ProfileTab.propTypes = {
  handleLogout: PropTypes.func
};

export default ProfileTab;
