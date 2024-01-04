import React from 'react';

import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';

import { Typography } from '@mui/material';

// eslint-disable-next-line
const UsersFormModal = ({ open, setOpen }) => {
  const handleClose = () => {
    setOpen(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <Dialog open={open} onClose={handleClose} maxWidth="sm" fullWidth>
      <DialogTitle>
        <Typography variant="h3">Add / Edit User</Typography>
      </DialogTitle>
      <DialogContent>
        <form onSubmit={handleSubmit}>
          <Box>
            <Box>
              <TextField label="Full Name" variant="outlined" margin="normal" fullWidth />
            </Box>
            <Box>
              <TextField label="Username" variant="outlined" margin="normal" fullWidth />
            </Box>
            <Box>
              <TextField label="Email" variant="outlined" margin="normal" fullWidth />
            </Box>
            <Box>
              <TextField label="Role" variant="outlined" margin="normal" fullWidth />
            </Box>
            <Box mt={2} sx={{ textAlign: 'right' }}>
              <Button type="button" variant="outlined" color="error" sx={{ mr: 1 }} onClick={handleClose}>
                Cancel
              </Button>
              <Button type="submit" variant="contained" color="primary">
                Add / Edit
              </Button>
            </Box>
          </Box>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default UsersFormModal;
