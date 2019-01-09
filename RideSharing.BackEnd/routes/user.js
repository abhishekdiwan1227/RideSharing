"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/*
 * GET users listing.
 */
var express = require("express");
var router = express.Router();
var User = require('../models/userModel');
var db = require('../config/database');
var mongoose = require('mongoose');
router.post('/authenticateUser', function (req, res) {
    User.findOne({ username: req.body.Username, password: req.body.Password })
        .then(function (result) {
        console.log(result);
    })
        .catch(function (err) {
        console.log(err);
    });
});
router.post('/registerUser', function (req, res) {
    var user = new User({
        _id: mongoose.Types.ObjectId(),
        name: req.body.Name,
        username: req.body.Username,
        password: req.body.Password,
        phone: req.body.Phone,
        email: req.body.Email
    });
    user.save()
        .then(function (result) {
        res.status(200);
    })
        .catch(function (err) {
        console.log(err);
    });
});
exports.default = router;
//# sourceMappingURL=user.js.map