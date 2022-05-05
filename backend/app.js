const bodyParser = require("body-parser");
const express = require("express");
const request = require("request");

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req, res) => {
    res.send("home", { loggedIn: false });
});


app.listen(3000, () => {
    console.log("Server is running on Port : 3000");
});