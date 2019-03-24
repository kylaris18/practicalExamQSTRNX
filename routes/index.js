'use strict';
const viewsPath = '../public/views/';

module.exports = function(app) {
    app.get('/', function(req, res) {
        res.render(viewsPath + 'pages/home');
    });
};