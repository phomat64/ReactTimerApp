// Import the exress module
var express = require('express');

// Create our app
var app = express();
const PORT = process.env.PORT || 3000;

// Custom code for Heroku
app.use(function (req, res, next) {
  if (req.headers['x-forwarded-proto'] === 'https') {
    res.redirect('http://' + req.hostname + req.url);
  } else {
    next();
  }
})

// Specify the folder you want to expose to the web server
app.use(express.static('public'));

// Start the server. Specify port and function to call once the server is up
app.listen(PORT, function() {
  console.log('Express server is up on port ' + PORT);
});
