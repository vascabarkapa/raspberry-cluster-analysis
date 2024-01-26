import Constants from './../shared/constants.js';

const errorHandler = (err, req, res, next) => {
  const statusCode = res.statusCode ? res.statusCode : 500;

  switch (statusCode) {
    case Constants.responseStatusCodes.VALIDATION_ERROR:
      res.json({title: Constants.responseStatusMessages.VALIDATION_ERROR, message: err.message, stackTrace: err.stack});
      break;

    case Constants.responseStatusCodes.UNAUTHORIZED:
      res.json({title: Constants.responseStatusMessages.UNAUTHORIZED, message: err.message, stackTrace: err.stack});
      break;

    case Constants.responseStatusCodes.FORBIDDEN:
      res.json({title: Constants.responseStatusMessages.FORBIDDEN, message: err.message, stackTrace: err.stack});
      break;

    case Constants.responseStatusCodes.NOT_FOUND:
      res.json({title: Constants.responseStatusMessages.NOT_FOUND, message: err.message, stackTrace: err.stack});
      break;

    case Constants.responseStatusCodes.SERVER_ERROR:
      res.json({title: Constants.responseStatusMessages.SERVER_ERROR, message: err.message, stackTrace: err.stack});
      break;

    default:
      console.log(Constants.responseStatusMessages.DEFAULT);
      break;
  }

};

export default errorHandler;