const express = require('express');
const fs = require('fs');
const path = require('path');
const { upload, generateId } = require('../middleware');

const router = express.Router();

router.use(generateId);
router.use(upload);

router.get('/', (req, res) => {
  const contacts = req.app.get('contacts');
  res.send(contacts);
});

router.get('/:id', (req, res) => {
  const contacts = req.app.get('contacts');
  res.send(contacts[req.params.id]);
});

router.delete('/:id', (req, res) => {
  const contacts = req.app.get('contacts').filter(contact => contact.id !== req.params.id);

  const content = JSON.stringify(contacts, null, 2);
  const filePath = path.resolve(__dirname, '../contacts.json');
  fs.writeFile(filePath, content, err => {
    if (err) throw err;
    res.send(contacts);
  });
});

router.post('/:id', (req, res) => {
  const contacts = req.app.get('contacts').map(contact => {
    if (contact.id === req.params.id) {
      return {
        ...contact,
        ...req.body
      };
    }
    return contact;
  });

  const content = JSON.stringify(contacts, null, 2);
  const filePath = path.resolve(__dirname, '../contacts.json');
  fs.writeFile(filePath, content, err => {
    if (err) throw err;
    res.send(contacts);
  });
});

router.put('/', (req, res) => {
  let contacts = req.app.get('contacts');
  contacts.push(req.body);
  contacts = contacts.sort((a, b) => {
    if (a.name < b.name) return -1;
    if (a.name > b.name) return 1;
    return 0;
  });
  const content = JSON.stringify(contacts, null, 2);
  const filePath = path.resolve(__dirname, '../contacts.json');
  fs.writeFile(filePath, content, err => {
    if (err) throw err;
    res.send(contacts);
  });
});

module.exports = router;
