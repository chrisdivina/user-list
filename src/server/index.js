const express = require('express');
const bodyParser = require('body-parser');
const contacts = require('./contacts.json');
const contactsRouter = require('./routers/contacts');
const { allowCrossDomain } = require('./middleware');

const app = express();
app.set('contacts', contacts);

app.use(bodyParser.json()); // for parsing application/json
app.use(bodyParser.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded
app.use(express.static('server/public'));

app.use(allowCrossDomain);
// app.use('/experience', routers.experience);
// app.use('/', routers.all);
app.use('/contacts', contactsRouter);

const server = app.listen(6565, () => {
  console.log('Listening on port 6565'); // eslint-disable-line no-console
});

module.exports = server;
