/*
 * GET users listing.
 */
import express = require('express');
const router = express.Router();

router.get('/registerUser', (req: express.Request, res: express.Response) => {
    res.send("User Registered");
});

export default router;