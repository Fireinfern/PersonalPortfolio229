// Exports the Project class, a class  that will be use to create Project Cards
module.exports = class Project {
    constructor(name, title, description, imageUrl, projectUrl, projectBadges = []) {
        // identifier name of the project
        this.name = name;
        // Title that will be shown in the page
        this.title = title;
        // Description of the project
        this.description = description;
        // optional image url
        this.imageUrl = imageUrl;
        // redirection to project url
        this.projectUrl = projectUrl;
        // Badges that will be included in the card
        this.projectBadges = projectBadges;
    }
}