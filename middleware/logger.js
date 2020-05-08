function logger(req, res, next) {
    console.log(`[${new Date().toISOString}] ${req.method} to ${req.url} ${req.get(
      'Origin'
      )}`
    );
  
    next()
  }

module.exports = logger;