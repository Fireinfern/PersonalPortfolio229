class Page {
    name;
    available = false;
    displayName;
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