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

Items.addItem = function addItem(oData, result) {
    let aUpdate = [oData.name, oData.qty, oData.amount];
    let sQuery = 'INSERT INTO items(name, qty, amount) VALUES (?,?,?)';
    db.query(sQuery, aUpdate, (err,res) => {
        if (err) {
            console.log('error: ' + err);
            result(err, null);
        } else {
            console.log(res);
            result(null, res);
        }
    })
}

Items.getItem = function getItem(iId, result) {
    let sQuery = 'SELECT * FROM items WHERE id=' + iId;
    db.query(sQuery, (err,res) => {
        if (err) {
            console.log('error: ' + err);
            result(err, null);
        } else {
            console.log(res);
            result(null, res);
        }
    })
}

Items.editItem = function editItem(oData, result) {
    let aUpdate = [oData.name, oData.qty, oData.amount, oData.id];
    let sQuery = 'UPDATE items SET name=?, qty=?, amount=? WHERE id=?';
    db.query(sQuery, aUpdate, (err,res) => {
        if (err) {
            console.log('error: ' + err);
            result(err, null);
        } else {
            console.log(res);
            result(null, res);
        }
    })
}

Items.deleteItem = function deleteItem(iId, result) {
    let sQuery = 'DELETE FROM items where id=' + iId;
    db.query(sQuery, (err,res) => {
        if (err) {
            console.log('error: ' + err);
            result(err, null);
        } else {
            console.log(res);
            result(null, res);
        }
    })
}

module.exports = Items;