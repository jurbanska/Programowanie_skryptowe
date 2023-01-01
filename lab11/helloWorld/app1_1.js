const express = require('express'),
    logger = require('morgan');
const app = express();

// Determining the contents of the middleware stack
app.use(logger('dev'));                            // Place an HTTP request recorder on the stack — each request will be logged in the console in 'dev' format
// app.use(express.static(__dirname + '/public')); // Place the built-in middleware 'express.static' — static content (files .css, .js, .jpg, etc.) will be provided from the 'public' directory

// *** Route definitions ***

// The application is to listen on port number 3000


// Add a new route to the application
app.get('/json/:name', function (req, res) {
    const file = require(`./zad2.json`);
    let response = '<table><tr><th>x</th><th>operation</th><th>y</th><th>result</th></tr>';

    for (let i = 0; i < file.length; i++) {
        const operation = file[i].operation;
        const x = file[i].x;
        const y = file[i].y;
        let result;

        if (operation === 'add') {
            result = x + y;
        }
        else if (operation === 'subtract') {
            result = x - y;
        }
        else if (operation === 'multiply') {
            result = x * y;
        }
        else if (operation === 'divide') {
            result = x / y;
        }
        else {
            result = 'Invalid operation';
        }

        response += `<tr><td>${x}</td><td>${operation}</td><td>${y}</td><td>${result}</td></tr>`;
    }

    response += '</table>';

    res.send(`
    <!DOCTYPE html>
    <html lang="en" data-bs-theme="dark">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <link
        href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/css/bootstrap.min.css"
        rel="stylesheet"
        integrity="sha384-GLhlTQ8iRABdZLl6O3oVMWSktQOp6b7In1Zl3/Jr59b6EGGoI1aFkw7cmDA6j6gD"
        crossorigin="anonymous">
        <title>Your first page</title>
    </head>
    <body>
        <main class="container">
        <h1>JSON Response</h1>
        <p>${response}</p>
        <style>
        table {
          border-collapse: collapse;
          width: 100%;
        }
        
        td, th {
          border: 1px solid #dddddd;
          text-align: left;
          padding: 8px;
        }        
        </style>
        </main>
        <script
        src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/js/bootstrap.bundle.min.js"
        integrity="sha384-w76AqPfDkMBDXo30jS1Sgez6pr3x5MlQ1ZAGC+nuZB+EYdgRZgiwxhTBTkF7CXvN"
        crossorigin="anonymous">
        </script>
    </body>
    </html>
    `);
});
app.listen(3000, function () {
    console.log('The application is available on port 3000');
});