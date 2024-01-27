import { lazy } from 'react';
import { Navigate } from 'react-router';

// project import
import Loadable from 'components/Loadable';
import MinimalLayout from 'layout/MinimalLayout';
import ErrorPage from '../pages/error/ErrorPage';

import { isAuthenticated } from '../utils/UserAuthenticated';

// render - login
const AuthLogin = Loadable(lazy(() => import('pages/authentication/Login')));

// ==============================|| AUTH ROUTING ||============================== //

const LoginRoutes = {
  path: '/',
  element: isAuthenticated() ? <Navigate to={'/'} /> : <MinimalLayout />,
  children: [
    {
      path: 'login',
      element: <AuthLogin />
    },
    {
      path: '*',
      element: <ErrorPage code={404} message={'Not Found'} s/>
    }
  ]
};

export default LoginRoutes;
