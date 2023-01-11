const express = require('express');
const logger = require('morgan');
const cors = require('cors');
/************* */
const app1 = express();
const app2 = express();
/************* */
app1.use(logger('dev'));
app2.use(logger('dev'));
app1.use(cors());
app2.use(cors());

/************* */
app1.listen(3000, function () {
    console.log('The application is available on port 3000');
});
app2.listen(3001, function () {
    console.log('The application is available on port 3001');
});
/************* */
app1.get('/', function (req, res) {
    res.send(`
    <html>
    <body>
        <form>
            <label>Area:</label>
            <input type="text" id="area"><br>
            <label>Location:</label>
            <input type="text" id="location"><br>
            <input type="button" value="Pobierz" onclick="downloadData()">
        </form>
        <h1>Remote</h1>
        <div id='remote'>
            Remote date and time
        </div>
        <h1>Local</h1>
        <div id='local'>
            Local date and time
        </div>
    </body>
    <script>
        function downloadData() {
            var area = document.getElementById("area").value;
            var location = document.getElementById("location").value;

            document.getElementById("remote").innerHTML = "Downloading data";

            var xhttp = new XMLHttpRequest();
            xhttp.onreadystatechange = function() {
                if (this.readyState === 4 && this.status === 200) {
                    var response = JSON.parse(this.responseText);

                    document.getElementById("remote").innerHTML = response.datetime;
                }
                else if (this.readyState === 4 && this.status === 503){
                    document.getElementById("remote").innerHTML = "The server is overloaded";
                }
            };
            xhttp.open("GET", "https://worldtimeapi.org/api/timezone/" + area + "/" + location, true);
            xhttp.send();

            var xhttp2 = new XMLHttpRequest();
            xhttp2.onreadystatechange = function() {
                if (this.readyState === 4 && this.status === 200) {
                    var xmlDoc = this.responseXML.documentElement;

                    var date = xmlDoc.getElementsByTagName('date')[0].innerHTML;
                    var time = xmlDoc.getElementsByTagName('time')[0].innerHTML;

                    document.getElementById("local").innerHTML = 'Local: ' + date + ' ' + time;
                }
                else if (this.readyState === 4 && this.status === 503){
                    document.getElementById("local").innerHTML = "The server is overloaded";
                }
            };
            xhttp2.open("GET", "http://localhost:3001", true);
            xhttp2.responseType = 'document';
            xhttp2.send();
        }
    </script>
</html>
    `);
});

app2.get('/', function (req, res) {
    const currentDate = new Date();
    const dateString = currentDate.toDateString();
    const timeString = currentDate.toLocaleTimeString();
    const html = `
    <!DOCTYPE html>
    <html>
    <head>
        <title>Local Time Server</title>
    </head>
    <body>
        <div>
            <span id='date'>${dateString}</span>
            <span id='time'>${timeString}</span>
        </div>
    </body>
    </html>
    `;
    res.send(html);
});
/************* */
console.log("To stop the server, press 'CTRL + C'");
