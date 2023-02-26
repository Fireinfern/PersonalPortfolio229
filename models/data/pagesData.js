/**======================
 ** FILENAME:    pagesData.js
 ** AUTHOR:      Sebastian Silva
 ** STUDENT ID:  301248383
 ** DATE:        01/27/2023
 *========================**/

const Page = require("../page");

// Simple pages data object beign exported so it can be easily referenced by other classes
module.exports = {
    home: new Page("home", true, "Home"),
    aboutMe: new Page("aboutMe", true, "About Me", "/about-me"),
    projects: new Page("projects", true, "Projects", "/projects"),
    services: new Page("services", true, "Services", "/services"),
    contact: new Page("contact", true, "Contact", "/contact"),
    login: new Page("login", true, "Login", "/login"),
    businessContacts: new Page("businessContacts", true, "Business Contacts", "/business-contacts"),
};