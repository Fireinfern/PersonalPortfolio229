/**======================
 * FILENAME:    aboutMe.js
 * AUTHOR:      Sebastian Silva
 * STUDENT ID:  301248383
 * DATE:        01/27/2023
 *========================**/

const router = require('express').Router();
const pagesData = require('../models/data/pagesData');

// All Routers uses the pages Data object, because it has the data of all available pages
router.get("/", (request, response, next) => {
    response.render("pages/aboutMe", {pagesData: pagesData, currentPage: 'aboutMe'});
});

module.exports = router;