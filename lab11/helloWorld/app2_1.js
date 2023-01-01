// Application using the 'Pug' template system
const express = require('express'),
    logger = require('morgan'),
    fs = require('fs');
const app = express();

// Function for calculating the operation
function calculateOperation(operation, x, y) {
    switch (operation) {
        case 'add':
            return x + y;
        case 'subtract':
            return x - y;
        case 'multiply':
            return x * y;
        case 'divide':
            return x / y;
        default:
            return 'Invalid operation';
    }
}

// Configuring the application
app.set('views', __dirname + '/views');               // Files with views can be found in the 'views' directory
app.set('view engine', 'pug');                        // Use the 'Pug' template system
app.locals.pretty = app.get('env') === 'development'; // The resulting HTML code will be indented in the development environment
app.locals.calculateOperation = calculateOperation;   // Make the function available in the view


// Determining the contents of the middleware stack
app.use(logger('dev'));                            // Add an HTTP request recorder to the stack — every request will be logged in the console in the 'dev' format
// app.use(express.static(__dirname + '/public')); // Place the built-in middleware 'express.static' — static content (files .css, .js, .jpg, etc.) will be provided from the 'public' directory

// *** Route definitions ***

// The first route
app.get('/json/zad2', function (req, res) {
    fs.readFile('./zad2.json', 'utf8', (err, data) => {
        if (err) throw err;
        let jsonData = JSON.parse(data);
        res.render('index1', {jsonData});
    });
});


// The application is to listen on port number 3000
app.listen(3000, function () {
    console.log('The application is available on port 3000');
});