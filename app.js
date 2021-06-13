const http= require('http');
const routes=require('./routes');

const Server =http.createServer(routes.handler);

console.log(routes.sometext)

Server.listen(3000);

