const router = require('express').Router();
const pagesData = require("../public/javascripts/pagesData");

router.get('/', (request, response, next) => {
    response.render('pages/projects', {pagesData: pagesData, currentPage: 'projects'})
});

module.exports = router;