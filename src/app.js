const express = require('express');
const router = require("./routes/routes.js");
const app = express();


app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(morgan("dev"));
//* Handlebars config
const { engine } = require("express-handlebars");
app.engine('handlebars',engine());
app.set("view engine", "handlebars")
app.set("views","./views")

// inicializando las rutas 
app.get("/", (req, res) => {
    res.render("productos")
})
app.use('/', router);

module.exports = app;