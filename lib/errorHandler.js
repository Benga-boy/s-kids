const { notFound, unauthorised } = require('./errorMessages')

function errorHandler(err, req, res, next) {
  if (err.name === 'ValidationError') {

    const customErrors = {} 


    //* looping in an object - for loop - 'const key' is the condition; like while there is a key in err.errors do this...
    for (const key in err.errors) {
      customErrors[key] = err.errors[key].message
    }
    
    return res.status(422).json(customErrors)
  }

  if (err.message === notFound) {
    return res.status(404).json({ message: 'Not Found' })
  }

  if (err.message === unauthorised) {
    return res.status(401).json({ message: 'Unauthorized' })
  }

  res.sendStatus(500)
  next(err)
}

module.exports = errorHandler