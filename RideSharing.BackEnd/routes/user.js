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
    User.findOne({ username: req.body.Username })
        .exec()
        .then(function (result) {
        if (result) {
            res.status(200).json(result);
        }
        else {
            res.json(result);
        }
    })
        .catch(function (err) {
        console.log(err);
        res.status(500).json("Failed");
    });
});
router.post('/registerUser', function (req, res) {
    if (!req.body.IsDriver) {
        var user = new User({
            _id: mongoose.Types.ObjectId(),
            name: req.body.Name,
            username: req.body.Username,
            password: req.body.Password,
            phone: req.body.Phone,
            email: req.body.Email
        });
    }
    else {
        var user = new User({
            _id: mongoose.Types.ObjectId(),
            name: req.body.Name,
            username: req.body.Username,
            password: req.body.Password,
            phone: req.body.Phone,
            email: req.body.Email,
            isDriver: req.body.IsDriver,
            registrataionNumber: req.body.RegistrationNumber,
            engineNumber: req.body.EngineNumber,
            chassisNumber: req.body.ChassisNumber
        });
    }
    user.save()
        .then(function (result) {
        res.status(200);
        res.json(result);
    })
        .catch(function (err) {
        console.log(err);
        res.status(500).json("Failed");
    });
});
exports.default = router;
//# sourceMappingURL=user.js.map