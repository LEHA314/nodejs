const http = require('http');
const express = require('express');
const app = express();
const port = 3000;

app.logger = function(req, res, next){
    console.log(`${req.url}`);
    next();
};

const myOwnMiddleware = (req, res, next) => {
    req.headers.sessionId = 1234;
    next();
};

const myCookieParser = (req, res, next) => {
    console.log(req.headers.cookie);
    next();
};

app.use(app.logger);
app.use(myOwnMiddleware);
app.use(myCookieParser);

app.get('/', (req, res)=> {
    console.log('Hello express');
    res.status(200);
    res.json({status: 200, message: 'Ok'});
});

app.use((req, res)=> {
    console.log('req.headers.sessionId');
    res.end('Page not found');
});


http.createServer(app).listen(port, 'localhost', ()=>{
    console.log('Server listen on port ' + port);
});