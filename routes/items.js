const express = require('express');
const router = express.Router();
const Items = require('../models/Items');

router.get('/items', (req, res, next) => {
    Items.getAll((err, result) => {
        if(err) {
            throw err;
        } else {
            res.send(result);
        }
    });
});

router.post('/items/', (req, res, next) => {
    var oData = req.body;
    //validate here.
    Items.addItem(oData, (err, result) => {
        if(err) {
            throw err;
        } else {
            res.send(result);
        }
    });
});

module.exports = router;