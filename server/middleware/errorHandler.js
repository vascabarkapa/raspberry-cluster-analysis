const Constants = require("../shared/constants");

const errorHandler = (err, req, res, next) => {
  const statusCode = res.statusCode ? res.statusCode : 500;

  switch (statusCode) {
    case Constants.responseStatusCodes.VALIDATION_ERROR:
      res.json({title: "Validation failed!", message: err.message, stackTrace: err.stack});
      break;

    case Constants.responseStatusCodes.UNAUTHORIZED:
      res.json({title: "Unauthorized!", message: err.message, stackTrace: err.stack});
      break;

    case Constants.responseStatusCodes.FORBIDDEN:
      res.json({title: "Forbidden!", message: err.message, stackTrace: err.stack});
      break;

    case Constants.responseStatusCodes.NOT_FOUND:
      res.json({title: "Not found!", message: err.message, stackTrace: err.stack});
      break;

    case Constants.responseStatusCodes.SERVER_ERROR:
      res.json({title: "Server error!", message: err.message, stackTrace: err.stack});
      break;

    default:
      console.log("No error!");
      break;
  }

};

module.exports = errorHandler;