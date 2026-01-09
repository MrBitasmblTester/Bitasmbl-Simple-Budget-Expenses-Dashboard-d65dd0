const http=require('http');
const server=http.createServer();
const io=require('socket.io')(server);
io.on('connection',s=>{});
server.listen(3000);