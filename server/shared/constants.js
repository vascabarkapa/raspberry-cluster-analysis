const responseStatusCodes = {
  VALIDATION_ERROR: 400,
  UNAUTHORIZED: 401,
  FORBIDDEN: 403,
  NOT_FOUND: 404,
  SERVER_ERROR: 500
};

const responseStatusMessages = {
  VALIDATION_ERROR: 'Validation failed',
  UNAUTHORIZED: 'Unauthorized',
  FORBIDDEN: 'Forbidden',
  NOT_FOUND: 'Not found',
  SERVER_ERROR: 'Server error',
  DEFAULT: 'No error'
};

const Constants = {
  responseStatusCodes,
  responseStatusMessages
};

export default Constants;
