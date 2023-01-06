

import http, { Server } from 'http';

http.createServer((req,res) => {

    res.writeHead(200, { 'Content-Type' : 'test/html; charset=utf-8'});
    res.write('<h1> HELLO NODE!</h1>');
    res.end('<p>HELLO SERVER!</h1>');
})
 
server.listen(8080);

server.on('listening', () => {
    console.log("8080번 포트에서 대기 중");
});
server.on('error' ,(error) => {
    console.error(err);
});