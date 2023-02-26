/**======================
 * FILENAME:    login.js
 * AUTHOR:      Sebastian Silva
 * STUDENT ID:  301248383
 * DATE:        02/26/2023
 *========================**/

const router = require('express').Router();
const pagesData = require("../models/data/pagesData");
const { processLoginPage } = require('../controllers/login');
const { checkIsNotAuthenticated } = require('../controllers/authCheck');
const passport = require('passport');

router.get('/', checkIsNotAuthenticated, (req, res, next) => {
    res.render('pages/login', { pagesData: pagesData, currentPage: 'login' });
});

router.post('/process', passport.authenticate('local', {
    successRedirect: '/business-contacts',
    failureRedirect: '/login'
}));

module.exports = router;