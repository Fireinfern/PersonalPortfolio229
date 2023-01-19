const router = require("express").Router();
const servicesData = require("../public/javascripts/servicesData");
const pagesData = require("../public/javascripts/pagesData");

router.get("/", (request, response) => {
    response.render("pages/services", { pagesData: pagesData, servicesData: servicesData , currentPage: 'services'});
});

module.exports = router;