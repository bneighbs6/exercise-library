function asyncErrorBoundary(delegate, defaultStatus = 500) {
  return (req, res, next) => {
      Promise.resolve()
          .then(() => delegate(req, res, next))
          .catch((error = {}) => {
              console.error('Error occurred:', error);
              const { status = defaultStatus, message = 'An unexpected error occurred' } = error;
              next({ status, message });
          });
  };
}

module.exports = asyncErrorBoundary;