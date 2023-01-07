import http from 'http';

http.createServer((req,res) => {

    console.log(req.url, req.headers.cookie);
    res.writeHead(200, { 'Set-Cookie' : 'mycookie=test'});
    res.end('hello cookie');
})

    .listen(8083, () => {
        console.log('포트번호 : 8083');
    });