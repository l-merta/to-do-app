const express = require('express');
const passport = require('passport');
const { getProfile } = require('../controllers/authController');

const router = express.Router();

// Google OAuth
router.get('/google', passport.authenticate('google', { scope: ['profile', 'email'] }));
router.get('/google/callback', passport.authenticate('google', {
  successRedirect: '/auth/profile',
  failureRedirect: '/',
}));

// GitHub OAuth
router.get('/github', passport.authenticate('github', { scope: ['user:email'] }));
router.get('/github/callback', passport.authenticate('github', {
  successRedirect: '/auth/profile',
  failureRedirect: '/',
}));

// Profile route
router.get('/profile', getProfile);

module.exports = router;
