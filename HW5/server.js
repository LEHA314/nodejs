const http = require('http');
const path = require("path");
const mime = require("mime");
const fs = require('fs');

let staticDirName = '';
let cashe = {};

const static = function(dirName){
  staticDirName = './' + dirName;
};

const send404 = function(response) {
  response.writeHead(404, {'Contenr-Type': 'text/plain'});
  response.write("Error 404: resourse not found.");
  response.end();
};

const sendFile = function (response, filePath, fileContents) {
  response.writeHead(200, {'Contenr-Type': mime.lookup(path.basename(filePath))});
  response.end(fileContents);
}

const serverStatic = function(response, absPath){
  absPath = staticDirName + absPath;
  if(cashe[absPath]) {
    sendFile(response, absPath, cashe[absPath]);
  }
  else {
    fs.stat(absPath, function(err, stats) {
      if(stats) {
        fs.readFile(absPath, function(err, data) {
          if(err) {
            send404(response);
          } 
          else {
            cashe[absPath] = data;
            sendFile(response, absPath, data);
          }
        })
      }
      else {
        send404(response);
      }
    })
  }
}

const server = http.createServer( (req, res) => {
  if(req.url !== '' && staticDirName !== ''){
    serverStatic(res, req.url);
  } else {
    res.end('Not set publick directory');
  }
});

static('public');

server.listen(3000, 'localhost', () => {
  console.log('Listen server on port 3000');
});