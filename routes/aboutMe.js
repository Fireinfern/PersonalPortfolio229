const router = require('express').Router();
const pagesData = require('../models/data/pagesData');

router.get("/", (request, response, next) => {
    response.render("pages/aboutMe", {pagesData: pagesData, currentPage: 'aboutMe'});
});

module.exports = router;