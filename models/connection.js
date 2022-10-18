const {DateTime} = require('luxon');
const {v4: uuidv4} = require("uuid");
const connections = [
    {
        id: '0',
        title:'Intro To Game Development',
        topic: 'Study',
        host:'James Aram',
        details:'Individuals that are game development enthusiasts would like to meet and learn together',
        where: 'Athens Drive High School',
        when: '10/25/2022',
        start: '6:15 PM',
        end: '7:30 PM',
        imageURL: 'https://cdnjs.cloudflare.com/ajax/libs/simple-icons/3.2.0/playstation.svg',
        createdAt: DateTime.now().toLocaleString(DateTime.DATETIME_SHORT),

    },
    {
        id: '1',
        title:'Intro To IntelliJ',
        topic: 'Study',
        host:'James Aram',
        details:'Individuals that are IntelliJ enthusiasts would like to meet',
        where: 'Apex High School',
        when: '10/25/2022',
        start: '6:15 PM',
        end: '7:30 PM',
        imageURL: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/9c/IntelliJ_IDEA_Icon.svg/1200px-IntelliJ_IDEA_Icon.svg.png',
        createdAt: DateTime.now().toLocaleString(DateTime.DATETIME_SHORT),
    },
    {
        id: '2',
        title:'Soccer Practice',
        topic: 'Sports',
        host:'Jose Mourinho',
        details:'If you are interested in practicing soccer and improving your game, come join us!',
        where: 'Needham Broughton High School',
        when: '10/29/2022',
        start: '6:15 PM',
        end: '7:30 PM',
        imageURL: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSlb39VDlg58zV-fiMiBnC4D3DgefTcllCKG50Npg0RZ65c0ppmgx-iXB9IXw6prMMdSJw&usqp=CAU',
        createdAt: DateTime.now().toLocaleString(DateTime.DATETIME_SHORT),

    },
    {
        id: '3',
        title:'Basketball Practice',
        topic: 'Sports',
        host:'Jim Beglin',
        details:'If you are interested in practicing basketball and improving your game, come join us!',
        where: 'North Carolina Central University',
        when: '10/29/2022',
        start: '6:15 PM',
        end: '7:30 PM',
        imageURL: 'https://cdn1.sportngin.com/attachments/call_to_action/cecb-173506978/MLKSKILLZ-64_large.jpg',
        createdAt: DateTime.now().toLocaleString(DateTime.DATETIME_SHORT),

    }
];

exports.find = function () {
    return connections;
};


exports.findById = function (id) {
    return connections.find((connection) => connection.id === id);
};


topics = [];
exports.findAllTopics = function (){

    connections.forEach(connection => {
        if (!topics.includes(connection.topic)) {
            topics.push(connection.topic);
        };
    });
    return topics;

};

exports.updateById = function (id, newConnection){
    let connection = connections.find((connection) => connection.id === id);
    if(connection){
        connection.title = newConnection.title;
        connection.topic = newConnection.topic;
        connection.host = newConnection.host;
        connection.details = newConnection.details;
        connection.where = newConnection.where;
        connection.when = newConnection.when;
        connection.start = newConnection.start;
        connection.end = newConnection.end;
        connection.imageURL = newConnection.imageURL;
        return true;

    }
    else{
        return false;
    }
}

exports.findByTopic = (topic) =>{
    return connections.find((connection) => connection.topic === topic);
};

exports.save =  function (connection) {
    connection.id = uuidv4();
    connection.createdAt = DateTime.now().toLocaleString(DateTime.DATETIME_SHORT);
    connections.push(connection);
};

exports.deleteById = function (id) {
    let index = connections.findIndex((connection, index) => connection.id === id );
    if(index !== -1){
        connections.splice(index, 1);
        return true;
    }
    else{
        return false;
    }
};