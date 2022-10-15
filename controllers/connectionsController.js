const model = require("../models/connection");



//GET /stories: send all connections to the user
exports.connectionsList = (req,res) => {
    // res.render("./connection/connectionList");
    let connections = model.find();
    res.render('./connection/connectionList', { connections });
};

// GET /stories/new: send html form for creating a new story
exports.new = (req, res) => {
    res.render("./connection/newConnection");
}

//POST /connection: create a new story
exports.create = (req, res) => {
    let connection = req.body;
    model.save(connection);
    res.redirect("/connections");
};
//Get connections/:id send details of connection identified by id
exports.show = (req, res) => {
    let id = req.params.id;
    let connection = model.findById(id);
    if(connection){
        res.render('/connection/connection', { connection });
    }
}
//
// exports.new = (req, res) => {
//     res.render("./connection/newConnection");
// }

exports.show = (req, res) => {
    let id = req.params.id;
    let connection = model.findById(id);
    if(connection) {
        res.render('./connections/show', {connection});
    }
    res.status(404).send(`cannot find story with id ${id}`);
}