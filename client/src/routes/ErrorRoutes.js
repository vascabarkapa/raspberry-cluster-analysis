// project import
import MinimalLayout from 'layout/MinimalLayout';
import ErrorPage from '../pages/error/ErrorPage';

// ==============================|| AUTH ROUTING ||============================== //

const ErrorRoutes = {
  path: '/',
  element: <MinimalLayout />,
  children: [
    {
      path: '/400',
      element: <ErrorPage code={400} message={'Bad Request'} />
    },
    {
      path: '/401',
      element: <ErrorPage code={401} message={'Unauthorized'} />
    },
    {
      path: '/403',
      element: <ErrorPage code={403} message={'Forbidden'} />
    },
    {
      path: '/404',
      element: <ErrorPage code={404} message={'Not Found'} />
    },
    {
      path: '/500',
      element: <ErrorPage code={500} message={'Internal Server Error'} />
    },
    {
      path: '/502',
      element: <ErrorPage code={502} message={'Bad Gateway'} />
    },
    {
      path: '/504',
      element: <ErrorPage code={504} message={'Gateway Timeout'} />
    }
  ]
};

export default ErrorRoutes;
