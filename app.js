var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan'); //on any requests being made, it generates logs automatically
var cors = require('cors');

var randomRouter = require("./routes/randomGen");


var app = express();

app.use(cors())
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser()); //middleware:cookie-parser parses Cookie header and populates req.cookies with an object keyed by the cookie names
app.use(express.static(path.join(__dirname, 'public')));


app.use("/randomGen", randomRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

app.get('*', (req,res) =>{
  res.sendFile(path.join(__dirname+'/frontend/public/index.html'));
});

const port = process.env.PORT || 9000;
app.listen(port)

console.log('App is listening on port' + port);


module.exports = app;
