import { lazy } from 'react';

// project import
import Loadable from 'components/Loadable';
import MainLayout from 'layout/MainLayout';
import UsersPage from '../pages/users/UsersPage';
import PicturesPage from '../pages/pictures/PicturesPage';
import ClusterPage from '../pages/cluster/ClusterPage';

// render - dashboard
const DashboardDefault = Loadable(lazy(() => import('pages/dashboard')));

// ==============================|| MAIN ROUTING ||============================== //

const MainRoutes = {
  path: '/',
  element: <MainLayout />,
  children: [
    {
      path: '',
      element: <DashboardDefault />
    },
    {
      path: 'cluster',
      element: <ClusterPage />
    },
    {
      path: 'pictures',
      element: <PicturesPage />
    },
    {
      path: 'users',
      element: <UsersPage />
    }
  ]
};

export default MainRoutes;
