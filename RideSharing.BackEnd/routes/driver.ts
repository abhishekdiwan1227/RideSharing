import express = require('express');
const router = express.Router();
var activeDrivers = [];
var incomingRequests = [];

router.get('/', (req: express.Request, res: express.Response) => {
    res.status(200).json(activeDrivers);
});

router.post('/', (req: express.Request, res: express.Response) => {
    activeDrivers.push(req.body);
    res.status(200).json(req.body);
});

router.put('/', (req: express.Request, res: express.Response) => {
    activeDrivers.forEach(driver => {
        if (driver.Name === req.body.Name) {
            driver.Coordinates = req.body.Coordinates;
            //driver.sseSend();
        }
    });
});

router.post('/incoming', (req: express.Request, res: express.Response) => {
    incomingRequests.push(req.body);
    res.status(200).json(req.body);
});

router.get('/incoming', (req: express.Request, res: express.Response) => {
    res.status(200).json(incomingRequests);
})

export default router;