import { lazy } from 'react';
import { Navigate } from 'react-router';

// project import
import Loadable from 'components/Loadable';
import MainLayout from 'layout/MainLayout';
import UsersPage from '../pages/users/UsersPage';
import PicturesPage from '../pages/pictures/PicturesPage';
import ClusterPage from '../pages/cluster/ClusterPage';
import ApiDocumentationPage from '../pages/api-documentation/ApiDocumentationPage';

// render - dashboard
const DashboardDefault = Loadable(lazy(() => import('pages/dashboard')));

// ==============================|| MAIN ROUTING ||============================== //

const isAuthenticated = () => {
  return localStorage.getItem('token') !== null;
};

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
      path: 'pictures',
      element: <PicturesPage />
    },
    {
      path: 'users',
      element: <UsersPage />
    },
    {
      path: 'api-documentation',
      element: <ApiDocumentationPage />
    }
  ]
};

export default MainRoutes;
