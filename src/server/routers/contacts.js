const express = require('express');
const fs = require('fs');
const path = require('path');

const router = express.Router();
let contacts;

router.use((req, res, next) => {
  contacts = req.app.get('contacts');
  next();
});

router.get('/', (req, res) => {
  res.send(contacts);
});

router.get('/:id', (req, res) => {
  res.send(contacts[req.params.id]);
});

router.delete('/:id', (req, res) => {
  res.send(`deleting contact with id ${req.params.id}`);
});

router.post('/:id', (req, res) => {
  const { ...data } = req.body;
  contacts[req.params.id] = {
    ...contacts[req.params.id],
    ...data
  };
  const content = JSON.stringify(contacts, null, 2);
  const filePath = path.resolve(__dirname, '../contacts.json');
  fs.writeFile(filePath, content, err => {
    if (err) throw err;
    res.send('The file has been saved!');
  });
});

router.put('/:id', (req, res) => {
  const { ...data } = req.body;
  contacts[req.params.id] = { ...data };
  const content = JSON.stringify(contacts, null, 2);
  const filePath = path.resolve(__dirname, '../contacts.json');
  fs.writeFile(filePath, content, err => {
    if (err) throw err;
    res.send('The file has been saved!');
  });
});

module.exports = router;
