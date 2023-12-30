import { useMediaQuery, Container, Link, Typography, Stack } from '@mui/material';

// ==============================|| FOOTER - AUTHENTICATION ||============================== //

const AuthFooter = () => {
  const matchDownSM = useMediaQuery((theme) => theme.breakpoints.down('sm'));

  return (
    <Container maxWidth="xl">
      <Stack
        direction={matchDownSM ? 'column' : 'row'}
        justifyContent={matchDownSM ? 'center' : 'space-between'}
        spacing={2}
        textAlign={matchDownSM ? 'center' : 'inherit'}
      >
        <Typography variant="subtitle2" color="secondary" component="span">
          <Typography variant="subtitle2" color="primary" component="span">
            &copy;&nbsp;Cloudberry
          </Typography>
          &nbsp;Faculty of Electrical Engineering, University of East Sarajevo
        </Typography>

        <Stack direction={matchDownSM ? 'column' : 'row'} spacing={matchDownSM ? 1 : 3} textAlign={matchDownSM ? 'center' : 'inherit'}>
          <Typography
            variant="subtitle2"
            color="secondary"
            component={Link}
            href="https://github.com/vascabarkapa/raspberry-cluster-analysis/"
            target="_blank"
            underline="hover"
          >
            GitHub
          </Typography>
        </Stack>
      </Stack>
    </Container>
  );
};

export default AuthFooter;
