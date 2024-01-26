import PropTypes from 'prop-types';

// material-ui
import {Box, Stack, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography} from '@mui/material';

// project import
import Dot from 'components/@extended/Dot';
import {useEffect, useState} from "react";
import ClusterService from "../../shared/services/cluster-service";
import TableLoading from "../../components/loading/TableLoading";
import TableEmpty from "../../components/loading/TableEmpty";

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

const ClusterStatus = ({load, loadThreshold}) => {
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
      <Dot color={color}/>
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
  const [isLoading, setIsLoading] = useState(false);
  const [clusters, setClusters] = useState([]);

  useEffect(() => {
    setIsLoading(true);

    ClusterService.getClusters().then((response) => {
      if (response) {
        setClusters(response?.data);
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
          '& td, & th': {whiteSpace: 'nowrap'}
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
          <ClusterTableHead/>
          {isLoading ? <TableLoading colSpan={8}/> :
            <TableBody>
              {(clusters && clusters?.length > 0) ? clusters.map((cluster) => {
                return (
                  <TableRow hover sx={{'&:last-child td, &:last-child th': {border: 0}}} key={cluster._id}>
                    <TableCell component="th" scope="row" align="left">
                      {cluster._id}
                    </TableCell>
                    <TableCell align="left">{cluster.age} min</TableCell>
                    <TableCell align="left">{cluster.numberOfNodes}</TableCell>
                    <TableCell align="left">{cluster.minPods}</TableCell>
                    <TableCell align="left">{cluster.maxPods}</TableCell>
                    <TableCell align="left">{cluster.replicas}</TableCell>
                    <TableCell align="left">
                      <ClusterStatus load={cluster.load} loadThreshold={cluster.loadThreshold}/>
                    </TableCell>
                    <TableCell align="left">{cluster.createdAt}</TableCell>
                  </TableRow>
                );
              }) : (
                <TableEmpty colSpan={8} text={'No Cluster information'}/>
              )}
            </TableBody>}
        </Table>
      </TableContainer>
    </Box>
  );
}
