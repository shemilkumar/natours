class AppError extends Error {
  constructor(message, statusCode) {
    super(message);

    this.statusCode = statusCode;
    // console.log(this.statusCode);
    this.status = statusCode.toString().startsWith('4') ? 'fail' : 'error';
    // this.status = `${statusCode}`.startsWith('4') ? 'fail' : 'error';
    this.isOperationalError = true;

    Error.captureStackTrace(this, this.constructor);
  }
}

module.exports = AppError;
