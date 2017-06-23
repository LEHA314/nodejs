const config = require('./config/server.config');
const http = require('http');
const app = require('express')();
const logger = require('./utilities/logger');
const index = require('./routes/index.router');


app.use(logger);
app.use('/', index);

http.createServer(app).listen(config.port, config.host, ()=>{
    console.log('Server listen on port ' + config.port);
});