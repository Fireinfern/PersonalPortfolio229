const router = require("express").Router();
const pagesData = require("../public/javascripts/pagesData");

router.get("/", (request, response) => {
    response.render("pages/services", { pagesData: pagesData , currentPage: 'services'});
});

module.exports = router;