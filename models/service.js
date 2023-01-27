/**======================
 ** FILENAME:    service.js
 ** AUTHOR:      Sebastian Silva
 ** STUDENT ID:  301248383
 ** DATE:        01/27/2023
 *========================**/

module.exports = class Service {
    constructor(name, title, description, imageUrl) {
        // Name to identify this service
        this.name = name;
        // Title that will be shown by the page
        this.title = title;
        // Description of the service
        this.description = description;
        // Optional image for the service
        this.imageUrl = imageUrl;
    }
}