let mongoose = require('mongoose');

const BusinessContact = mongoose.Schema(
    {
        displayName: {
            type: String,
            require: 'Name is required'
        },
        contactNumber: {
            type: Number,
            require: 'Contact Number is required'
        },
        email: {
            type: String,
            require: 'Email is required',
            unique: true
        },
        created:
        {
            type: Date,
            default: Date.now,
        },

        update:
        {
            type: Date,
            default: Date.now,
        }
    },
    {
        collection: "businessContacts"
    }
);

module.exports.BusinessContact = mongoose.model('businessContact', BusinessContact);