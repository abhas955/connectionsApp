// require modules
const express = require("express");
const morgan = require("morgan");
const methodOverride = require('method-override');
const mainRouter = require("./routes/mainRoutes");
const connectionRouter = require("./routes/connectionRoutes")
const path = require("path");


// create app
const app = express();

//configure app
let port = 4000;
let host = "localhost";
app.set("view engine", "ejs");

//mount middle ware funcs
app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));
app.use(morgan("tiny"));
app.use(methodOverride('_method'));

//set up routes
app.get("/", (req, res) => {
    res.render("index");
});

app.use("/", mainRouter);
app.use("/connections", connectionRouter);
app.set('views', path.join(__dirname, 'views'));

app.use('/upload', mainRouter);
app.use('/upload', connectionRouter);



// error handler
app.use((req, res, next)=> {
    let err = new Error('The server cannot locate  '+ req.url);
    err.status = 404;
    next(err);
})



app.use((err, req, res, next) => {
    if(!err.status){
        console.log(err.stack);
        err.status = 500;
        err.message = ("Internal Server Error");
    }
    res.status(err.status);
    res.render('error', {error: err});
});


//start server
app.listen(port, host, () => {
    console.log("Server is running on port", port);
});

