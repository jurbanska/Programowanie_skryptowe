const express = require("express");
const app = express();
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const session = require('express-session');
dotenv.config();
const passport = require("passport");
const { loginCheck } = require("./auth/passport");
loginCheck(passport);

// Mongo DB conncetion
const database = process.env.MONGOLAB_URI;
mongoose.connect(database, { useUnifiedTopology: true, useNewUrlParser: true })
  .then(() => console.log("e don connect"))
  .catch((err) => console.log(err));

app.set("view engine", "ejs");

//BodyParsing
app.use(express.urlencoded({ extended: false }));
app.use(session({
    secret:'oneboy',
    saveUninitialized: true,
    resave: true
  }));
 
//set "X-Content-Type-Options" header to "nosniff"
app.use(function (req, res, next) {
  res.set('X-Content-Type-Options', 'nosniff');
  next();
});

//fixed so that X-Frame_Options wouldn't be defined via meta
app.use(function (req, res, next) {
  res.set('X-Frame-Options', 'deny');
  next();
});

//cookies
app.use(session({
  secret:'oneboy',
  saveUninitialized: true,
  resave: true,
  cookie: {
      secure: true,
      sameSite: "Strict"
  }
}));

//leak fixed
app.disable('x-powered-by');



app.use(passport.initialize());
app.use(passport.session());
//Routes
app.use("/", require("./routes/login"));

const PORT = process.env.PORT || 4111;

app.listen(PORT, console.log("Server has started at port " + PORT));
