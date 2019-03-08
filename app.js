var express = require("express");
var bodyParser = require("body-parser");

// const version = "v0.1";
// const resourceGroup = "tsysmock";
// const urlBase = "/" + version + "/" + resourceGroup;

// declare a new express app
var app = express();
app.use(bodyParser.json());

// Enable CORS for all methods
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers"
  );
  next();
});

//Register routes
app.use("/account", require("./routes/account"));
app.use("/customer", require("./routes/customer"));

// catch 404
app.use((req, res, next) => {
  console.log(`Error 404 on ${req.url}`);
  res.status(404).send({ status: 404, error: "Not found" });
});

// catch errors
app.use((err, req, res, next) => {
  const status = err.status || 500;
  console.log(
    `Error ${status} (${err.message}) on ${req.method} ${
      req.url
    } with payload ${req.body}.`
  );
  res.status(status).send({ status, error: "Internal server error" });
});

module.exports = app;
