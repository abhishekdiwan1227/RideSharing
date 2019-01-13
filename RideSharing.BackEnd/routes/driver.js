"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express = require("express");
var router = express.Router();
var activeDrivers = [];
router.get('/', function (req, res) {
    res.status(200).json(activeDrivers);
});
router.post('/', function (req, res) {
    activeDrivers.push(req.body);
    res.status(200).json(req.body);
});
exports.default = router;
//# sourceMappingURL=driver.js.map