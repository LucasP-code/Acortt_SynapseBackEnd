const express = require("express");
const app = express();
const cors = require("cors");


app.use(express.json());
app.use(cors());

const routersUsers = require("./Routers/routersUser");
const routerLogin = require('./Routers/routerLogin');
const routerProd = require('./Routers/routerProd');
const routerHome = require('./Routers/routerHome');

app.use(routersUsers);
app.use(routerLogin);
app.use(routerProd);
app.use(routerHome);

module.exports = app;
