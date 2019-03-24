'use strict';
const viewsPath = '../public/views/';

module.exports = function(app) {
    app.get('/', function(req, res) {
        res.render(viewsPath + 'pages/home');
    });

    app.get('/addItems', function(req, res) {
        res.render(viewsPath + 'pages/form', {sTitle: 'Add', sScript: 'addScript', iId: null});
    });

    app.get('/items/:id', function(req, res) {
        res.render(viewsPath + 'pages/form', {sTitle: 'Edit', sScript: 'editScript', iId: req.params.id});
    });
};