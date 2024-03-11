const router = require('express').Router();
const isAuthenticated = require('../utils/auth');
const { User, Post } = require('../models');

router.get('/dashboard', isAuthenticated, async (req, res) => {
    try {
        const userData = await User.findByPk(req.session.user.id, {
            include: [{ model: Post }],
        });

        const user = userData.get({ plain: true });

        res.render('dashboard', { user });
    } catch (err) {
        res.status(500).json(err);
    }
});

module.exports = router;