"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express = require("express");
var router = express.Router();
var activeDrivers = [];
var incomingRequests = [];
router.get('/', function (req, res) {
    res.status(200).json(activeDrivers);
});
router.post('/', function (req, res) {
    activeDrivers.push(req.body);
    res.status(200).json(req.body);
});
router.put('/', function (req, res) {
    activeDrivers.forEach(function (driver) {
        if (driver.Name === req.body.Name) {
            driver.Coordinates = req.body.Coordinates;
            //driver.sseSend();
        }
    });
});
router.post('/incoming', function (req, res) {
    incomingRequests.push(req.body);
    res.status(200).json(req.body);
});
router.get('/incoming', function (req, res) {
    res.status(200).json(incomingRequests);
});
exports.default = router;
//# sourceMappingURL=driver.js.map