const express = require("express");
const app = express();
const cors = require("cors");


app.use(express.json());
app.use(cors());

const routersUsers = require("./Routers/routersUser");
const routerLogin = require('./Routers/routerLogin');
const routerProd = require('./Routers/routerProd');

app.use(routersUsers);
app.use(routerLogin);
app.use(routerProd);

module.exports = app;
