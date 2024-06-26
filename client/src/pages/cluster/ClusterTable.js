import PropTypes from 'prop-types';
import { useEffect, useState } from 'react';

// helpers and services
import DateTimeHelper from '../../shared/helpers/DateTimeHelper';
import ClusterService from '../../shared/services/cluster-service';

// material-ui
import { Box, Stack, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from '@mui/material';

// project import
import Dot from 'components/@extended/Dot';
import TableLoading from '../../components/loading/TableLoading';
import TableEmpty from '../../components/loading/TableEmpty';
import TablePagination from '../../components/loading/TablePagination';

// toast
import { toast } from 'react-toastify';

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
    id: 'number_of_nodes',
    align: 'left',
    disablePadding: false,
    label: 'Number of Nodes'
  },
  {
    id: 'min_pods',
    align: 'left',
    disablePadding: false,
    label: 'Min. Pods'
  },
  {
    id: 'max_pods',
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
  } else if (load >= 40 && load < 70) {
    color = 'warning';
  } else if (load >= 70 && load <= 100) {
    color = 'error';
  } else {
    color = 'error';
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
  const [initialRender, setInitialRender] = useState(true);
  const [isLoading, setIsLoading] = useState(false);
  const [clusters, setClusters] = useState([]);
  const [pageSize, setPageSize] = useState(null);
  const [totalPages, setTotalPages] = useState(null);
  const [totalClusters, setTotalClusters] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    setIsLoading(true);

    if (!initialRender) {
      ClusterService.getClusters().then(
        (response) => {
          if (response) {
            setClusters(response?.data?.clusters);
            setPageSize(response?.data?.per_page);
            setTotalPages(response?.data?.total_pages);
            setTotalClusters(response?.data?.total_items);
            setIsLoading(false);
            toast.info('Latest cluster data loaded');
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

  const handlePageChange = (event, value) => {
    if (currentPage !== value) {
      setIsLoading(true);

      ClusterService.getClusters({ page: value }).then(
        (response) => {
          if (response) {
            setClusters(response?.data?.clusters);
            setTotalPages(response?.data?.total_pages);
            setCurrentPage(value);
            setIsLoading(false);
            toast.info('Latest cluster data loaded');
          }
        },
        (error) => {
          console.error(error);
          setIsLoading(false);
        }
      );
    }
  };

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
          aria-labelledby="clusterTable"
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
          {isLoading ? (
            <TableLoading colSpan={8} />
          ) : (
            <TableBody>
              {clusters && clusters?.length > 0 ? (
                clusters.map((cluster) => {
                  return (
                    <TableRow hover sx={{ '&:last-child td, &:last-child th': { border: 0 } }} key={cluster?._id}>
                      <TableCell component="th" scope="row" align="left">
                        {cluster?._id}
                      </TableCell>
                      <TableCell align="left">{cluster?.age}</TableCell>
                      <TableCell align="left">{cluster?.number_of_nodes}</TableCell>
                      <TableCell align="left">{cluster?.min_pods}</TableCell>
                      <TableCell align="left">{cluster?.max_pods}</TableCell>
                      <TableCell align="left">{cluster?.replicas}</TableCell>
                      <TableCell align="left">
                        <ClusterStatus load={cluster?.load} loadThreshold={cluster?.load_threshold} />
                      </TableCell>
                      <TableCell align="left">{DateTimeHelper.convertToLocalFormatWithSeconds(cluster?.createdAt)}</TableCell>
                    </TableRow>
                  );
                })
              ) : (
                <TableEmpty colSpan={8} text={'No Cluster information'} />
              )}
            </TableBody>
          )}
          {(totalClusters && totalClusters) > 0 ? (
            <TablePagination
              colSpan={8}
              totalItems={totalClusters}
              pageSize={pageSize}
              totalPages={totalPages}
              currentPage={currentPage}
              handlePageChange={handlePageChange}
            />
          ) : (
            <></>
          )}
        </Table>
      </TableContainer>
    </Box>
  );
}
