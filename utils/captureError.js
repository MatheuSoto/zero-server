const env = process.env.NODE_ENV

function withErrorStack (error, stack) {
  if (env === 'development') {
    return { ...error, stack }
  }
  return error
}

function logErrors (err, req, res, next) {
  console.log(err)
  next(err)
}

function errorHandler (err, res) {
  logErrors(err)
  const { output: { statusCode, payload } } = err
  res.status(statusCode).json(withErrorStack(payload, err.stack))
}

export default errorHandler
