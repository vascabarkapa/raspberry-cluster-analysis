import PropTypes from 'prop-types';

// material-ui
import { Box, Stack, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from '@mui/material';

// project import
import Dot from 'components/@extended/Dot';

function createData(_id, age, numberOfNodes, minPods, maxPods, replicas, load, loadThreshold, createdAt) {
  return { _id, age, numberOfNodes, minPods, maxPods, replicas, load, loadThreshold, createdAt };
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
  const _id = `objectId_${index + 1}`;
  const age = getRandomNumber(1, 30);
  const numberOfNodes = getRandomNumber(1, 4);
  const minPods = getRandomNumber(1, 4);
  const maxPods = getRandomNumber(4, 10);
  const replicas = getRandomNumber(1, 6);
  const load = getRandomNumber(1, 100);
  const loadThreshold = getRandomNumber(1, 100);
  const createdAt = getRandomDate();

  return createData(_id, age, numberOfNodes, minPods, maxPods, replicas, load, loadThreshold, createdAt);
});

// ==============================|| CLUSTER TABLE - HEADER CELL ||============================== //

const headCells = [
  {
    id: '_id',
    align: 'left',
    disablePadding: false,
    label: 'ID'
  },
  {
    id: 'age',
    align: 'left',
    disablePadding: true,
    label: 'Age'
  },
  {
    id: 'numberOfNodes',
    align: 'left',
    disablePadding: false,
    label: 'Number of Nodes'
  },
  {
    id: 'minPods',
    align: 'left',
    disablePadding: false,
    label: 'Min. Pods'
  },
  {
    id: 'maxPods',
    align: 'left',
    disablePadding: false,
    label: 'Max. Pods'
  },
  {
    id: 'replicas',
    align: 'left',
    disablePadding: false,
    label: 'Replicas'
  },
  {
    id: 'load',
    align: 'left',
    disablePadding: false,
    label: 'Load (Threshold)'
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

const ClusterStatus = ({ load, loadThreshold }) => {
  let color;

  if (load >= 0 && load < 40) {
    color = 'success';
  } else if (load >= 40 && load < 75) {
    color = 'warning';
  } else if (load >= 75 && load <= 100) {
    color = 'error';
  } else {
    color = 'primary';
  }

  return (
    <Stack direction="row" spacing={1} alignItems="center">
      <Dot color={color} />
      <Typography>{load}%</Typography>
      <Typography>({loadThreshold}%)</Typography>
    </Stack>
  );
};

ClusterStatus.propTypes = {
  load: PropTypes.number,
  loadThreshold: PropTypes.number
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
                <TableRow hover sx={{ '&:last-child td, &:last-child th': { border: 0 } }} key={row._id}>
                  <TableCell component="th" scope="row" align="left">
                    {row._id}
                  </TableCell>
                  <TableCell align="left">{row.age} min</TableCell>
                  <TableCell align="left">{row.numberOfNodes}</TableCell>
                  <TableCell align="left">{row.minPods}</TableCell>
                  <TableCell align="left">{row.maxPods}</TableCell>
                  <TableCell align="left">{row.replicas}</TableCell>
                  <TableCell align="left">
                    <ClusterStatus load={row.load} loadThreshold={row.loadThreshold} />
                  </TableCell>
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
