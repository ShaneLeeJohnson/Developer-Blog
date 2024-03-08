const router = require('express').Router();
const isAuthenticated = require('../utils/auth');

router.get('/dashboard', isAuthenticated, (req, res) => {
    res.render('dashboard');
});

module.exports = router;