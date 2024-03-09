const router = require('express').Router();
const User = require('../models/User');
const bcrypt = require('bcrypt');

router.get('/signup', (req, res) => {
    res.render('signup');
});

router.post('/signup', async (req, res) => {
    try {
        const { username, password } = req.body;

        const hashedPassword = await bcrypt.hash(password, 10);

        const user = await User.create({ username, password: hashedPassword });

        req.session.loggedIn = true;
        req.session.user = user;

        res.redirect('/dashboard');
    } catch (err) {
        res.render('signup', { message: `Signup failed: ${err.message}` });
    }
});

module.exports = router;