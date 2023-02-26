/**======================
 ** FILENAME:    user.js
 ** AUTHOR:      Sebastian Silva
 ** STUDENT ID:  301248383
 ** DATE:        02/26/2023
 *========================**/

let mongoose = require('mongoose');
let passportLocalMongoose = require('passport-local-mongoose');

const user = mongoose.Schema(
    {
        username: {
            type: String,
            default: '',
            trim: true,
            required: 'username is required'
        },
        email: {
            type: String,
            default: '',
            trim: true,
            required: 'email is required'
        },
        displayname: {
            type: String,
            trim: true,
            require: 'DisplayName is required'
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
        collection: "users"
    }
);

let options = ({ missingPasswordError: 'wrong/Missing Password' });
user.plugin(passportLocalMongoose, options);
module.exports.User = mongoose.model('user', user);