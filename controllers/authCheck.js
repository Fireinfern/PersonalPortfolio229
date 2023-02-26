/**======================
 ** FILENAME:    authCheck.js
 ** AUTHOR:      Sebastian Silva
 ** STUDENT ID:  301248383
 ** DATE:        02/26/2023
 *========================**/

module.exports.checkIsAuthenticated = function(req, res, next) {
    if (req.isAuthenticated()) return next();
    res.redirect('/login');
}

module.exports.checkIsNotAuthenticated = function(req, res, next) {
    if (req.isAuthenticated()) {
        return res.redirect('/');
    }
    next();
}