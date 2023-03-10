import express from 'express';
import path from 'path';
import morgan from 'morgan'
import cookieParser from 'cookie-parser';
import session from 'express-session';
import dotenv from 'dotenv';import { networkInterfaces } from 'os';


dotenv.config();
const __dirname = path.resolve();
const app = express();

 
app.set('port', process.env.PORT || 3000);



app.use(session({
    resave: false,
    saveUninitialized : false,
    sevret: process.env.COOKIE_SECRET,
    cookie: {
        httpOnly : true,
        secure : false,
    },
    name: 'session-cookie',
}));

app.use((req, res, next) => {
    console.log('모든 요청에 다 실행한다');
    next();
})
app.use(
    morgan('dev'),
    express.static('/', express.static(path.join(__dirname),'public')),
    express.json(),
    express.urlencoded({extended:false}),
    cookieParser(process.env.COOKIE_SECRET),
);


app.get('/', (req,res,next) => {
   console.log('GET 요청에서만 실행된다.');
next();
}), (req,res) => {
    throw new Error('에러는 에러 처리 미들웨어로 간다')
};

app.use((err, req, res, next)=> {
    console.error(err);
    res.status(500).send(err.message);
})

app.listen(app.get('port'), () => {
    console.log(app.get('port'), '번 포트에서 대기 중');
});