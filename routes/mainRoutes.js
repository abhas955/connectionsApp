const express = require('express');

const mainRouter = express.Router();

const mainController = require('../controllers/mainController');


//navigate to connectionsList
// mainRouter.get("/connections", (req, res) => {
//     res.render('connection/connectionList');
// });


//navigate to about
mainRouter.get("/about",mainController.about);
// mainRouter.get("/", mainController.connectionList);


//navigate to contact
mainRouter.get("/contact", mainController.contact);









//navigate to login

module.exports = mainRouter;

