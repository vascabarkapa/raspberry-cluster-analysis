import React from 'react';
import { Formik } from 'formik';
import * as Yup from 'yup';
import PropTypes from 'prop-types';

import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import { FormHelperText, Grid, Typography } from '@mui/material';

// services
import UserService from '../../shared/services/user-service';

// toast
import { toast } from 'react-toastify';

const UsersFormModal = ({ open, setOpen, user, setTrigger }) => {
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <Dialog open={open} onClose={handleClose} maxWidth="sm" fullWidth>
      <DialogTitle>
        <Typography variant="h3">{!user ? 'Add new User' : 'Edit User'}</Typography>
      </DialogTitle>
      <DialogContent>
        <Formik
          initialValues={{
            first_name: user ? user?.first_name : '',
            last_name: user ? user?.last_name : '',
            username: user ? user?.username : '',
            email: user ? user?.email : '',
            role: user ? user?.role : 'admin'
          }}
          validationSchema={Yup.object().shape({
            first_name: Yup.string().max(255).required('First Name is required'),
            last_name: Yup.string().max(255).required('Last Name is required'),
            username: Yup.string().max(255).required('Username is required'),
            email: Yup.string().email('Must be a valid email').max(255).required('Email is required'),
            role: Yup.string().max(255).required('Role is required')
          })}
          onSubmit={async (values, { setErrors, setStatus, setSubmitting }) => {
            try {
              if (!user) {
                UserService.createUser(values).then(
                  (response) => {
                    if (response) {
                      setStatus({ success: false });
                      setSubmitting(false);
                      setTrigger((prevState) => !prevState);
                      setOpen(false);
                      toast.success(`User "${response?.data?.username}" created`);
                    }
                  },
                  (error) => {
                    console.error(error);
                  }
                );
              } else {
                values.password = user.password;

                UserService.updateUser(user?._id, values).then(
                  (response) => {
                    if (response) {
                      setStatus({ success: false });
                      setSubmitting(false);
                      setTrigger((prevState) => !prevState);
                      setOpen(false);
                      toast.success(`User "${response?.data?.username}" updated`);
                    }
                  },
                  (error) => {
                    console.error(error);
                  }
                );
              }
            } catch (err) {
              setStatus({ success: false });
              setErrors({ submit: err.message });
              setSubmitting(false);
            }
          }}
        >
          {({ errors, handleBlur, handleChange, handleSubmit, isSubmitting, touched, values }) => (
            <form onSubmit={handleSubmit}>
              <Box>
                <Box>
                  <TextField
                    id="first_name"
                    name="first_name"
                    label="First Name"
                    variant="outlined"
                    margin="normal"
                    value={values.first_name}
                    onBlur={handleBlur}
                    onChange={handleChange}
                    fullWidth
                    error={Boolean(touched.first_name && errors.first_name)}
                  />
                  {touched.first_name && errors.first_name && (
                    <FormHelperText error id="standard-weight-helper-text-email-login">
                      {errors.first_name}
                    </FormHelperText>
                  )}
                </Box>
                <Box>
                  <TextField
                    id="last_name"
                    name="last_name"
                    label="Last Name"
                    variant="outlined"
                    margin="normal"
                    value={values.last_name}
                    onBlur={handleBlur}
                    onChange={handleChange}
                    fullWidth
                    error={Boolean(touched.last_name && errors.last_name)}
                  />
                  {touched.last_name && errors.last_name && (
                    <FormHelperText error id="standard-weight-helper-text-email-login">
                      {errors.last_name}
                    </FormHelperText>
                  )}
                </Box>
                <Box>
                  <TextField
                    id="username"
                    name="username"
                    label="Username"
                    variant="outlined"
                    margin="normal"
                    value={values.username}
                    onBlur={handleBlur}
                    onChange={handleChange}
                    fullWidth
                    error={Boolean(touched.username && errors.username)}
                  />
                  {touched.username && errors.username && (
                    <FormHelperText error id="standard-weight-helper-text-email-login">
                      {errors.username}
                    </FormHelperText>
                  )}
                </Box>
                <Box>
                  <TextField
                    id="email"
                    name="email"
                    label="Email"
                    variant="outlined"
                    margin="normal"
                    value={values.email}
                    onBlur={handleBlur}
                    onChange={handleChange}
                    fullWidth
                    error={Boolean(touched.email && errors.email)}
                  />
                  {touched.email && errors.email && (
                    <FormHelperText error id="standard-weight-helper-text-email-login">
                      {errors.email}
                    </FormHelperText>
                  )}
                </Box>
                <Box>
                  <TextField
                    id="role"
                    name="role"
                    label="Role"
                    variant="outlined"
                    margin="normal"
                    value={values.role}
                    onBlur={handleBlur}
                    onChange={handleChange}
                    fullWidth
                    disabled
                    error={Boolean(touched.role && errors.role)}
                  />
                  {touched.role && errors.role && (
                    <FormHelperText error id="standard-weight-helper-text-email-login">
                      {errors.role}
                    </FormHelperText>
                  )}

                  {errors.submit && (
                    <Grid item xs={12}>
                      <FormHelperText error>{errors.submit}</FormHelperText>
                    </Grid>
                  )}
                </Box>
                <Box mt={2} sx={{ textAlign: 'right' }}>
                  <Button type="button" variant="outlined" color="error" sx={{ mr: 1 }} onClick={handleClose}>
                    Cancel
                  </Button>
                  <Button disableElevation disabled={isSubmitting} type="submit" variant="contained" color="primary">
                    {!user ? 'Add' : 'Edit'}
                  </Button>
                </Box>
              </Box>
            </form>
          )}
        </Formik>
      </DialogContent>
    </Dialog>
  );
};

UsersFormModal.propTypes = {
  open: PropTypes.bool,
  setOpen: PropTypes.func,
  user: PropTypes.object,
  setTrigger: PropTypes.func
};

export default UsersFormModal;
