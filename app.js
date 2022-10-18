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
app.use(function(err, req, res, next) {
    // set locals, only providing error in development
    res.locals.message = err.message;
    res.locals.error = req.app.get('env') === 'development' ? err : {};

    // render the error page
    res.status(err.status || 500);
    res.render('error');
});

//start server
app.listen(port, host, () => {
    console.log("Server is running on port", port);
});

