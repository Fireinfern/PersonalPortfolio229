const router = require('express').Router();
const pagesData = require("../models/data/pagesData");
const projectsData = require('../models/data/projectsData');

router.get('/', (request, response, next) => {
    response.render('pages/projects', {pagesData: pagesData, projectsData: projectsData, currentPage: 'projects'})
});

module.exports = router;