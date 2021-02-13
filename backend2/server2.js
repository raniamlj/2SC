const http = require('http');
const app2 = require('./app2');

app2.set('port', process.env.PORT || 4001);
const server2 = http.createServer(app2);

server2.listen(process.env.PORT || 4001);