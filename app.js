// require modules
const express = require("express");
const morgan = require("morgan");
const mainRouter = require("./routes/mainRoutes");
const connectionRouter = require("./routes/connectionRoutes")

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

//set up routes
app.get("/", (req, res) => {
    res.render("index");
});

app.use("/", mainRouter);
app.use("/connections", connectionRouter);
app.set('view engine', 'ejs');
app.use('/upload', mainRouter);
app.use('/upload', connectionRouter);

//start server
app.listen(port, host, () => {
    console.log("Server is running on port", port);
});