const routes = require("express").Router();


const myController = require("../controllers");

routes.get("/", myController.myNameFunction);
routes.get("/another", myController.anotherNameFunction);

module.exports = routes;
