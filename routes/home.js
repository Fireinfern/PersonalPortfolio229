const router = require("express").Router();
const pagesData = require("../public/javascripts/pagesData");

router.get("/", (request, response) => {
    response.render("pages/home", { pagesData: pagesData , currentPage: 'home'});
});

module.exports = router;