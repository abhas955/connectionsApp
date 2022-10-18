const model = require("../models/connection.js");



//GET /stories: send all connections to the user
exports.connectionsList = (req,res) => {
    // res.render("./connection/connectionList");
    let connections = model.find();
    let categories = model.findAllCategories();
    res.render('./connection/connectionList', {categories,connections });

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
exports.show = (req, res,next) => {
    let id = req.params.id;
    let connection = model.findById(id);
    if(connection){
        res.render('./connection/show', { connection });
    }
    let err = new Error('Cannot find a story with id '+ id);
    err.status = 404;
    next(err);
}
//
// exports.new = (req, res) => {
//     res.render("./connection/newConnection");
// }




exports.edit = (req, res,next) => {
    let id = req.params.id;
    let connection = model.findById(id);
    if(connection){
        res.render('./connection/edit', { connection });
    }
    let err = new Error('Cannot find a story with id '+ id);
    err.status = 404;
    next(err);
}

exports.update = (req, res,next) => {
    let connection = req.body;
    let id = req.params.id;

    if(model.updateById(id, connection)){
        res.redirect('/connections/' +id);
    }
    else{
        let err = new Error('Cannot find a story with id '+ id);
        err.status = 404;
        next(err);
    }
    //res.send("update");
}

//DELETE /connections/:id, delete connection identified by id
exports.delete = (req, res, next) => {
    let id = req.params.id;
    if(model.deleteById(id)){
        res.redirect('/connections');
    }
    else{
        let err = new Error('Cannot find a story with id '+ id);
        err.status = 404;
        next(err);
    }
};
