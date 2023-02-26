const { checkIsAuthenticated } = require('../controllers/authCheck');
const { getSortedContacts, deleteContact, updateContact, getContactById } = require('../controllers/businessContacts');
const pagesData = require('../models/data/pagesData');

const router = require('express').Router();

router.get('/', [checkIsAuthenticated, getSortedContacts], (req, res, next) => {
    res.render('pages/businessContacts', { pagesData: pagesData, currentPage: 'businessContacts', contacts: res.locals.contacts });
});

router.get('/update/:id', [checkIsAuthenticated, getContactById], (req, res, next) => {
    res.render('pages/updateBusinessContact', { pagesData: pagesData, currentPage: 'businessContacts', contact: res.locals.contact })
});

router.get('/delete/:id', [checkIsAuthenticated, deleteContact], (req, res, next) => {
    res.redirect('/business-contacts');
});

router.post('/update', [checkIsAuthenticated, updateContact], (req, res, next) => {
    res.redirect('/business-contacts');
});

module.exports = router;