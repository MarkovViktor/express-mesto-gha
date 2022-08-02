const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const users = require('./routes/users');
const cards = require('./routes/cards');

const app = express();
const { PORT = 3000 } = process.env;

mongoose.connect('mongodb://localhost:27017/mestodb');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use((req, res, next) => {
  req.user = {
    _id: '62e8e5e70ee123c566362816',
  };
  next();
});
app.use('/users', users);
app.use('/cards', cards);
app.use((req, res) => {
  res.status(404).send({ message: 'Страницы не существует' });
});

app.listen(PORT);
