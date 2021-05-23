module.exports = (require, res, next) => {
    if (!require.session.isLoggedIn) {
        return res.redirect('/login');
    }
    next();
}