'use strict';
const db = require('../database/db');

var Items = (item) => {
    this.itemName = item.itemName;
    this.itemQty = item.itemQty;
    this.itemAmount = item.itemAmount;
}

Items.getAll = function getAll(result) {
    let sQuery = 'SELECT * FROM items';
    db.query(sQuery, (err, res) => {
        if (err) {
            console.log('error: ' + err);
            result(err, null);
        } else {
            result(null, res);
        }
    });
}

module.exports = Items;