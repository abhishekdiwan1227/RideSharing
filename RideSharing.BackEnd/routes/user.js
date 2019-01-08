"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/*
 * GET users listing.
 */
var express = require("express");
var router = express.Router();
router.get('/registerUser', function (req, res) {
    res.send("User Registered");
});
exports.default = router;
//# sourceMappingURL=user.js.map