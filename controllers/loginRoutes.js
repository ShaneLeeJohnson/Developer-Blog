const router = require('express').Router();

router.get('/login', (req, res) => {
    res.render('login');
});

router.post('/login', async (req, res) => {
    try {
        const { username, password } = req.body;

        const user = await User.findOne({ where: { username } });

        if (!user || !user.validPassword(password)) {
            throw new Error('Invalid username or password');
        }

        req.session.loggedIn = true;
        req.session.user = user;

        res.redirect('/dashboard');
    } catch (err) {
        res.render('login', {message: `Login failed: ${err.message}`});
    }
});

module.exports = router;