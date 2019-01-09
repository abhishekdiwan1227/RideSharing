/*
 * GET users listing.
 */
import express = require('express');
const router = express.Router();
var User = require('../models/userModel');
var db = require('../config/database');
var mongoose = require('mongoose');

router.post('/authenticateUser', (req: express.Request, res: express.Response) => {
    User.findOne({ username: req.body.Username, password: req.body.Password })
        .then(result => {
            console.log(result);
        })
        .catch(err => {
            console.log(err);
        });
});

router.post('/registerUser', (req: express.Request, res: express.Response) => {
    const user = new User({
        _id: mongoose.Types.ObjectId(),
        name: req.body.Name,
        username: req.body.Username,
        password: req.body.Password,
        phone: req.body.Phone,
        email: req.body.Email
    });

    user.save()
        .then(result => {
            res.status(200);
        })
        .catch(err => {
            console.log(err);
        });
});

export default router;

