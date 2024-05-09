const express = require('express');
const app = express();
const cors = require('cors');

const routersUsers = require('./routers/routersUser');

app.use(express.json());
app.use(cors());

app.use(routersUsers)

module.exports = app;