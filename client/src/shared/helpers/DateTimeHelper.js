import moment from 'moment';

function convertToLocalFormatWithSeconds(dateTime) {
  const dateObj = new Date(dateTime);

  // Format date in 24-hour format
  const hours = dateObj.getHours().toString().padStart(2, '0');
  const minutes = dateObj.getMinutes().toString().padStart(2, '0');
  const seconds = dateObj.getSeconds().toString().padStart(2, '0');
  const formattedTime = `${hours}:${minutes}:${seconds}`;

  // Format date in DD.MM.YYYY format
  const day = dateObj.getDate().toString().padStart(2, '0');
  const month = (dateObj.getMonth() + 1).toString().padStart(2, '0');
  const year = dateObj.getFullYear();
  const formattedDate = `${day}.${month}.${year}`;

  return formattedDate + ' ' + formattedTime;
}

function convertToLocalFormat(dateTime) {
  const dateObj = new Date(dateTime);

  // Format date in 24-hour format
  const hours = dateObj.getHours().toString().padStart(2, '0');
  const minutes = dateObj.getMinutes().toString().padStart(2, '0');
  const formattedTime = `${hours}:${minutes}h`;

  // Format date in DD.MM.YYYY format
  const day = dateObj.getDate().toString().padStart(2, '0');
  const month = (dateObj.getMonth() + 1).toString().padStart(2, '0');
  const year = dateObj.getFullYear();
  const formattedDate = `${day}.${month}.${year}`;

  return formattedDate + ' ' + formattedTime;
}

function calculateTimeAgo(createdAt) {
  const currentTime = moment();
  const notificationTime = moment(createdAt);

  const timeDifference = currentTime.diff(notificationTime, 'minutes');

  if (timeDifference < 60) {
    if (timeDifference < 2) {
      return '1 min ago';
    } else {
      return `${timeDifference} mins ago`;
    }
  } else if (timeDifference < 180) {
    const hours = Math.floor(timeDifference / 60);
    return `${hours}h ago`;
  } else if (notificationTime.isSame(currentTime, 'day')) {
    return notificationTime.format('HH:mm');
  } else if (notificationTime.isSame(currentTime.clone().subtract(1, 'day'), 'day')) {
    return '1 day ago';
  } else if (notificationTime.isAfter(currentTime.clone().subtract(2, 'days').startOf('day'))) {
    return '2 days ago';
  } else {
    return notificationTime.format('MMM D');
  }
}

const DateTimeHelper = {
  convertToLocalFormatWithSeconds,
  convertToLocalFormat,
  calculateTimeAgo
};

export default DateTimeHelper;
