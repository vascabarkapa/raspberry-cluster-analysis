import React from 'react';
import PropTypes from 'prop-types';

import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import { Typography } from '@mui/material';

// services
import UserService from '../../shared/services/user-service';

// toast
import { toast } from 'react-toastify';

const UsersDeleteModal = ({ open, setOpen, user, setTrigger }) => {
  const handleClose = () => {
    setOpen(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    UserService.deleteUser(user?._id).then((response) => {
      if (response) {
        toast.info(`User "${response?.data?.username}" is deleted`);
        setOpen(false);
        setTrigger(true);
      }
    });
  };

  return (
    <Dialog open={open} onClose={handleClose} maxWidth="xs" fullWidth>
      <DialogTitle>
        <Typography variant="h3">Delete User</Typography>
      </DialogTitle>
      <DialogContent>
        <Box>
          <Typography>Are you sure you want to delete the selected User?</Typography>
          <Box mt={2} sx={{ textAlign: 'right' }}>
            <Button type="button" variant="outlined" color="primary" sx={{ mr: 1 }} onClick={handleClose}>
              Cancel
            </Button>
            <Button type="submit" variant="contained" color="error" onClick={handleSubmit}>
              Delete
            </Button>
          </Box>
        </Box>
      </DialogContent>
    </Dialog>
  );
};

UsersDeleteModal.propTypes = {
  open: PropTypes.bool,
  setOpen: PropTypes.func,
  user: PropTypes.object,
  setTrigger: PropTypes.func
};

export default UsersDeleteModal;
