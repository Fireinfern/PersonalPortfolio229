/**======================
 * FILENAME:    services.js
 * AUTHOR:      Sebastian Silva
 * STUDENT ID:  301248383
 * DATE:        01/27/2023
 *========================**/

const router = require("express").Router();
const servicesData = require("../models/data/servicesData");
const pagesData = require("../models/data/pagesData");

// All Routers uses the pages Data object, because it has the data of all available pages
router.get("/", (request, response) => {
    response.render("pages/services", { pagesData: pagesData, servicesData: servicesData , currentPage: 'services'});
});

module.exports = router;