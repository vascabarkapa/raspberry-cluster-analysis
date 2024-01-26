import { useEffect, useState } from 'react';
// material-ui
import { Box, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material';

// services
import ImageService from '../../shared/services/image-service';

// project import
import TableLoading from '../../components/loading/TableLoading';
import TableEmpty from '../../components/loading/TableEmpty';

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
  const [isLoading, setIsLoading] = useState(false);
  const [images, setImages] = useState([]);

  useEffect(() => {
    setIsLoading(true);

    ImageService.getImages().then((response) => {
      if (response) {
        setImages(response?.data);
        setIsLoading(false);
      }
    });
  }, []);

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
          {isLoading ? (
            <TableLoading colSpan={8} />
          ) : (
            <TableBody>
              {images && images?.length > 0 ? (
                images.map((image) => {
                  return (
                    <TableRow hover sx={{ '&:last-child td, &:last-child th': { border: 0 } }} key={image._id}>
                      <TableCell align="left">{image.node}</TableCell>
                      <TableCell align="left">{image.image}.jpg</TableCell>
                      <TableCell align="left">{image.numberOfFaces}</TableCell>
                      <TableCell align="left">{image.processingTime}ms</TableCell>
                      <TableCell align="left">{image.takenAt}</TableCell>
                    </TableRow>
                  );
                })
              ) : (
                <TableEmpty colSpan={8} text={'No Image information'} />
              )}
            </TableBody>
          )}
        </Table>
      </TableContainer>
    </Box>
  );
}
