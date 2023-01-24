// Created a Page class with valid geters and a basic constructor
class Page {
    // Name to idetify this page with
    name;
    // if its available or not
    available = false;
    // Name that will be displayed in the page
    displayName;
    // href url to be used by navigation
    link = "/";
    constructor(name, available, displayName, link = "/") {
        this.name = name;
        this.available = available;
        this.displayName = displayName;
        this.link = link;
    }

    get name() {
        return this.name;
    }

    get isAvailale() {
        return this.available;
    }

    get displayName() {
        return this.displayName;
    }
}

module.exports = Page;