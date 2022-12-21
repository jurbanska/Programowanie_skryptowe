const fs = require('fs');
const http = require('http');

function requestListener(request, response) {
    var url = new URL(request.url, `http://${request.headers.host}`);

    if (url.pathname == '/submit') {
        if (request.method == 'GET') {
            let path = url.searchParams.get('path');

            fs.stat(path, (err, stats) => {
                if (err) {
                    response.writeHead(404, { "Content-Type": "text/plain; charset=utf-8" });
                    response.write("The file does not exist.");
                    response.end();
                    return;
                }

                response.writeHead(200, { "Content-Type": "text/plain; charset=utf-8" });
                if (stats.isFile()){
                    response.write("This is a file.\n");

                    fs.readFile(path, (err, data) => {
                        response.write("\nFile content:\n\n" + data);
                        response.end();
                    });
                }

                else if (stats.isDirectory()) {
                    response.write("This is a directory.")
                    response.end();
                }

                else
                    response.end();
            });
        }

        else {
            response.write(`This application does not support the ${request.method} method`);
            response.end();
        }
    }

    else {
        response.writeHead(200, { "Content-Type": "text/html; charset=utf-8" });
        response.write(`<form method="GET" action="/submit">
	    					<label for="path">Enter the path: </label>
	    					<input name="path">
	    					<br><br>
	    					<input type="submit">
	    					<input type="reset">
	    				</form>`);
        response.end();
    }
}

var server = http.createServer(requestListener);
server.listen(8000);
console.log("The server was started on port 8000");
console.log("To stop the server, press 'CTRL + C'");