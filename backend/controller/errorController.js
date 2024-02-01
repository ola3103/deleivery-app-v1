const globalErrorHandler = (err, req, res, next) => {
  let errorObject = {
    message: err.message || "something went wrong",
    statusCode: err.statusCode || 500,
  };

  console.log(err);
  return res
    .status(errorObject.statusCode)
    .json({ message: errorObject.message });
};

module.exports = globalErrorHandler;
