const model = require("../models/connection");
exports.connections = (req, res) => {
    // res.render("../connection/connectionList");
    // let connections = model.find();
    // res.render('./connection/connectionList', { connections });

};




exports.new = (req, res) => {
    res.render("./connection/newConnection");
}


exports.contact = (req, res) => {
    res.render('contact');
};

exports.about = (req, res) => {
    res.render('about');
};

