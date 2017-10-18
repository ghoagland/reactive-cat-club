'use strict'

const express = require('express');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const path = require('path');

const catRoutes = require('./routes/cats');
const userRoutes = require('./routes/users');
const db = require('./models').db;
const app = express();

module.exports = app

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

app.use(morgan('dev'));

// static middleware

app.use(express.static(path.join(__dirname, '..', 'public')));

app.use('/cats', catRoutes);
app.use('/users', userRoutes);


//error handling~! hooray~

app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(err.status || 500).send(err.message);
})
db.sync()
.then(() => {
  console.log('kitten database has synced, yay!')
  app.listen(3000, () => {
  console.log('Server is listening for meowing at port 3000...')
 })
})
.catch(() => {
  console.log('where are the cats? something weird happened!')
})

