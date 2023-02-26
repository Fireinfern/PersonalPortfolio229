const router = require('express').Router();
const pagesData = require("../models/data/pagesData");
const { processLoginPage } = require('../controllers/login');
const { checkIsNotAuthenticated } = require('../controllers/authCheck');
const passport = require('passport');

router.get('/', checkIsNotAuthenticated, (req, res, next) => {
    res.render('pages/login', { pagesData: pagesData, currentPage: 'login' });
});

router.post('/process', passport.authenticate('local', {
    successRedirect: '/contact',
    failureRedirect: '/login'
}));

module.exports = router;