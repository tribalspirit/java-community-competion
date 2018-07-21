module.exports = (req, res, next) => {
  if (req.session.userId) {
    return next();
  }
  // console.log('Not Authenticated');
  res.redirect('/login');
};
