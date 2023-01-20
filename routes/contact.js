const router = require("express").Router();
const pagesData = require("../public/javascripts/pagesData");

router.get("/", (request, response) => {
    response.render("pages/contact", { pagesData: pagesData , currentPage: 'contact'});
});

router.post("/message", (request, response, next) => {
    console.log(request.body);
    response.redirect(301, "/");
});

module.exports = router;