var http = require('http');
var fs = require('fs');

http.createServer((req,res)=>{
  fs.readFile('index.html',(err, data)=>{
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write(data);
    return res.end();
  })
//    res.write("Hello World from index.js, jyydev.github.io");
//    res.end();

}).listen(80);

console.log('running on port: '+process.env.PORT);