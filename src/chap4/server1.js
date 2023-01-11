
import http from 'http';

http.createServer((req,res) => {

    res.writeHead(200, { 'Content-Type' : 'text/html; charset=utf-8'});
    res.write('<h1> HELLO NODE!</h1>');
    res.end('<p>HELLO SERVER!</p>');
})
    .listen(8080, () => {
        console.log('8080 포트에서 대기중');
 });