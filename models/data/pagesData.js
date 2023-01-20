const Page = require("../page");

module.exports = {
    home: new Page("home", true, "Home"),
    aboutMe: new Page("aboutMe", true, "About Me", "/about-me"),
    projects: new Page("projects", true, "Projects", "/projects"),
    services: new Page("services", true, "Services", "/services"),
    contact: new Page("contact", true, "Contact", "/contact")   ,
};