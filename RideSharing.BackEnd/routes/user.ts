/*
 * GET users listing.
 */
import express = require('express');
const router = express.Router();
var User = require('../models/userModel');
var db = require('../config/database');
var mongoose = require('mongoose');

router.post('/authenticateUser', (req: express.Request, res: express.Response) => {
    User.findOne({ username: req.body.Username })
        .exec()
        .then(result => {
            if (result) {
                res.status(200).json(result);
            }
            else {
                res.json(result);
            }
        })
        .catch(err => {
            console.log(err);
            res.status(500).json("Failed");
        });
});

router.post('/registerUser', (req: express.Request, res: express.Response) => {
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
        .then(result => {
            res.status(200);
            res.json(result);
        })
        .catch(err => {
            console.log(err);
            res.status(500).json("Failed");

        });
});

export default router;

