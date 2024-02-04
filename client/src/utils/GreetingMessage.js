export const getGreetingMessage = () => {
  const CURRENT_USER = JSON.parse(localStorage.getItem('current_user'));

  const currentHour = new Date().getHours();

  let greetingMessage;
  if (currentHour >= 4 && currentHour < 12) {
    greetingMessage = 'Good morning';
  } else if (currentHour >= 12 && currentHour < 20) {
    greetingMessage = 'Good afternoon';
  } else {
    greetingMessage = 'Good evening';
  }

  return greetingMessage + ', ' + CURRENT_USER?.first_name + ' ' + CURRENT_USER?.last_name;
};
