const express = require('express');

const routes = require('./routes/index');

const app = express();

app.use('/public', express.static(process.cwd() + '/public'));
app.set('view engine', 'ejs');

routes(app);

var port = 3000;

app.listen(port, () => {
    console.log('Server started on port ' + port);
});