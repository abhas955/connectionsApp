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
   res.redirect('/connection/connectionList');
});

//POST /connections: create a new connection
// connectionRouter.get("/", connectionController.create);
connectionRouter.post("/", connectionController.create);

//GET /connections/:id send details of connection identified by id
 connectionRouter.get("/:id", connectionController.show);

//GET /connections/:id/edit: send html form for editing an existing connection
// router.get("/:id/edit", controller.edit);

//PUT /connections/:id: update the connection identified by id
// router.put("/:id", controller.update);

//DELETE /connections/:id, delete connection identified by id
// router.delete("/:id", controller.delete);

module.exports = connectionRouter;