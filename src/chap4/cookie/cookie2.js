import http from 'http';
import fs from 'fs';
import path from 'path';


const parseCookies = (cookie ='') =>
    cookie  
        .split(';')
        .map(v => v.split('='))
        .reduce((acc, [k,v]) => {
            acc[k.trim()] = decodeURIComponent(v);
            return acc;
        }, {});


http.createServer(async (req,res) => {
    const cookies = parseCookies(req.headers.cookie);


if(req.url.startsWith('/login')) { //주소가 login으로 시작할 때

    const url = new URL(req.url, 'http://localhost: 8084');
    const name = url.searchParams.get('name');
    const expires = new Date();

    expires.setMinutes(expires.getMinutes() + 5);
    res.writeHead(302, {
        Location: '/',
        'Set-Cookie' : `name = ${encodeURIComponent(name)}; Expires=${expires.toGMTString()}; HttpOnly; Path=/`,
    });

    res.end();
}
else if (cookies.name) { //주소가 /이면서 name쿠키가 있을 경우
    res.writeHead(200, { 'Content-Type': 'text/plain; charset=utf-8'});
    res.end(`${cookies.name}님 안녕하세요`); 
}
else{
    try{
        const data = await fs.readFile(path.join(__dirname, 'cookie2.html'));
        res.writeHead(200, { 'Content-Type' : 'text/html; charset=utf-8'});
        res.end(data);
    }catch(err){
        res.writeHead(500, {'Content-Type': 'text/plain; charset=utf-8'});
        res.end(err.message);
    }
}
})
    .listen(8084, () => {
        console.log('8084포트에서 대기중');
    });