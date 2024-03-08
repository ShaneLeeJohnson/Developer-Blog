const isAuthenticated = (req, res, next) => {
    if (req.session && req.session.loggedIn) {
        next();
    } else {
        res.render('login', { message: 'Please sign in or sign up to access this page' });
    }
};

module.exports = isAuthenticated;