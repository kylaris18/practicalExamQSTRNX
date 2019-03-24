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

module.exports = router;