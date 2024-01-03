import PropTypes from 'prop-types';

// material-ui
import { Box, Stack, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from '@mui/material';

// project import
import Dot from 'components/@extended/Dot';

function createData(trackingNo, clusterLoad, numberOfPods, numberOfNodes, createdAt) {
  return { trackingNo, clusterLoad, numberOfPods, numberOfNodes, createdAt };
}

function getRandomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function getRandomDate() {
  const startDate = new Date(2022, 0, 1);
  const endDate = new Date();
  const randomTime = startDate.getTime() + Math.random() * (endDate.getTime() - startDate.getTime());
  const randomDate = new Date(randomTime);

  const day = String(randomDate.getDate()).padStart(2, '0');
  const month = String(randomDate.getMonth() + 1).padStart(2, '0');
  const year = randomDate.getFullYear();
  const hours = String(randomDate.getHours()).padStart(2, '0');
  const minutes = String(randomDate.getMinutes()).padStart(2, '0');
  const seconds = String(randomDate.getSeconds()).padStart(2, '0');

  return `${day}.${month}.${year} ${hours}:${minutes}:${seconds}`;
}

const rows = Array.from({ length: 20 }, (_, index) => {
  const trackingNo = `objectId_${index + 1}`;
  const clusterLoad = getRandomNumber(0, 100);
  const numberOfPods = getRandomNumber(1, 4);
  const numberOfNodes = getRandomNumber(1, 6);
  const createdAt = getRandomDate();

  return createData(trackingNo, clusterLoad, numberOfPods, numberOfNodes, createdAt);
});

// ==============================|| CLUSTER TABLE - HEADER CELL ||============================== //

const headCells = [
  {
    id: 'trackingNo',
    align: 'left',
    disablePadding: false,
    label: 'Tracking No.'
  },
  {
    id: 'clusterLoad',
    align: 'left',
    disablePadding: true,
    label: 'Cluster Load'
  },
  {
    id: 'numberOfPods',
    align: 'left',
    disablePadding: false,
    label: 'Number of Pods'
  },
  {
    id: 'numberOfNodes',
    align: 'left',
    disablePadding: false,
    label: 'Number of Nodes'
  },
  {
    id: 'createdAt',
    align: 'left',
    disablePadding: false,
    label: 'Timestamp'
  }
];

// ==============================|| CLUSTER TABLE - HEADER ||============================== //

function ClusterTableHead() {
  return (
    <TableHead>
      <TableRow>
        {headCells.map((headCell) => (
          <TableCell key={headCell.id} align={headCell.align} padding={headCell.disablePadding ? 'none' : 'normal'}>
            {headCell.label}
          </TableCell>
        ))}
      </TableRow>
    </TableHead>
  );
}

// ==============================|| CLUSTER TABLE - STATUS ||============================== //

const ClusterStatus = ({ status }) => {
  let color;

  if (status >= 0 && status < 40) {
    color = 'success';
  } else if (status >= 40 && status < 75) {
    color = 'warning';
  } else if (status >= 75 && status <= 100) {
    color = 'error';
  } else {
    color = 'primary';
  }

  return (
    <Stack direction="row" spacing={1} alignItems="center">
      <Dot color={color} />
      <Typography>{status}%</Typography>
    </Stack>
  );
};

ClusterStatus.propTypes = {
  status: PropTypes.number
};

// ==============================|| CLUSTER TABLE ||============================== //

export default function ClusterTable() {
  return (
    <Box>
      <TableContainer
        sx={{
          width: '100%',
          overflowX: 'auto',
          position: 'relative',
          display: 'block',
          maxWidth: '100%',
          '& td, & th': { whiteSpace: 'nowrap' }
        }}
      >
        <Table
          aria-labelledby="tableTitle"
          sx={{
            '& .MuiTableCell-root:first-of-type': {
              pl: 2
            },
            '& .MuiTableCell-root:last-of-type': {
              pr: 3
            }
          }}
        >
          <ClusterTableHead />
          <TableBody>
            {rows.map((row) => {
              return (
                <TableRow
                  hover
                  role="checkbox"
                  sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                  tabIndex={-1}
                  key={row.trackingNo}
                >
                  <TableCell component="th" scope="row" align="left">
                    {row.trackingNo}
                  </TableCell>
                  <TableCell align="left">
                    <ClusterStatus status={row.clusterLoad} />
                  </TableCell>
                  <TableCell align="left">{row.numberOfPods}</TableCell>
                  <TableCell align="left">{row.numberOfNodes}</TableCell>
                  <TableCell align="left">{row.createdAt}</TableCell>
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
}
