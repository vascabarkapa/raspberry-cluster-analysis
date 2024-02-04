import { get, post } from './api-client';

const ENDPOINT = '/notification';
const CURRENT_USER = JSON.parse(localStorage.getItem('current_user'));

function getNotifications() {
  return get(ENDPOINT + '/' + CURRENT_USER?.id);
}

function readNotification(id) {
  return post(ENDPOINT + '/' + id);
}

function readAllNotifications() {
  return post(ENDPOINT + '/read-all/' + CURRENT_USER?.id);
}

const NotificationService = {
  getNotifications,
  readNotification,
  readAllNotifications
};

export default NotificationService;
