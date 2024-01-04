import React from 'react';

import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';

import { Typography } from '@mui/material';

// eslint-disable-next-line
const UsersDetailsModal = ({ open, setOpen }) => {
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <Dialog open={open} onClose={handleClose} maxWidth="xs" fullWidth>
      <DialogTitle>
        <Typography variant="h3">View Profile</Typography>
      </DialogTitle>
      <DialogContent>
        <Box>
          <Typography sx={{ mb: 1 }}>
            <strong>First Name:</strong> Cloudberry
          </Typography>
          <Typography sx={{ mb: 1 }}>
            <strong>Last Name:</strong> Admin
          </Typography>
          <Typography sx={{ mb: 1 }}>
            <strong>Username:</strong> cloudberry.admin
          </Typography>
          <Typography sx={{ mb: 1 }}>
            <strong>Email:</strong> admin@cloudberry.com
          </Typography>
          <Typography sx={{ mb: 1 }}>
            <strong>Role:</strong> Admin
          </Typography>
          <Box mt={2} sx={{ textAlign: 'right' }}>
            <Button type="button" variant="outlined" color="primary" onClick={handleClose}>
              Cancel
            </Button>
          </Box>
        </Box>
      </DialogContent>
    </Dialog>
  );
};

export default UsersDetailsModal;
