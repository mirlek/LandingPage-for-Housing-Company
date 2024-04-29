function path(root: any, sublink: any) {
  return `${root}${sublink}`;
}

const ROOTS_AUTH = '/auth';

const ROOTS = {
  auth: '/auth',
  app: '/app'
};

export const PATH_AUTH = {
  root: ROOTS_AUTH,
  login: path(ROOTS_AUTH, '/login')
};

export const PATH_HOME = {
  dashboard: ROOTS.app,
  root: '/'
};
