const router = require("express").Router();
const pagesData = require("../models/data/pagesData");

router.get("/", (request, response) => {
    response.render("pages/home", { pagesData: pagesData , currentPage: 'home'});
});

module.exports = router;