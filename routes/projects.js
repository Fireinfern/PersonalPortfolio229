const router = require('express').Router();
const pagesData = require("../public/javascripts/pagesData");
const projectsData = require('../public/javascripts/projectsData');

router.get('/', (request, response, next) => {
    response.render('pages/projects', {pagesData: pagesData, projectsData: projectsData, currentPage: 'projects'})
});

module.exports = router;