const {DateTime} = require('luxon');
const {v4: uuidv4} = require("uuid");
const connections = [
    {
        id: '1',
        title:'',
        topic: '',
        host:'',
        details:'',
        where: '',
        when: '',
        start: '',
        end: '',
        imageURL: '',
        createdAt: '',
    }
];

exports.find = function () {
    return connections;
};

exports.findById = function (id) {
    return connections.find((connection) => connection.id === id);
};

exports.save =  function (connection) {
    connection.id = uuidv4();
    connection.createdAt = DateTime.now().toLocaleString(DateTime.DATETIME_SHORT);
    connections.push(connection);
}