// material-ui
import { Box, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material';

function createData(trackingNo, nodeName, pictureName, numberOfFaces, processingTime, createdAt) {
  return { trackingNo, nodeName, pictureName, numberOfFaces, processingTime, createdAt };
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

function generateRandomDecimal(min, max, decimalPlaces) {
  const randomValue = Math.random() * (max - min) + min;
  const roundedValue = randomValue.toFixed(decimalPlaces);
  return parseFloat(roundedValue);
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
  const nodeName = 'RASPB_CAM_1';
  const pictureName = generateRandomString(16);
  const numberOfFaces = getRandomNumber(1, 30);
  const processingTime = generateRandomDecimal(0.001, 0.1, 3);
  const createdAt = getRandomDate();

  return createData(trackingNo, nodeName, pictureName, numberOfFaces, processingTime, createdAt);
});

// ==============================|| PICTURES TABLE - HEADER CELL ||============================== //

const headCells = [
  {
    id: 'trackingNo',
    align: 'left',
    disablePadding: false,
    label: 'Tracking No.'
  },
  {
    id: 'nodeName',
    align: 'left',
    disablePadding: true,
    label: 'Node Name'
  },
  {
    id: 'pictureName',
    align: 'left',
    disablePadding: false,
    label: 'Picture Name'
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
    label: 'Processing Time'
  },
  {
    id: 'createdAt',
    align: 'left',
    disablePadding: false,
    label: 'Timestamp'
  }
];

// ==============================|| PICTURES TABLE - HEADER ||============================== //

function PicturesTableHead() {
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

// ==============================|| PICTURES TABLE ||============================== //

export default function PicturesTable() {
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
          <PicturesTableHead />
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
                  <TableCell align="left">{row.nodeName}</TableCell>
                  <TableCell align="left">{row.pictureName}.jpg</TableCell>
                  <TableCell align="left">{row.numberOfFaces}</TableCell>
                  <TableCell align="left">{row.processingTime}s</TableCell>
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
