const router = require("express").Router();
const servicesData = require("../models/data/servicesData");
const pagesData = require("../models/data/pagesData");

router.get("/", (request, response) => {
    response.render("pages/services", { pagesData: pagesData, servicesData: servicesData , currentPage: 'services'});
});

module.exports = router;