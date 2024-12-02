const getProfile = (req, res) => {
    if (!req.user) {
      return res.redirect('/');
    }
    res.json({ user: req.user });
  };
  
  module.exports = { getProfile };
  