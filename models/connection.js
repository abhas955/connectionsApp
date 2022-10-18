const {DateTime} = require('luxon');
const {v4: uuidv4} = require("uuid");
const connections = [
    {
        id: '0',
        title:'Intro To Game Development',
        category: 'Study',
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
        title:'Artificial Intelligence',
        category: 'Study',
        host:'James Gill',
        details:'Individuals that are Artificial Intelligence enthusiasts would like to meet and learn together',
        where: 'Druid Hills Drive High School',
        when: '10/25/2022',
        start: '6:15 PM',
        end: '7:30 PM',
        imageURL: 'https://www.simplilearn.com/ice9/free_resources_article_thumb/Why-get-certified-in-Artificial-Intelligence.jpg',
        createdAt: DateTime.now().toLocaleString(DateTime.DATETIME_SHORT),

    },
    {
        id: '2',
        title:'Intro To IntelliJ',
        category: 'Study',
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
        id: '3',
        title:'Soccer Practice',
        category: 'Sports',
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
        id: '4',
        title:'Basketball Practice',
        category: 'Sports',
        host:'Jim Beglin',
        details:'If you are interested in practicing basketball and improving your game, come join us!',
        where: 'North Carolina Central University',
        when: '10/29/2022',
        start: '6:15 PM',
        end: '7:30 PM',
        imageURL: 'https://cdn1.sportngin.com/attachments/call_to_action/cecb-173506978/MLKSKILLZ-64_large.jpg',
        createdAt: DateTime.now().toLocaleString(DateTime.DATETIME_SHORT),

    },
    {
        id: '5',
        title:'Football Practice',
        category: 'Sports',
        host:'Arthur Melo',
        details:'If you are interested in practicing football and improving your game, come join us!',
        where: 'North Carolina A&T University',
        when: '11/29/2022',
        start: '6:15 PM',
        end: '7:30 PM',
        imageURL: 'https://s.yimg.com/os/creatr-uploaded-images/2020-12/e3514670-3fbf-11eb-b67f-efeaa313555f',
        createdAt: DateTime.now().toLocaleString(DateTime.DATETIME_SHORT),

    }
];

exports.find = function () {
    return connections;
};


exports.findById = function (id) {
    return connections.find((connection) => connection.id === id);
};


categories = [];
exports.findAllCategories = function (){

    connections.forEach(connection => {
        if (!categories.includes(connection.category)) {
            categories.push(connection.category);
        };
    });
    return categories;

};

exports.updateById = function (id, newConnection){
    let connection = connections.find((connection) => connection.id === id);
    if(connection){
        connection.title = newConnection.title;
        connection.category = newConnection.category;
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

exports.findByCategories = (category) =>{
    return connections.find((connection) => connection.category === category);
};

exports.save =  function (connection) {
    connection.id = uuidv4();
    connection.createdAt = DateTime.now().toLocaleString(DateTime.DATETIME_SHORT);
    connections.push(connection);
};

exports.deleteById = function (id) {
    let index = connections.findIndex(connection => connection.id === id );
    if(index !== -1){
        connections.splice(index, 1);
        return true;
    }
    else{
        return false;
    }
};