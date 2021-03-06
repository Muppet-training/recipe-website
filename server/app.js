const express = require('express')

const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const path = require("path");
const recipeListRouter = require( "./routes/recipeList");
const recipeRouter = require( "./routes/recipe");
const indexRouter = require( "./routes/index");

// Server constants
const app = express();
const dbURL = "mongodb://localhost:27017/receipedb";
const port = 3001;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
//app.use(expressValidator());

app.use(express.static(path.join(__dirname, "../build")));

// DB Connection
mongoose.connect(dbURL, function(err) {
    if (err) {
        throw err;
    } else {
        console.log("Your MongoDB is running at " + dbURL);
    }
});
mongoose.Promise = global.Promise;

// Handling Routes for API.
app.use("/", recipeRouter);
app.use("/api/add-recipe", recipeRouter);
app.use("/api/delete-recipe", recipeRouter);
app.use("/api/edit-recipe", recipeListRouter);
app.use("/api/home", indexRouter);
/*app.get("/", function(req, res) {
    res.sendFile("index.html");
});*/

// Handle 404 Request
app.use((req, res) => {
    res.status(404).json({
        errors: {
            global: "Something Went wrong with the requested resource"
        }
    });
});

// Handle 500 Request
app.use((req, res) => {
    res.status(500).json({
        errors: {
            global: "Something Wrong with Server"
        }
    });
});

app.listen(port, () =>
    console.log(`Server Listening at ${port} : http://localhost:${port}`)
);

module.exports = app;