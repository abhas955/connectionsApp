const model = require("../models/connection.js");



//GET /stories: send all connections to the user
exports.connectionsList = (req,res) => {
    // res.render("./connection/connectionList");
    let connections = model.find();
    let topics = model.findAllTopics();
    res.render('./connection/connectionList', {topics,connections });

    //res.send(model.find());

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
        res.render('./connection/show', { connection });
    }
    res.status(404).render("./connection/show");
    return;
}
//
// exports.new = (req, res) => {
//     res.render("./connection/newConnection");
// }




exports.edit = (req, res) => {
    let id = req.params.id;
    let connection = model.findById(id);
    if(connection){
        res.render('./connection/edit', { connection });
    }
    res.status(404).send("Cannot find story with id " + id);
    return;
}

exports.update = (req, res) => {
    let connection = req.body;
    let id = req.params.id;

    if(model.updateById(id, connection)){
        res.redirect('/connections/' +id);
    }
    else{
        res.status(404).send('Cannot find story with id ' + id);
    }
    //res.send("update");
}

//DELETE /connections/:id, delete connection identified by id
exports.delete = (req, res) => {
    let id = req.params.id;
    if(model.deleteById(id)){
        res.redirect('/connections');
    }
    else{
        res.status(404).send('Cannot find story with id '+id);
    }
};
