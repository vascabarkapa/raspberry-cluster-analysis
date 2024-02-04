export const getCurrentDate = () => {
  const danas = new Date();
  const dan = String(danas.getDate()).padStart(2, '0');
  const mesec = String(danas.getMonth() + 1).padStart(2, '0');
  const godina = danas.getFullYear();

  return `${dan}.${mesec}.${godina}`;
};
