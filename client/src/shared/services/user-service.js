import { get, post, put, remove } from './api-client';

const ENDPOINT = '/user';

function getUsers(params = '') {
  return get(ENDPOINT, params);
}

function getUserById(id) {
  return get(ENDPOINT + '/' + id);
}

function createUser(user) {
  return post(ENDPOINT, user);
}

function updateUser(id, user) {
  return put(ENDPOINT + '/' + id, user);
}

function deleteUser(id) {
  return remove(ENDPOINT + '/' + id);
}

const UserService = {
  getUsers,
  getUserById,
  createUser,
  updateUser,
  deleteUser
};

export default UserService;
