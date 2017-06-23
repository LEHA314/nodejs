const http = require('http');
const connect = require('connect');
const app = connect();
const port = 3000;

connect.logger = function(req, res, next){
    console.log(`${req.url}`);
    next();
}

const myOwnMiddleware = (req, res, next) => {
    req.headers.sessionId = 1234;
    next();
}

const myCookieParser = (req, res, next) => {
    console.log(req.headers.cookie);
    next();
}

app.use(connect.logger);
app.use(myOwnMiddleware);
app.use(myCookieParser);
app.use((req, res) => {
    //console.log(req.headers.sessionId);
    res.end('Hello world\n');
})


http.createServer(app).listen(port, 'localhost', ()=>{
    console.log('Server listen on port ' + port);
});