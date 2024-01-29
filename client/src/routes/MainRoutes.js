import { lazy } from 'react';
import { Navigate } from 'react-router';

// project import
import Loadable from 'components/Loadable';
import MainLayout from 'layout/MainLayout';
import UsersPage from '../pages/users/UsersPage';
import ImagePage from '../pages/image/ImagePage';
import ClusterPage from '../pages/cluster/ClusterPage';
import ApiDocumentationPage from '../pages/api-documentation/ApiDocumentationPage';
import ErrorPage from '../pages/error/ErrorPage';

import { isAuthenticated } from '../utils/UserAuthenticated';

// render - dashboard
const DashboardDefault = Loadable(lazy(() => import('pages/dashboard')));

// ==============================|| MAIN ROUTING ||============================== //

const MainRoutes = {
  path: '/',
  element: isAuthenticated() ? <MainLayout /> : <Navigate to={'/login'} />,
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
      path: 'image',
      element: <ImagePage />
    },
    {
      path: 'users',
      element: <UsersPage />
    },
    {
      path: 'api-documentation',
      element: <ApiDocumentationPage />
    },
    {
      path: '*',
      element: <ErrorPage code={404} message={'Not Found'} />
    }
  ]
};

export default MainRoutes;
