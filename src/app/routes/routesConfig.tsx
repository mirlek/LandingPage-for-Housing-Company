import { Navigate, RouteObject } from 'react-router-dom';
import { lazy } from 'react';
import { RootLayout } from '@app/layouts/RootLayout';
import Loadable from '@/shared/common/Loadable';
import * as paths from './paths';

// Layouts

const HomeLayout = Loadable(lazy(() => import('@app/layouts/home')));
const LogoOnlyLayout = Loadable(lazy(() => import('@app/layouts/LogoOnlyLayout')));

// IMPORT COMPONENTS
// Main
const HomePage = Loadable(lazy(() => import('../../pages/home/index')));
const NotFound = Loadable(lazy(() => import('../../pages/Page404')));
const Error = Loadable(lazy(() => import('../../pages/Page500')));
const Maintenance = Loadable(lazy(() => import('../../pages/Maintenance')));

// Auth
const Login = Loadable(lazy(() => import('@pages/auth/Login')));

const { PATH_HOME, PATH_AUTH } = paths;

const authRoutes: RouteObject = {
  path: PATH_AUTH.root,
  children: [
    {
      path: PATH_AUTH.login,
      Component: Login
    }
  ]
};

const mainRoutes: RouteObject = {
  path: '*',
  Component: LogoOnlyLayout,
  children: [
    { path: 'maintenance', Component: Maintenance },
    { path: '404', Component: NotFound },
    { path: '500', Component: Error },
    { path: '*', element: <Navigate to="/404" replace /> }
  ]
};

const homeRoutes: RouteObject = {
  path: PATH_HOME.root,
  Component: HomeLayout,
  children: [{ path: '/', Component: HomePage }]
};

export const routesConfig: RouteObject[] = [
  {
    Component: RootLayout,
    children: [authRoutes, mainRoutes, homeRoutes]
  }
];
