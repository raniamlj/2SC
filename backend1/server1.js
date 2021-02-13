/*const http = require('http');

const server = http.createServer((req, res) => {
    res.end('Voilà la réponse du serveur !');
});

server.listen(process.env.PORT || 4000);*/

const http = require('http');
const app1 = require('./app1');

app1.set('port', process.env.PORT || 4000);
const server1 = http.createServer(app1);

server1.listen(process.env.PORT || 4000);