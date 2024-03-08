const router = require('express').Router();

const homeRoutes = require('./homeRoutes');
const dashboardRoutes = require('./dashboardRoutes');
const loginRoutes = require('./loginRoutes');
const signupRoutes = require('./signupRoutes');

router.use('/', homeRoutes);
router.use('/', dashboardRoutes);
router.use('/', loginRoutes);
router.use('/', signupRoutes);

module.exports = router;