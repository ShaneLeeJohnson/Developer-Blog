const isAuthenticated = (req, res, next) => {
    if (req.session && req.session.loggedIn) {
        next();
    } else {
        res.redirect('/login');
    }
};

module.exports = isAuthenticated;