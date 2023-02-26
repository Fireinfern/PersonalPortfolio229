const express = require('express');
let mongoose = require('mongoose');
let passport =  require('passport');

let UserModel = require('../models/user');
let User = UserModel.User;

module.exports.processLoginPage = (req, res, next) => {
    passport.authenticate('local', 
    (err, user, info) => {
        if (err) return next(err);
        if (!user) {
            req.flash('loginMessage', "Authentication Error");
            return res.redirect('/login');
        }
        req.login(user, (err) => {
            if (err) return next(err);
            return res.redirect('/');
        })
    })(req, res, next);
}