// material-ui
import { Box, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material';

function createData(_id, node, image, numberOfFaces, processingTime, takenAt) {
  return { _id, node, image, numberOfFaces, processingTime, takenAt };
}

function getRandomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function generateRandomString(length) {
  const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  let result = '';

  for (let i = 0; i < length; i++) {
    const randomIndex = Math.floor(Math.random() * characters.length);
    result += characters.charAt(randomIndex);
  }

  return result;
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
  const node = 'RASPB_CAM_1';
  const image = generateRandomString(16);
  const numberOfFaces = getRandomNumber(1, 30);
  const processingTime = getRandomNumber(100, 600);
  const takenAt = getRandomDate();

  return createData(_id, node, image, numberOfFaces, processingTime, takenAt);
});

// ==============================|| IMAGE TABLE - HEADER CELL ||============================== //

const headCells = [
  {
    id: '_id',
    align: 'left',
    disablePadding: false,
    label: 'ID'
  },
  {
    id: 'node',
    align: 'left',
    disablePadding: true,
    label: 'Node'
  },
  {
    id: 'image',
    align: 'left',
    disablePadding: false,
    label: 'Image'
  },
  {
    id: 'numberOfFaces',
    align: 'left',
    disablePadding: false,
    label: 'Number of Faces'
  },
  {
    id: 'processingTime',
    align: 'left',
    disablePadding: false,
    label: 'FR Processing Time'
  },
  {
    id: 'takenAt',
    align: 'left',
    disablePadding: false,
    label: 'Timestamp'
  }
];

// ==============================|| IMAGE TABLE - HEADER ||============================== //

function ImageTableHead() {
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

// ==============================|| IMAGE TABLE ||============================== //

export default function ImageTable() {
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
          <ImageTableHead />
          <TableBody>
            {rows.map((row) => {
              return (
                <TableRow hover sx={{ '&:last-child td, &:last-child th': { border: 0 } }} key={row._id}>
                  <TableCell component="th" scope="row" align="left">
                    {row._id}
                  </TableCell>
                  <TableCell align="left">{row.node}</TableCell>
                  <TableCell align="left">{row.image}.jpg</TableCell>
                  <TableCell align="left">{row.numberOfFaces}</TableCell>
                  <TableCell align="left">{row.processingTime}ms</TableCell>
                  <TableCell align="left">{row.takenAt}</TableCell>
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
}
