const { BusinessContact } = require("../models/bussinessContact")

module.exports.createContact = async function(req, res, next) {
    let newBusinessContact = new BusinessContact(req.body);
    await newBusinessContact.save();
    return next();
}

module.exports.updateContact = async function (req, res, next) {
    let contact = await BusinessContact.findById(req.body.id);
    contact.displayName = req.body.displayName;
    contact.email = req.body.email;
    contact.contactNumber = req.body.contactNumber;
    await contact.save();
    return next();
}

module.exports.deleteContact = async function (req, res, next) {
    await BusinessContact.findByIdAndRemove(req.params.id)
    return next();
}

module.exports.getSortedContacts = async function(req, res, next) {
    let contacts = await BusinessContact.find({}).sort({displayName: 1});
    res.locals.contacts = contacts;
    return next();
}

module.exports.getContactById = async function(req, res, next) {
    let contact = await BusinessContact.findById(req.params.id);
    res.locals.contact = contact;
    return next();
}