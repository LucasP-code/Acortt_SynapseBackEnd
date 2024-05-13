const express = require('express');
const app = express();
const cors = require('cors');



app.use(express.json());
app.use(cors());

const routerLogin = require('./Routes/routerLogin');

app.use(routerLogin);

module.exports = app;