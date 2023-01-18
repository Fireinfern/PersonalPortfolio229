const router = require("express").Router();
const pagesData = require("../public/javascripts/pagesData");

router.get("/", (request, response) => {
    response.render("pages/contact", { pagesData: pagesData , currentPage: 'contact'});
});

module.exports = router;