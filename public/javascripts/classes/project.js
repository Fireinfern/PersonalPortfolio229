module.exports = class Project {
    constructor(name, title, description, imageUrl, projectUrl) {
        this.name = name;
        this.title = title;
        this.description = description;
        this.imageUrl = imageUrl;
        this.projectUrl = projectUrl;
    }
}