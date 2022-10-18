const express = require('express');
const model = require('../models/connection');
const connectionRouter = express.Router();
const connectionController = require('../controllers/connectionsController');
const mainController = require("../controllers/mainController");

//GET /connections: send all connections to the user
connectionRouter.get("/",connectionController.connectionsList);

// GET /connections/new: send html form for creating a new connection
connectionRouter.get("/new", connectionController.new);
//create new connection page
connectionRouter.get('/create', (req, res) => {
   let connection = req.body;
   model.save(connection);
   res.redirect('/connections');
});

//POST /connections: create a new connection
// connectionRouter.get("/", connectionController.create);
connectionRouter.post("/", connectionController.create);

//GET /connections/:id send details of connection identified by id
connectionRouter.get("/:id", connectionController.show);

//GET /connections/:id/edit: send html form for editing an existing connection
connectionRouter.get("/:id/edit", connectionController.edit);

//PUT /connections/:id: update the connection identified by id
connectionRouter.put("/:id", connectionController.update);

//DELETE /connections/:id, delete connection identified by id
connectionRouter.delete("/:id/delete", connectionController.delete);

module.exports = connectionRouter;