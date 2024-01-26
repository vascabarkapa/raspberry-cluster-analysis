import { get, post } from './api-client';

const ENDPOINT = '/auth';

function login(email, password) {
  const body = {
    email,
    password
  };

  return post(ENDPOINT + '/login', body);
}

function getCurrentUser() {
  return get(ENDPOINT + '/me');
}

const AuthService = {
  login,
  getCurrentUser
};

export default AuthService;
