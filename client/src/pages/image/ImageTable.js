import { useEffect, useState } from 'react';
// material-ui
import { Box, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material';

// helpers and services
import DateTimeHelper from '../../shared/helpers/DateTimeHelper';
import ImageService from '../../shared/services/image-service';

// project import
import TableLoading from '../../components/loading/TableLoading';

import TableEmpty from '../../components/loading/TableEmpty';
// toast
import { toast } from 'react-toastify';

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
    id: 'number_of_faces',
    align: 'left',
    disablePadding: false,
    label: 'Number of Faces'
  },
  {
    id: 'processing_time',
    align: 'left',
    disablePadding: false,
    label: 'FR Processing Time'
  },
  {
    id: 'taken_at',
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
  const [initialRender, setInitialRender] = useState(true);
  const [isLoading, setIsLoading] = useState(false);
  const [images, setImages] = useState([]);

  useEffect(() => {
    setIsLoading(true);

    if (!initialRender) {
      ImageService.getImages().then(
        (response) => {
          if (response) {
            setImages(response?.data);
            setIsLoading(false);
            toast.info('Latest image data loaded');
          }
        },
        (error) => {
          console.error(error);
          setIsLoading(false);
        }
      );
    }

    setInitialRender(false);
  }, [initialRender]);

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
          size="small"
          aria-labelledby="imageTable"
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
                    <TableRow hover sx={{ '&:last-child td, &:last-child th': { border: 0 } }} key={image?._id}>
                      <TableCell component="th" scope="row" align="left">
                        {image?._id}
                      </TableCell>
                      <TableCell align="left">{image?.node}</TableCell>
                      <TableCell align="left">{image?.image}.jpg</TableCell>
                      <TableCell align="left">{image?.number_of_faces}</TableCell>
                      <TableCell align="left">{image?.processing_time}ms</TableCell>
                      <TableCell align="left">{DateTimeHelper.convertToLocalFormatWithSeconds(image?.taken_at)}</TableCell>
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
