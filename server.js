const express = require('express');
const bodyParser = require('body-parser');

const routes = require('./routes/index');
const items = require('./routes/items');

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: true
}));

app.use('/public', express.static(process.cwd() + '/public'));
app.set('view engine', 'ejs');
app.use('/api', items);

routes(app);

var port = 3000;

app.listen(port, () => {
    console.log('Server started on port ' + port);
});