"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/*
 * GET home page.
 */
var express = require("express");
var router = express.Router();
router.get('/', function (req, res) {
    res.status(200).json("I am alive");
});
exports.default = router;
//# sourceMappingURL=index.js.map