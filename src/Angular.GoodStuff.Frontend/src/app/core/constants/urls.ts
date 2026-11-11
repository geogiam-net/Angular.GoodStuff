export const ROOT_URLS = {
  home: '',
  interpolation: '/interpolation',
  directives: '/directives',
  events: '/events',
  params: '/params',
  conditionalCss: '/conditional-css',
  pipes: '/pipes',
  signals: '/signals',
  lifeCycle: '/life-cycle',
  httpclient: '/httpclient',
  lazyloading: '/lazyloading',
  sharingdata: '/sharingdata',
};

export const SERVER_URLS = {
  backend: 'https://localhost:50949',
};

export const BACKEND_URLS = {
  health: `${SERVER_URLS.backend}/api/health`,
  users: `${SERVER_URLS.backend}/api/users`,
  articles: `${SERVER_URLS.backend}/api/articles`,
  editArticles: `${SERVER_URLS.backend}/api/articles/{id}`,

  delay: `${SERVER_URLS.backend}/api/delay`,
  notFound: `${SERVER_URLS.backend}/api/not-found`,
  badRequest: `${SERVER_URLS.backend}/api/bad-request`,
};
