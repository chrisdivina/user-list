const express = require('express');
const bodyParser = require('body-parser');
const contacts = require('./contacts.json');
const contactsRouter = require('./routers/contacts');
const { allowCrossDomain } = require('./middleware');

const {
  SERVER_PORT = 6565,
  API_PATH = ''
} = process.env;

const app = express();
app.set('contacts', contacts);

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true, limit: '50mb' }));
app.use(express.static(`${__dirname}/public`));
app.use('/avatar', express.static(`${__dirname}/public`));

app.use(allowCrossDomain);
app.use(`${API_PATH}/contacts`, contactsRouter);

const server = app.listen(SERVER_PORT, () => {
  console.log(`Listening on port ${SERVER_PORT}`); // eslint-disable-line no-console
});

module.exports = server;
