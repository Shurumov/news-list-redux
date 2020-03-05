export const API_METHODS = {
  POSTS: '/posts',
  POST: id => `/posts/${id}`,
  USERS: '/users',
  COMMENTS: id => `/posts/${id}/comments`,
};