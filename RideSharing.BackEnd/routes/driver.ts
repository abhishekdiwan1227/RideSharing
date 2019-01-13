import express = require('express');
const router = express.Router();
var activeDrivers = [];

router.get('/', (req: express.Request, res: express.Response) => {
    res.status(200).json(activeDrivers);
});

router.post('/', (req: express.Request, res: express.Response) => {
    activeDrivers.push(req.body);
    res.status(200).json(req.body);
});

export default router;